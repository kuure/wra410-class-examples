# Getting Started With JavaScript"

According to Wikipedia:

> JavaScript (often abbreviated as JS), is a high-level, interpreted
> programming language. It is a language which is also characterized as
> dynamic, weakly typed, prototype-based and multi-paradigm. Alongside HTML and
> CSS, JavaScript is one of the three core technologies of World Wide Web
> content engineering. 

## What does all that mean?

The description above means that JavaScript, as a programming language, is:
- ___high-level___, or very abstracted from the internal workings of the computer
- ___interpreted___ and ___dynamic___, meaning the code is executed at runtime by an
  interpreter instead of being compiled into machine language, and can add new
  code or otherwise extending itself while being interpreted
- ___weakly typed___, meaning that variables (named containers that refer to values
  that might change throughout the program) might be strings of text, decimal
  numbers, or other JavaScript code without having to be declared up front


## Do I need to remember all that?

If you are interested in or familiar with programming, it describes how
JavaScript can be compared to other languages. For this class, the last
sentence is what we're interested in.


## What do I need to know for this class?

JavaScript is a programming language that is used _everywhere_ on the web. It
has been around for over 20 years and was kind of flaky at first, but has
become much more refined and usable and higher profile in the past decade or
so, thanks to applications like GMail.

It began as a way to add interactivity to web pages, and was allegedly named to
cash in on the hype around Java, a completely different programming language
that has very different uses.

Due to its ubiquity, it has moved beyond web applications and is used in a
variety of different settings.

In terms of front-end web development, JavaScript is capable of altering the
behavior of any aspect of the Document Object Model, the "live" version of page
as it exists in the user's browser by telling the browser's JavaScript
interpreter what to do. This means it can do things like:

- React to a user's actions, like clicking on a button or link.
- Change any aspect of a document's CSS, altering the color, size, position, or visibility of any element on the page.
- Check HTML form elements to see if they meet certain criteria before they are submitted.
- Add or remove HTML elements from a document.
- Change the content of HTML documents.
- Gather remote data and incorporate it into your document.
- Determine what browser a user is using, what their screen resolution is, if they are using a Mac or PC, etc.

JavaScript, like all programming languages, uses concepts like ___variables___
to stand for values that might change, ___conditional___ statements to
determine if certain conditions are met and to perform actions based on those
conditions, and ___functions___ which are reusable blocks of code that can
perform specific actions by accepting input and returning values to the code
that called them.

Unlike some other programming languages, JavaScript is limited in several ways
for security purposes; it cannot read files from or write files to the local
computer, for example, as this would be a huge security risk 

There are many frameworks and libraries that use JavaScript; these are tools
that developers can use to perform complex tasks or build advanced applications
without having to build everything from scratch by yourself.


## Creating A JavaScript Program

For our purposes, JavaScript code will be used within HTML documents and
interpreted by a web browser. JavaScript can be used in other contexts, but
this method makes it easier to implement with a limited set of tools - all you
need are a text editor and a web browser.

To start, you must create a blank HTML page. Any text file that saved with
`.html` as the file extension will work, even without any actual HTML code in it
(though your browser might generate warnings about missing elements). 

JavaScript code can be added directly to the HTML document, inside of a
script&gt; tag:

```html
<script>
  /* javascript goes here */
</script>
```


Or you can also reference an external JavaScript file using the __src__ attribute:

```html
<script src="javascriptfile.js"></script> 
```


The `<script>` tag can go anywhere inside an HTML document, but it's best to
put them right before the closing `</body>` tag - since pages load from the top
down, this helps to load the JavaScript code after all of the HTML has been
rendered.



## The Console

Your browser's developer tools include a JavaScript _console_, which allows you
to type and execute JavaScript code. Open your developer tools as usual, but
select the `Console` tab next to the normal `Elements` or `Inspector` tab.

When you open the console, you see an arrow prompt with a flashing cursor. Type
the following text and hit return:

```js
console.log("Hello world");
```

The JavaScript console allows to easily see what's happening at any given time within a
program for debugging purposes, or to test JavaScript code. 


The `console` has a _method_, (a tool for performing a specific task) named
`.log()`.  Putting something inside the parentheses is saying "print the stuff
here to the console". In our case we are printing a _string_ of text
characters.

Things printed to the console are visible to users, but only if they go looking
for them with the developer tools. Opening the console on various websites will
  show you all sorts of messages, errors, and warnings about the code as it
  runs in your browser.



### The Document Object Model

In web development, a page as it exists in your browser at any given moment is
referred to as the _document_. The document is the current appearance of all
HTML that structures the content, the default browser styles, and custom styles
from CSS rules, and the state of any element  

JavaScript has access to everything in the document, via an API (application
programming interface) called the Document Object Model. It can add, subtract,
or modify any part of the page based on any number of conditions - when the
page loads, when a user clicks or hovers over something, or based on data like
the date or time.

To actually change the contents of the page, you need to query the document to
find a particular HTML element and then tell JavaScript to modify it in some way.

The syntax for these queries is conveniently the same syntax used in CSS selectors.

The code below, saved into an HTML document and opened in a browser, will display a document
with the text "Hello, World" inside of an `<h1>` element:


```html
<!DOCTYPE html>

<head>
  <title>First Javascript</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>

	<h1></h1>

<script>
  document.querySelector("h1").innerHTML = "Hello World";
</script>	

</body>
</html>
```

When this page is loaded: 

1. the browser will display the HTML in the browser window, but the `<h1>` tag is initially empty
2. as soon as the `<script>` block appears, the browser stops dealing with the page as HTML and summons the built-in JavaScript interpreter
3. this interpreter reads the code and performs the following actions:
    - it scans the entire document, looking for the HTML tag specified in the `.querySelector()` method, in this case an `<h1>` tag
    - if it finds an `<h1>` tag, it will immediately replace the existing content with the _string_ "Hello World"
    - if it does not find an `<h1>` tag, nothing will change in the browser window, but it will display an error in the console
4. once all the code is executed, the interpreter quits and lets the browser render the rest of the page








