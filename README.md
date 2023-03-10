# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

## update existing files

### `prettier.config.cjs`

```js
/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  singleQuote: true,
  jsxSingleQuote: true,
  printWidth: 80,
  trailingComma: 'es5',
  arrowParens: 'avoid',
  endOfLine: 'auto',
  semi: false,
}
```

### `tailwind.config.cjs`

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  ...
  theme: {
    extend: {
      colors: {
        cobalt: '#193549',
        'cb-blue': '#193549',
        'cb-yellow': '#ffc600',
        'cb-orange': '#ff9d00',
        'cb-mint': '#2affdf',
        'cb-off-blue': '#0d3a58',
        'cb-dusty-blue': '#35434d',
        'cb-dark-blue': '#15232d',
        'cb-pink': '#fb94ff',
        'cb-light-blue': '#9effff',
        'cb-white': '#cccccc',
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      },
    },
  },
  ...
};

```

### `tsconfig.json`

```json
"noUncheckedIndexedAccess": true,
    "paths": {
      "@/*": ["./src/*"]
    }
```

## add files

- `/components`
  - page, meta, loading, main, footer
  - `cp -r ~/dev/baconponents/src/components src`
- `/public`
  - `favicon.png`
  - `icon.png`
  - `manifest.json`
  - `splash.png`
- `/.vscode/settings.json`
  - `mkdir .vscode`
  - `cp ~/dev/draft/.vscode/settings.json .vscode/settings.json`
- `/utils` > `/lib`
  - add `/lib` files
  - `cp -r ~/dev/baconponents/src/lib src`

## project specific changes

- `manifest.json` - update `name` and `short_name`
- `src/components/page.tsx` - update `DEFAULT_TITLE`
- `package.json` - update `dev` script to include `-p $PORT`
- `src/pages/index.tsx` - update home page

## install dependences

- classnames (required for `components/`): `npm i classnames`
- ui/icons: `npm i @headlessui/react @heroicons/react`
- forms: `@tailwindcss/forms`
