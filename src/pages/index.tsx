import { type NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react'
import {
  ArrowRightOnRectangleIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/solid'

import Page from '@/components/page'
import Main from '@/components/design/main'
import Title from '@/components/design/title'
import Messages from '@/components/messages'
import { api } from '@/lib/api'

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: 'from tRPC' })
  const { data: session } = useSession()

  return (
    <Page>
      <Main className='flex flex-col p-4'>
        <div className='flex justify-end space-x-4'>
          {session ? (
            <button
              type='button'
              onClick={() => {
                signOut().catch(err => console.log(err))
              }}
            >
              <ArrowLeftOnRectangleIcon className='h-6 w-6' />
            </button>
          ) : (
            <button
              type='button'
              onClick={() => {
                signIn('discord').catch(err => console.log(err))
              }}
            >
              <ArrowRightOnRectangleIcon className='h-6 w-6' />
            </button>
          )}
        </div>
        <div className='flex flex-grow flex-col items-center justify-center space-y-4'>
          <Title>home</Title>
          {hello.data?.greeting}
        </div>
        <Messages />
      </Main>
    </Page>
  )
}

export default Home
