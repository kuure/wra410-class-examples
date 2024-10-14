# Week 07

## 10/7/2024 - 10/9/2024


### Monday

The `navBarJavaScript.html` file contains commented code that converts a
javascript _array_ into an HTML unordered list with `<a>` tags 


#### An array:

```js
const navLinksArray = ["home","about","contact","portfolio","faq","orders","address"];
```



### Wednesday

The `navBarJavaScriptObject.html` is essentially the same, but uses 
an array of JavaScript _objects_, which are collections of _properties_ (or
_keys_) and _values_ that can encode almost any type of data.

#### An Object:

Line breaks and whitespace do not matter, there are two
styles of formatting below:


```js
const navLinksObject = [
  { 
    text: "Home",
    url: "/"
  },
  { 
    text: "About", 
    url: "/about"
  },
  { text: "Contact", url: "/contact"},
  { text: "Portfolio", url: "/portfolio"},
];
