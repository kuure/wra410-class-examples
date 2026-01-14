# JavaScript Events


In JavaScript, _events_ are actions that occur within the web document or
browser window - such as a mouse moving, a user clicking on an HTML element, or
a page scrolling. Assigning an _event handler_ to an event using JavaScript
allows you to alter the DOM when these actions are occur.

There are [dozens of events to listen
for](https://developer.mozilla.org/en-US/docs/Web/Events), all of which can be
  used to control the behavior of a web document.



## Listening For Events

To listen for an event, you first need to determine which element in the DOM
you want to listen to.

Selecting these elements is done like any other DOM selection - using
`.querySelector()` or `.querySelectorAll()` to target elements in the
`document` by tag, class, or element name. You can also listen for events that
happen to the `window`, allowing JavaScript to do things when the browser
window is resized, for example.

Assuming that you have an html `button` element in your document somewhere:

```html
<button>Click Me</button>
```

You can do the following to select it and add an event listener for the `click` event
that will print a string of text to the console:


```js
<script>
  let listenToThis = document.querySelector("button")

  listenToThis.addEventListener('click', function() {
    console.log("Someone clicked the 'Click Me' Button")
  })
</script>
```


The first part is saying "look in the current document, find the first `<button>` element, 
and give it the nickname 'listenToThis'".

The first line of the second part is where all the magic happens. What this says is:
1. Remember that nickname we made? Take whatever that is and add an event listener for it.
2. Inside the parentheses are two _arguments_, or things that you _pass_ to a function or method - like `.addEventListener()`
  - The first is what event to listen for - in this case, the `click` event
  - The second says "lets make a temporary, _anonymous_ function that does something useful - in this case calling `console.log()` with a string of text as an argument"


The anonymous function is just what it sounds like - a JavaScript function with
no name, handed to `.addEventListener()` as an argument. It has the same basic structure of a function:

```js
function() {
  console.log("Someone clicked the 'Click Me' Button")
}
```

Only all bundled up and handled like a parameter to _another_ function:

```js
.addEventListener('click', function() { console.log("Someone clicked the 'Click Me' Button") })
```


You can write this using the JavaScript arrow function syntax as well:

```js
listenToThis.addEventListener('click' () => {
  console.log("Someone clicked the 'Click Me' Button")
})
```


## Anonymous vs Named Functions

The example above uses an  _anonymous_ function; these "functions" are part of
the event handler code and specific to only that event. They are a one-time
thing that can't be used anywhere else in your program.  

This is perfectly fine to do, but sometimes you want to call a _named_
function, which is more like a traditional one that can be used by other events
or called from other places in your program.


```js
// create a function with a name that does not use an argument
function namedFunction() {
  console.log(`You called namedFunction()`)
}

// a named function that accepts an argument
function namedArgumentFunction(arg) {
  console.log(`You called namedArgumentFunction() with the argument '${arg}'`)
}
```



```js
// call a function that doesn't need a parameter
button.addEventListener('click',namedFunction);

// call one that uses an argument
button.addEventListener('click', () =>{
  namedArgumentFunction("this is my argument") 
})

```


## What Not To Do

There is a another way to handle events - using an inline event handler:

```html
<button onclick="console.log('Button Was Clicked')";>
```

There are several problems with this method as it mixes JavaScript into your
HTML, adding to the weight of the page and making it much harder to maintain.
It's also not easily scripted - using `document.querySelectorAll` makes it easy
to add or modify click functions, while these would have to be applied
individually to each element in the HTML.



## References

Again, there are several ways to accomplish the same task and some are
outdated, which can be frustrating. The MDN page below is helpful, as the W3
Schools ones tend to use the deprecated inline techniques.

- [https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building\_blocks/Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
