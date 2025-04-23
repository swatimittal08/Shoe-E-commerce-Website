# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it


### Links

- Live Site URL: https://jayden-e-commerce-page.netlify.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library



### What I learned

I learnt how to use useReducer in conjunction with useContext hook to allow the children components to update state in the reducer. useReducer creates the dispatch function and useContext allows the exposure of the function to all child components, thereby allowing them to update the state. Usememo is also used to memoize the context value to prevent re-rendering of all context consumers when the App re-renders. The explanation behind this is that without memoizing the context value, everytime the App rerenders, a new object is created on the context value prop which causes the child components to rerender as well. However, with the useMemo hook, the child will not rerender as the context value is the same. 

I also learnt about useMediaQuery from react-responsive and how it can be used to rerender the components depending on the viewport size. This allows my project to have different functions and components depending on the viewport size.


### Continued development

Learn and implementing a CSS framework as vanilla CSS can be a little clunky and tedious

### Useful resources

- [How to useContext with useReducer](https://hswolff.com/blog/how-to-usecontext-with-usereducer/) - This helped me for implement useReducer with useContext.

## Author

- Github - https://github.com/JaydenTeoh

