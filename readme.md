## Introduction: Frontend Assessment

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
Other tools used are React-Bootstrap, TailwindCSS and Headless UI.

## Getting Started

1. Make sure you have node and npm installed in your environment. Then install needed packages by running `npm install` in the root folder.
2. Run the development server using either of the commands below.

```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) to run the application in your chosen browser.

## Exercise 1

Displayed a responsive page based on the given designs and assets.

## Exercise 2

Responsive display of `data.json` contents as either tabs or accordion.

###### Bonus:

- Question: Why does `('b' + 'a' + + 'a' + 'a').toLowerCase()` result to `banana`?
- Answer: The space between the two `+`s is considered nullable. When this is added to another text or number (which in this case `a`), the result will be NaN (not a number). The code will now become: `ba` + `NaN` + `a` which then becomes "banana" after lowering the case.
