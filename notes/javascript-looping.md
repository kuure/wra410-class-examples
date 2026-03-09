# JavaScript Looping and Matching


One of the major reasons people use computers is to convert massive amounts of raw data into processed information, giving it context and meaning which allow humans to make informed decisions based on their accumulated knowledge. 

This data is often in a structure of some sort, from a text file with very specific punctuation to JSON data from an API, allowing you to encode a number of different _types_ of things, with the same properties but different values.

Processing this data into information that provides insight generally involves looking for patterns - similarities and aberrations that provide context or explanation.


## Looping


JavaScript, like many other programming languages, allows you to _loop_, or _iterate_
over a collection of items and do _something_  with each item, like comparing
its value to something or performing an operation using that value.


To loop over a list of values, most languages have some concept of a  `for` or
`foreach` loop which begins with an initialization value, a condition for when
it should stop, and a way of incrementing the initialization value to keep
track of how many times the loop has run. Pseudocode for it would be something
like this:


```
FOR ( INITIALZATION = 0, loop until CONDITION, increment INITIALIZATION )
  RUN CODE
```

Say that you have a simple array in JavaScript, named `pokemonArray`:

```js
const pokemonArray = ["pikachu","squirtle","charmander","chespin","piplup","mamoswine","snorlax","slowpoke"]
```

A `for` loop to print each to the console would look like this:


```js
let count;

for(count = 0; count < pokemonArray.length; count++) {
  console.log(pokemonArray[count]);
}
```

This code starts by creating a variable named `count` using the `let`, because its value will change each time the loop is run.  

It then checks the value of `count`, and if it is less than the number of items in the array (accessible from the `.length` property), it runs the code inside the curly braces. 

Finally it uses the `++` shorthand to add 1 to `count` each time after the loop runs and starts the process over.

Each time, the `count` value corresponds to the index of an element in the array, meaning the first time through the loop when `count` is equal to 0, `pokemonArray[count]` will refer to the string "pikachu". The second time, `count` is equal to 1, and `pokemonArray[count]` now refers to the string "squirtle". 



### JavaScript Array Looping

The traditional `for` loop can be confusing - it takes up four lines, uses a
temporary variable and the mysterious `++`, etc. 

It is common in JavaScript to loop through arrays in order to filter certain elements into a smaller, more focused array or perform operations on those values _without altering the original array_. 

In JavaScript you can use the `.forEach()`, `.map()`, and `.filter()` array methods to perform tasks like this.



### .forEach()

The [.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
method is a basic tool which simply loops over every element in the array and
allows you to perform a task involving each element - just like a traditional
`for` loop, but with more concise syntax. Often these are short pieces of code
that fit on a single line.

You still create a temporary placeholder for each item while you operate on it, but this time you can use any arbitrary string of text instead of mapping the counter to the array index, and you don't need to use `let` in order to use it. 

Plus you get to use the `=>` to point at what you what that item to do:

```
ARRAY.forEach( ITEM => do something with ITEM)
```

In the example below, the word 'pokemon' is the arbitrary name used to refer to
each element for this particular pass through the loop. The code below does the
exact same thing as the code above


```js
pokemonArray.forEach(pokemon => console.log(pokemon))
```

If you _need_ to know the index - the order in which the element appears in the
array - you can add a second parameter that will contain this value. But if
you have more than one parameter, you must put them in parentheses separated by
a comma:

```js
pokemonArray.forEach((pokemon,index) => console.log(`${pokemon} is at index ${index}`)) 
```

Finally, if you need to have more than one thing happen inside your loop, you
must add some curly braces:

```js
pokemonArray.forEach( (pokemon, index) =>  {
  console.log(`${pokemon} is at index ${index}`)
	console.log(`milliseconds since January 1 1970: ${Date.now()}`)
})
```



### .filter()

The [.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 
method allows you to create a second array that only contains elements from the
first one that meet specific criteria. It's like having an `if` statement built
right in.

If you wanted to build a new array from our `pokemonArray` that only contains strings that have fewer than 8 characters using a traditional `for` loop, it would look like this:


```js
// counting variables are often named 'i'
let i = 0  

// make an empty array to store results
const fewerThanEight = [] 

for(i=0;i < pokemonArray.length;i++) {
  if(pokemonArray[i].length < 8)  {
    fewerThanEight.push(pokemonArray[i])
  }
}
```

To perform the same operation using `.filter()`:

```js
const fewerThanEight = pokemonArray.filter( item => item.length < 8 )
```

This method uses an arbitrary placeholder name (`item` in our example) to refer
to the current value. If the expression after the `=>` evaluates as true - meaning
the current string includes the letter 'p' followed by 'i' - then that item is added
to the `fewerThanEight` array.

It works the same as a `for` loop with but with far less code -  there's no
need to pre-declare an empty array, no need for a temporary counting integer,
and it can be condensed down to a single easy-to-read line.



### .map()

If you want create a new array containing elements from a separate array, but want the values in the new array to be modified in some manner, you can use the 
__[.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)__
method:


```js
const mapArray = pokemonArray.map(
  name => `${name.toUpperCase()}, I CHOOSE YOU!`
)
```

As you iterate over each, it performs the same task on each element -
converting them to uppercase with the `.toUpperCase()` string method and
placing them in a template string with other literal text - and places each
into the array named `mapArray`, leaving your original array intact.



## Matching

There are many different ways to match patterns, including extremely
complicated [regular
expressions](https://en.wikipedia.org/wiki/Regular_expression), but JavaScript
also includes a number of string methods that you can use to do basic text
pattern matching.

First, create a text string:

```js
let sentence = "This is a random sentence, which is just a string of characters"
```

### .includes(), .startsWith(), .endsWith()


The `.includes()` method lets you check if one string contains a separate one:

```js
console.log(sentence.includes("random")) // prints 'true'
console.log(sentence.includes("zebra")) // prints 'false'
```


Use `.startsWith()` to check the beginning:

```js
console.log(sentence.startsWith("t")) // prints 'false'
console.log(sentence.startsWith("T")) // prints 'true'
```


And `.endsWith()` to check the end:

```js
console.log(sentence.endsWith("x")) // prints 'false'
console.log(sentence.endsWith("s")) // prints 'true'
```




## Matching AND Looping

THe  `.includes()`, `.startsWith()`, and `.endsWith()` methods all return a boolean value - either `true` or `false` - based on strings they compare. This means you can use these tools with the array `.filter()` method to create new arrays that only contain elements that match specific criteria.

```js
const startsWithP = pokemonArray.filter(pokemon => pokemon.startsWith("p"))
```

```js
const noUinName = pokemonArray.filter(pokemon => !pokemon.includes("u"))
```

```js
const startSEndE = pokemonArray
  .filter( pokemon => pokemon.startsWith("s"))
  .filter( pokemon => pokemon.endsWith("e"))
```














