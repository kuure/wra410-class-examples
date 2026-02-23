# JavaScript Functions

Many programming languages, including JavaScript, use a concept called a
_function_ .

Functions are reusable blocks of code that perform specific tasks. Functions
are _called_ to perform their tasks, and can be passed _arguments_ to specify
what the function is supposed to do. Internally a function will uses these
_parameters_ in some way, and can _return_ a response to the code that summoned
them. 

They are extremely useful for isolating specific operations from the rest of
your code, allowing you to _abstract_ away the details. 

An example:

```js
function helloWorld() {
  console.log("Hello World"); 
}
```

This function is named `helloWorld()`; functions can be named anything, just
like variables, and are created with the `function` keyword. This function
performs only one task: printing the string "Hello World" to the console.

Functions are only executed if they are _called_ by your program; otherwise
they just sit there and wait and do nothing. You can call a function simply by
naming that function in your JavaScript code along with the parentheses.

```js
helloWorld();
```



## Functions With Arguments

The function above works, but is kind of pointless, as it only performs one job - 
writing the phrase 'Hello World!' to the console.  What if you want to write
something different?

Here is a different, more flexible version that accepts an _argument_. Inside
the function body - the area inside the curly braces -  this argument is
referred to as a _parameter_. The function simply logs this parameter to the
console:

```js
function consoleLogger(arg) {
  console.log(arg);
}
```

The function expects one argument: inside the parentheses, the word `arg` (an
arbitrary string of text) is the name of the parameter passed to the function,
and this is how the function can refer to that data internally.  

Again, you actually need to _call_ this function for it to execute; you call the
function name, as above, but you must include the argument:

```js
consoleLogger("Hello World");
consoleLogger("I Am Also Logged To The Console");
```



## Multiple Arguments

Functions can be passed a number of arguments, separated with a comma:

```js
function rectangleArea(a,b) {
  console.log(`The area of a ${a} x ${b} rectangle is ${a * b}`);
}

rectangleArea(20,50); 
rectangleArea(3,45); 
```

This logs to the console literal text, the two parameters passed to the
function, and the product of multiplying both parameters together.



## Functions That Return Values

All the examples above use `console.log()` to print information to the
console. Which is fine if you only ever want to print to the console.

What if you want to do something other than log to the console, like print the
value into an HTML document AND the console AND use it somewhere else?

To make functions even more flexible, you can have them _return_ a result to
whatever code summoned them. This code can then decide what to do with the
results.

```js
function rectangleAreaReturn(a,b) {
  return(`The area of a ${a} x ${b} rectangle is ${a * b}`);
}
```

Instead of immediately printing to the console, this function performs the
string manipulation and multiplication, then sends the resulting string back to
whoever summoned it. Some examples for calling this are shown below:

```js
const area = rectangleAreaReturn(4,5);
console.log(area);

console.log( rectangleAreaReturn(20,30) );

document.querySelector("#rectangle").innerHTML = rectangleAreaReturn(3,45);
```



## Arrow Functions

In modern JavaScript, it's common to encounter so-called "[arrow
functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)". 

> An arrow function expression is a compact alternative to a
> traditional function expression, but is limited and can't be used in
> all situations. 

They have some differences that can really matter, but for this class shouldn't
be much of an issue. You will often see them inside of array methods like
`.map()` or `.forEach()` because they can often be done in a single line and
can lead to cleaner, easier-to-read code.


```js
const numbers = ["one","two","three","four"]

// this prints each using a "normal" function
numbers.forEach(function(number){
  console.log(number)
})


// this prints each using an arrow function
numbers.forEach(number => console.log(number))

```

If you collapse the traditional function into a single line, you can see how they
differ:


```js
numbers.forEach(function(number){ console.log(number) })
numbers.forEach(number => console.log(number))
```

In both cases the variable `number` is an arbitrary name which can only be used inside the function body. 
