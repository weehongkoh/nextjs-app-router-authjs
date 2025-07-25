# NextJs 15 App Router and Auth.js (Next Auth) Boilerplate

<p align="center">
    <img 
        src="https://github.com/weehongayden/nextjs-app-router-nextauth/assets/105431607/9eba22f7-a057-45fa-b819-7036fd96b5f4" 
        alt="NextJs 15 App Router and Auth.js (Next Auth)" 
    />
</p>
<p align="center"><a href="https://nextjs-app-router-nextauth.vercel.app/">Demo Link</a></p>

This is a NextJs 15 App Router boilerplate that uses the Auth.js (Next Auth) library.

The current repository includes a database adapter, which increases the complexity of the code.

## Latest Implementation
- 26-07-2025 - Upgrade package to latest version
- 14-03-2025 - Upgrade package ESLint 9, TailwindCSS 4, etc
- 18-01-2025 - Upgrade to NextJs 15 and Auth.js (Next Auth)
- 29-08-2024 - Add Auth0 Provider
- 08-06-2024 - Add login credential on Custom Login
- 04-05-2024 - Add database adapter on Custom Login
- 06-03-2024 - Update the Landing Page and Custom Login Page
- 06-03-2024 - Upgrade NPM Package to Latest Version

## Features

- Providers
    - [x] Google
    - [x] Discord
    - [x] Auth0
- [x] Protected Page
- [x] NextJs Middleware
- [x] Database Adapter (PostgreSQL and Hasura)

## How to Use?

Clone this repository.

Copy the `.env.example` and rename it as `.env` .
Insert the value to respective field

Run the following command to generate `NEXTAUTH_SECRET`, `openssl rand -base64 32`.

```
NEXTAUTH_URL=
NEXTAUTH_SECRET=

AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=

AUTH_DISCORD_ID=
AUTH_DISCORD_SECRET=

AUTH_AUTH0_ID=
AUTH_AUTH0_SECRET=
AUTH_AUTH0_ISSUER=

AUTH_HASURA_GRAPHQL=
AUTH_HASURA_SECRET=
```

### Reference
- [Auth.js](https://authjs.dev/getting-started/installation?framework=Next.js)
- [YouTube | How To Set Up Next Auth 5 in Next.js 15 [ project code included ] ](https://www.youtube.com/watch?v=xHQQ5I7E_H8&t=322s)
