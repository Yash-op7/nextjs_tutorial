This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


# nextjs_tutorial

## Points learned:

1. npx create-next-app
2. ESLint - a common code analysis tool that we can use to find syntax errors, formatting issues and so on
3. In next js we dont have to set up a router, instead the router is configured as the file system, the app folder contains the router system of our application
4. the layout.tsx in app/ represents the common layout for our page, inside it the body element we have children which is dynamically replaced by where the user is in our application.
5. app/ also has a home page which represents the home page
6. to make a new route like localhost:3000/users, we make a new folder in app/ called users and to make this folder known to next.js routing and make it publicly accessible we make a `page.tsx` file here