---
id: home
title: React Docs Beta
permalink: index.html
---

<FullWidth>
<HomepageHero />

---

</FullWidth>

## A Simple Component {/*a-simple-component*/}
React components implement a `render()` method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by `render()` via `this.props`.

**JSX is optional and not required to use React**. Try the [Babel REPL](https://babeljs.io/repl/#?presets=react&code_lz=MYewdgzgLgBApgGzgWzmWBeGAeAFgRgD4AJRBEAGhgHcQAnBAEwEJsB6AwgbgChRJY_KAEMAlmDh0YWRiGABXVOgB0AczhQAokiVQAQgE8AkowAUAcjogQUcwEpeAJTjDgUACIB5ALLK6aRklTRBQ0KCohMQk6Bx4gA) to see the raw JavaScript code produced by the JSX compilation step.

<Sandpack>

```js
function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
```
</Sandpack>
<FullWidth>
---
</FullWidth>
## A Stateful Component {/*a-stateful-component*/}
In addition to taking input data (accessed via `this.props`), a component can maintain internal state data (accessed via `this.state`). When a component’s state data changes, the rendered markup will be updated by re-invoking `render()`.
<Sandpack>
```js
function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
```

</Sandpack>

<FullWidth>

---

</FullWidth>

## An Application {/*an-application*/}
Using `props` and `state`, we can put together a small Todo application. This example uses `state` to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation.

<Sandpack>

```js
function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
```
</Sandpack>
<FullWidth>
---
</FullWidth>
## A Component Using External Plugins {/*a-component-using-external-plugins*/}
React allows you to interface with other libraries and frameworks. This example uses **remarkable**, an external Markdown library, to convert the `<textarea>`’s value in real time.
<Sandpack>
```js
function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
```

</Sandpack>

<FullWidth>

---

</FullWidth>

## How much content is ready? {/*how-much-content-is-ready*/}

* [Learn React](/learn): ~95% finished.
* [API Reference](/apis): ~30% finished.
You can track our progress [on GitHub](https://github.com/reactjs/reactjs.org/issues/3308).
## How can I provide feedback? {/*how-can-i-provide-feedback*/}
Please use [this GitHub issue](https://github.com/reactjs/reactjs.org/issues/3308) or [this anonymous form](https://www.surveymonkey.co.uk/r/Y6GH986) for high-level feedback. If you spot something that doesn't make sense, please tell us! Additionally, each page has thumbs up/down buttons in the corner.
## Will this site replace the main site? {/*will-this-site-replace-the-main-site*/}
We aim to switch this site to be the main one once we reach content parity with the [existing React documentation](https://reactjs.org/). The old React website will be archived at a subdomain so you'll still be able to access it. Old content links will redirect to the archived subdomain, which will have a notice about outdated content.