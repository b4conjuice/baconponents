import { type NextPage } from 'next'

import Page from '@/components/page'
import Main from '@/components/design/main'
import Title from '@/components/design/title'
import { api } from '@/lib/api'

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: 'from tRPC' })

  return (
    <Page>
      <Main className='flex flex-col p-4'>
        <div className='flex flex-grow flex-col items-center justify-center space-y-4'>
          <Title>home</Title>
          {hello.data?.greeting}
        </div>
      </Main>
    </Page>
  )
}

export default Home
