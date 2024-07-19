## Next.js (App Router) - v 14.2.5 - Complete i18n setup.

<a href="https://nextjs14-app-router-i18n-setup.vercel.app/">Demo</a>

<img src="https://res.cloudinary.com/dqb4kigar/image/upload/v1721425597/cil-assets/nextjs-i18n-ss_vhlw0r.png" alt="Implementation preview." width="500"></img>

### Resources used:
* **Next.js** (14.2.5) (with App router)
* **i18next:** Core internationalization-framework.
* **react-i18next:** A internationalization-framework for React.js. (See notes section below).
* **next-i18n-router:** Routing library recommended by Next.js for restoring locale based routing in Next.js App router.

### Capabilities:
1. Supports translations inside **Server Components**. Pages as well as bare server components.
2. Supports translations on client side, inside **client components** that use "use client" directive.
3. Content **direction** is also supported. If you add `ar` as supported locale, direction will be changed to `rtl` automatically.
4. Provide language switch component by default.

### Quick Start
1. Clone repo to your machine using `https://github.com/azharzaman1/nextjs14-app-router-i18n-setup`.
2. Navigate to cloned directory, using `cd nextjs14-app-router-i18n-setup` and install deps using `npm install`.
3. Happy coding. Feel free to submit a **PR**.

Compiled by ❤️.

### Notes: 
1. If you are migrating from Next.js Pages router, and are used to using `next-i18n-next` library. It doesn't work anymore inside App router. We use `react-i18n-next` instead.
