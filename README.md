# YoFiHTML

> A lightweight JavaScript library for building and manipulating HTML elements with a React-like declarative style — directly in the DOM.

**YoFiHTML** is a small JavaScript library designed to make working with plain HTML and the DOM feel more structured and convenient.

It takes some of the ideas that make React and jQuery convenient, but keeps everything close to the native DOM.

No JSX.
No Virtual DOM.
No component system.
No build-heavy framework.

Just JavaScript, HTML elements, and a small wrapper around them.

It was applied in one of my projects: [Cash System Production](https://github.com/YoFi-0/cash_system_production).

---

## ✨ Features

* Create HTML elements using simple functions.
* Build nested DOM trees declaratively.
* Work directly with native DOM elements.
* Chain element operations.
* Easily add/remove classes.
* Easily add/remove styles.
* Built-in event helpers.
* Access the native DOM element at any time.
* Optional jQuery wrapper through `jQElement`.
* Supports text content and child elements.
* Supports common HTML attributes.
* Includes helper functions for selectors.
* Automatically generates HTML element helpers.

---

## 🧠 The Idea

The main idea behind YoFiHTML is simple:

Instead of writing HTML like this:

```html
<div class="container">
    <h1>Hello World</h1>
    <button>Click me</button>
</div>
```

You can build the same structure using JavaScript:

```js
_div([
    _h1("Hello World"),
    _button("Click me")
], {
    classes: "container"
});
```

The important difference is that YoFiHTML does **not** try to replace the DOM.

It works **with the DOM**.

Internally, elements are created using:

```js
document.createElement(tag)
```

and wrapped inside a `YoFiElement` instance.

---

# 📦 Installation

YoFiHTML was originally created as a personal utility library, so the project is currently focused on direct usage rather than being a polished npm package.

Clone the repository:

```bash
git clone https://github.com/YoFi-0/YoFiHTML.git
```

Then use the generated library files in your project.
```bash
<script src="/YoFiHTML/lib/index.js"></script>
<script src="/YoFiHTML/lib/YoFi_Elms.js"></script>
```
---

# 🚀 Basic Usage

YoFiHTML provides two main styles for creating elements.

## Child-based syntax

Functions beginning with `_` are designed around children:

```js
_div([
    _h1(["Hello World"]),
    _p(["This is YoFiHTML"])
]);
```

A string inside the children array can be used as the element's text content.

For example:

```js
_span([
    "Hello"
]);
```

---

## Text-content syntax

Functions beginning with `$` receive the text content as their first argument:

```js
$h1("Hello World");
```

or:

```js
$button("Click Me");
```

You can also provide children:

```js
$div(
    "Parent",
    [
        $span("Child")
    ]
);
```

---

# 🏗️ Creating Elements

The library currently provides helpers for common HTML elements, including:

```text
h1
h2
h3
h4
h5
h6
div
span
p
header
li
ul
main
section
script
img
br
a
button
i
iframe
td
tr
tbody
table
input
source
video
audio
noscript
label
```

These helpers are generated automatically from the element definitions.

The generator is located at:

```text
YoFiHTML/dev/createor.js
```

The generator creates the element definitions and helper functions automatically instead of requiring every element helper to be written manually.

---

# 🎨 Attributes

Attributes can be passed as the second/third argument depending on the helper style.

Example:

```js
$div(
    "Hello",
    undefined,
    {
        id: "app",
        classes: "container main",
        style: {
            color: "white",
            backgroundColor: "black"
        }
    }
);
```

Commonly supported attributes include:

```js
{
    id: "...",
    type: "...",
    src: "...",
    href: "...",
    classes: "...",
    style: {...},
    dataset: {...},
    baseSelector: "..."
}
```

---

# 🎨 Classes

Classes can be added directly through the attributes:

```js
$div("Hello", undefined, {
    classes: "container active"
});
```

Or dynamically:

```js
element.addClasses("active selected");
```

Remove classes with:

```js
element.removeClasses("selected");
```

Both methods return the same `YoFiElement`, allowing chaining:

```js
element
    .addClasses("active")
    .removeClasses("hidden");
```

---

# 🎨 Styles

Styles can be defined when creating an element:

```js
$div("Hello", undefined, {
    style: {
        color: "red",
        fontSize: "20px",
        backgroundColor: "black"
    }
});
```

You can also modify styles later:

```js
element.addStyles({
    color: "blue",
    padding: "20px"
});
```

Remove specific styles:

```js
element.removeStyles([
    "padding"
]);
```

Or remove all inline styles:

```js
element.removeAllStyles();
```

---

# 🖱️ Events

YoFiHTML provides simple event helpers.

For example:

```js
$button("Click me")
    .onClick(() => {
        console.log("Clicked!");
    });
```

Mouse events:

```js
element
    .onMouseDown(e => {
        console.log("Mouse down");
    })
    .onMouseUp(e => {
        console.log("Mouse up");
    })
    .onMouseMove(e => {
        console.log("Mouse move");
    });
```

Touch events are also available:

```js
element
    .onTouchStart(e => {
        console.log("Touch started");
    })
    .onTouchMove(e => {
        console.log("Touch moved");
    })
    .onTouchEnd(e => {
        console.log("Touch ended");
    });
```

---

# 🔗 Chaining

Most manipulation methods return the current `YoFiElement`.

This makes code like this possible:

```js
$button("Click")
    .addClasses("btn primary")
    .addStyles({
        padding: "10px 20px"
    })
    .onClick(() => {
        console.log("clicked");
    });
```

# 🎯 Mounting Elements

An element can be attached directly to an existing DOM element using `baseSelector`.

Example:

```js
_div([
    $h1("Hello"),
    $p("Welcome to YoFiHTML")
], {
    baseSelector: "#app"
});
```

You can also use selector helpers:

```js
baseId("app");
```

which returns:

```js
"#app"
```

And:

```js
baseClass("container");
```

which returns:

```js
".container"
```

There is also:

```js
baseElm(element);
```

for passing an existing DOM element.

---

# 🧩 Working With Native DOM

YoFiHTML does not hide the native DOM from you.

Every `YoFiElement` contains the actual DOM element:

```js
element.element
```

For example:

```js
const button = $button("Click");

button.element.disabled = true;
```

This means you can always fall back to normal browser APIs whenever you need something that YoFiHTML does not provide.

---

# 🧱 Building Larger Structures

Because elements can contain other `YoFiElement` objects, larger DOM structures can be composed naturally.

Example:

```js
const app = _main([
    _header([
        $h1("My Website")
    ]),

    _section([
        $p("Welcome to my website."),

        $button("Start")
            .onClick(() => {
                console.log("Started");
            })
    ])
], {
    classes: "app"
});
```

This produces a normal DOM tree.

Conceptually:

```text
main
├── header
│   └── h1
└── section
    ├── p
    └── button
```

---

# ⚛️ React-like, But Not React

YoFiHTML is inspired by some of the convenience of React's declarative element composition.

For example:

### React

```jsx
<div className="container">
    <h1>Hello</h1>
    <button onClick={handleClick}>
        Click
    </button>
</div>
```

### YoFiHTML

```js
_div([
    $h1("Hello"),

    $button("Click")
        .onClick(handleClick)
], {
    classes: "container"
});
```

However, YoFiHTML is **not React**.

There is:

* No Virtual DOM
* No reconciliation
* No JSX
* No hooks
* No component lifecycle
* No state management system

The library simply creates and manipulates real DOM elements.

---

# 🧪 jQuery-like, But Different

YoFiHTML also has some similarities to jQuery.

For example:

```js
element.addClasses("active");
```

and:

```js
element.addStyles({
    color: "red"
});
```

However, YoFiHTML wraps each element inside a `YoFiElement`.

Each instance also exposes:

```js
element.jQElement
```

which contains a jQuery object for the underlying DOM element.

This allows existing jQuery functionality to be used when needed.

---

# ⏱️ Sleep Utilities

YoFiHTML also includes a small `Sleep` utility.

### Milliseconds

```js
await Sleep.sleepByMelSuc(500);
```

### Seconds

```js
await Sleep.sleepBySuc(2);
```

### Minutes

```js
await Sleep.sleepByMin(1);
```

### Hours

```js
await Sleep.sleepByHours(1);
```

These utilities are useful when working with asynchronous initialization or simple timing-based browser logic.

---

# ⚙️ Initialization Callback

Elements can receive an initialization callback.

Example:

```js
$div(
    "Hello",
    undefined,
    {},
    element => {
        console.log(element);
    }
);
```

The callback receives the created `YoFiElement`.

This makes it possible to perform custom initialization immediately after the element has been created.

---

# 🛠️ Element Generator

The project contains a small generator used to create the HTML element helper file.

The source is:

```text
YoFiHTML/dev/createor.js
```

The generator defines the available HTML elements and produces:

```text
YoFiHTML/lib/YoFi_Elms.ts
```

The project also contains the generated JavaScript version:

```text
YoFiHTML/lib/YoFi_Elms.js
```

This approach makes adding another HTML element straightforward.

Add it to the element definition:

```js
class Y {
    ...
    customElement = "customElement";
}
```

Then regenerate the helpers.

---

# 🔄 Regenerating Elements

The repository contains the following npm script:

```json
{
    "scripts": {
        "re_html": "node ./YoFiHTML/dev/createor.js"
    }
}
```

Run:

```bash
npm run re_html
```

This executes the element generator and regenerates the element helper definitions.

---

# 📁 Project Structure

```text
YoFiHTML/
│
├── YoFiHTML/
│   ├── dev/
│   │   └── createor.js
│   │
│   └── lib/
│       ├── index.js
│       └── YoFi_Elms.js
│
├── scripts/
│   └── script.js
│
├── package.json
└── README.md
```

---

# 📚 Core API

## `YoFiElement`

The main wrapper around a native DOM element.

```js
YoFiElement
```

Important properties:

```js
element
attrs
cheldren
jQElement
```

> `cheldren` is intentionally kept with the spelling used by the current implementation.

---

## Selector Helpers

```js
baseId(id)
baseClass(className)
baseElm(element)
```

---

## Element Constructors

Generic construction is also available through:

```js
c(...)
```

and:

```js
cc(...)
```

These provide lower-level ways of creating `YoFiElement` instances when the generated element helpers are not enough.

---

# 💡 Example

A small complete example:

```js
const app = _div([
    $h1("YoFiHTML"),

    $p(
        "A lightweight way to work with the DOM."
    ),

    $button("Click Me")
        .addClasses("button")
        .addStyles({
            padding: "10px 20px",
            cursor: "pointer"
        })
        .onClick(() => {
            console.log("Hello from YoFiHTML!");
        })
], {
    baseSelector: "#app",
    classes: "container"
});
```

HTML:

```html
<div id="app"></div>
<script src="/YoFiHTML/lib/index.js"></script>
<script src="/YoFiHTML/lib/YoFi_Elms.js"></script>
```

After running the JavaScript, YoFiHTML creates the DOM structure directly inside `#app`.

---

# 🎯 Why YoFiHTML?

YoFiHTML was created around a simple idea:

> **Keep the simplicity of HTML, but make building DOM structures from JavaScript more enjoyable.**

If you like the declarative feeling of React but do not need React itself, and you like the simplicity of jQuery but want a more structured element-based API, YoFiHTML sits somewhere between those ideas.

It is intentionally small.

It is intentionally close to the browser.

And it is designed to stay out of the way.

