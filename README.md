# vue-bug-simple-suggest

This project is an example to reproduce a bug where library [vue-simple-suggest](https://github.com/KazanExpress/vue-simple-suggest) throws a `TypeError: this.inputElement is null` error.
It happens when using the library vue-simple-suggest on custom inputs and using Webpack's lazy loading globally (in "eager" mode) with prefetch disabled.

## Project setup

```
npm install
```

### Steps to reproduce the bug (using hot-reload for development)

- `npm run serve`
- start web browser at `http://localhost:8080`
- click on the "About" link
- in the web console you'll see the error message: `TypeError: this.inputElement is null`

### Resources

https://webpack.js.org/api/module-methods/#magic-comments

https://webpack.js.org/api/module-methods/#requirecontext

https://cli.vuejs.org/guide/html-and-static-assets.html#prefetch

https://kazanexpress.github.io/vue-simple-suggest/#custom-input
