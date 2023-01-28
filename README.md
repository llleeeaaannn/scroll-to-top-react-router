# Scroll to Top on Navigate for React Router

Creates automatic scroll to top behaviour when the route changes. The package also preserves previous pages' sroll postion upon navigating back with the Back button.
Works with the latest version of [React Router](https://reactrouter.com/en/main)

## Install

```npm
npm install scroll-to-top-react-router
```

## Import

```js
import ScrollToTop from 'scroll-to-top-react-router'
```

## Usage

Use inside the Router component, for example as below in App.js:

```jsx
<Router>
  <ScrollToTop />
  <Routes>
    <Route path="/" exact component={Home} />
    <Route path="/about" exact component={About} />
  </Routes>
</Router>
```
