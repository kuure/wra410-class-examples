# JavaScript DOM Manipulation

The DOM (or [Document Object
Model](https://en.wikipedia.org/wiki/Document_Object_Model)) is an application
programming interface (API) for web pages. When a browser loads a page, it holds a
'map' of all of the HTML elements and any CSS associated with them in memory;
these elements can be added, deleted, or changed using JavaScript.

These changes do not alter the original HTML or CSS; it just alters the
appearance or behavior in the current browser view.

Creating HTML and CSS, and the manipulation of their properties using
JavaScript, is often referred to as "front end" development, as these entities
are what the user of a site sees and interacts with.

__Example File:__ [wra410\_dom\_intro.html](/files/wra410/wra410_dom_intro.html) 


## CSS Selector Recap

Remember that in CSS, there are several ways to select specific items within an
HTML document:

1. You can use plain old element names (like `p`, `li`, `h1`) to grab every element with those tags:
```html
<h1>Hi There I'm Red</h1>
```
```css
 h1 { background-color: red; }
```
2. You can give a unique `id` to an element and access it using the hashtag notation; there can only be one ID of a particular name in each document:
```html
<h1 id="firstheading">Hi There I'm Blue</h1>
```
```css
#firstheading { background-color: blue; }
```

3. Or you can use a `class` which can be applied to any number of elements:
```html
<h1 class="classname">I Will Be Green</h1>
<p class="classname">I Will Also Be Green</p>
<div class="classname">I Too Will Be Green</p>
```
```css
.classname { background-color: green; }
```


## Selecting DOM Elements

In JavaScript, the standard method for accessing a single DOM element is using
the `document.querySelector()` function. This is passed an HTML element,
class, or ID as a _argument_, and values can be altered using _properties_
like `.style` and `.innerHTML` or `.textContent`.

Say you have an element in your HTML - a paragraph tag with an ID of
`demo` that contains the text "This is the original text":

```html
<p id="demo">This is the original text</p>
```

If you want to put something inside of this tag, you can do it by accessing the
element in the `document` using a tool called `.querySelector()`. In JavaScript
this tool is officially called a _method_, but all you have to know is that
things with the "dot and parentheses" syntax it will perform some sort task or
operation when they are ___called___. Some methods require you to ___pass___ an
___argument___ , which gives the method something to perform its operation
_on_.

You've already seen this with `console.log()`. The `console` is the built-in
tool in your browser, and it has a _method_ named `.log()`. If you _pass_ an
_argument_ to the `.log()` method, whatever that 'thing' is will be displayed
in the console.


If you type the following into your console:

```js
document.querySelector()
```

You'll see an error that says `Uncaught TypeError: Document.querySelector: At least 1 argument required, but only 0 passed` because you didn't tell `.querySelector()` exactly what it's supposed to select.

If you want to access the `<p>` tag from above, you can use the same selector syntax that you use in css. 

Typing this into your console:

```js
document.querySelector("#demo")
```

And you should see information about the element in the console.



## Changing Element Properties

Once you've selected an element from the DOM, you can inspect or modify all sorts of ___properties___ about it. Accessing these properties involves adding another `.` followed by the name of the property, but without any parentheses. 


To see the `.innerHTML` property - the current value of the text in the `<p>` you would do this:

```js
document.querySelector("#demo").innerHTML
```


If you want to _change_ this property, you can use `=` to assign something new to a property:


```js
document.querySelector("#demo").innerHTML = "This is new text"
```

Typing this in the console will change the text that you see in your browser. It hasn't changed the structure of the original HTML document, it's just changed the properties of that element in the DOM. Reloading the page will revert to the original text.



## Accessing Multiple Elements

Using `document.querySelector()` on a HTML tag name or class name will only apply the rules to the _first_ element in the document that matches.

To access multiple elements, you can use `document.querySelectorAll()` with a class or element name (not an ID, as those are unique to one element per document). The result of this selection is a type of data called a _node list_. 


This will select all of the `<li>` elements in the document:

```js
document.querySelectorAll("li")
```

In terms of readability and performance, it's very common to assign the results of any query selections to a variable name.

```js
const liTags = document.querySelectorAll("li")
```

If you want do something to each element in a node list, you can _iterate_ over it using the `.forEach()` method. 

The code below says 

1. find the `liTags` node list variable we made earlier 
2. call the `.forEach()` method on this node list
3. inside the parentheses, for every item temporarily refer to is as 'tag'
4. for each 'tag', find the `.innerHTML` property
5. set that property to the string of text in the quote marks


```js
liTags.forEach(tag => tag.innerHTML = "JavaScript Changed This");
```





## Altering CSS Properties

Any of an item's CSS properties can be altered with JavaScript; it's similar to accessing or changing the `.innerHTML`, but requires an extra step.

You first need to specify list of `.style` properties, then narrow it down further to a specific style attribute:

```js
document.querySelector("li").style.background = "yellow";
document.querySelector("li").style.padding= "1rem";
```









