## Introduction: Frontend Assessment

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
The application is created using Typescript and uses React-Bootstrap and TailwindCSS tools for designing the UI side.

## Running the application

1. Make sure you have node and npm installed in your environment. Then install the needed packages by running `npm install` in the root folder.
2. Run the development server using either of the commands below.

```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your chosen browser.

## Exercise 1

Exercise 1 should display a responsive page based on the given designs and assets.

## Exercise 2

Exercise 2 also uses the concept of responsive displays. The contents of `data.json` should be shown in either tabs or accordion, depending on the screen size used.

###### Bonus:

- Question: Why does `('b' + 'a' + + 'a' + 'a').toLowerCase()` result to `banana`?
- Answer: The space between the two `+`s is considered nullable. When this is added to another text or number (which in this case `a`), the result will be NaN (not a number). The code will now become: `ba` + `NaN` + `a` which then becomes "banana" after lowering the case.
