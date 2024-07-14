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
7. ⭐️Tip: to make a basic arrow funcitno react component and export it in a new .tsx file do rafce
8. The name of the exported component in page.tsx is up to us
9. Navigation: we can go from one page to another using the <Link href="/users"> tag in Next.js which is identical to <a> tag in appearance but in terms of performance it only fetches the relevant code to render the change in the page layout
10. In next js projects we have 2 environments where we can render our components and generate html markup, either on the client within a web browser or on the server using a node js runtime, this is CSR and SSR, differences:
    - in CSR we have to bundle all our components and send them to our clients for rendering, as apps grow larger our bundle size increases as it contains all our components, which increases RAM requrired by the web browser to load all these components so CSR is resource heavy, another problem is that search engine bots cannot read our content as they cannot render JS code and any sensitive data in our components like API keys will be exposed to the client.
    - if we render our components on the server we can overcome these issues, we only send the essential components to the client and prevent our bundle from becoming unnecessarily large, also since the server handles most of the rendering it is less resource heavy on the client, and since we send the actual content to the client, search engine bots can index our content and finally we can keep sensitive data on the server
    - However with server side components we lose interactivity, components rendered on the server cannot listen to browser events like clikc, change, submit, etc, they cannot access browser APIs like local storage, they cannot maintain state or use effects, these are only available in client compoonents
    - So we use a mixture of client and server side components. we default to server side comps but use client side comps when utmost necessary.
11. by default next js components are server side, next js uses advnace concepts to migrate only those parts of components which require client side rendering, for example products page is server side but the add to cart button is client side
12. we make a folder called components and co locate it inside app, as long as it is not publicly accessible due to the absence of page.tsx