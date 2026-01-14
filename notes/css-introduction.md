# CSS Re-Introduction


## Definition 

**CSS** stands for *Cascading Style Sheets*. The current version is version 3.0, and is widely supported.

*Cascading* refers to the ability to define properties very broadly and have
them apply to all elements that come after. For example, declaring a property
for the  &lt;body&gt; tag will (usually) cause the same property to apply to
  all *descendants* or *children* of the &lt;body&gt; element.



## Example

A basic CSS rule looks like this:

```css
selector {
  property: value;
}
```

## Selectors

*Selectors* are the key to applying CSS rules; they are simply ways to access
elements of the DOM, or __[Document Object Model](https://en.wikipedia.org/wiki/Document_Object_Model)__. The DOM is a
tree-like representation of a structured HTML document as it exists in your
browser and provides a method for accessing these elements in CSS or JavaScript


You can select elements by tag name by simply typing the name of the element you are targeting:

```css
body {
  propety1: value;
  property2: value;
}
```

```css
p {
  propety1: value;
  property2: value;
}
```


You can select IDs by using a hashtag, and classes by using a period:

```css
#idname {
  propety1: value;
  property2: value;
} 
```
```css
.classname {
  propety1: value;
  property2: value;
}
```

You can combine these in infinite ways. To apply the same rule to many tags at
once (which is a good practice - grouping elements to share common attributes
in one place, with more specific rules coming later for each individual
element), you can separate them with a comma:

```css
h1,h2,h3,h4,h5,h6 {
  font-weight: bold;
  font-family: "Helvetica","Arial",sans-serif;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
}
```


To select all &lt;a&gt; tags that are descendents of &lt;li&gt; tags:

```css
li a {
}
```

Or any &lt;p&gt; tag with a class of "classname":

```css
p.classname {
}
```


Selectors can be very complicated, and there are many many options - finding
the first, or last, or *n*th item within a parent element, elements that match
or exclude specific attributes, pattern matching of attributes, etc.


## Pseudo Classes 

*Pseudo classes* are aspects of a DOM element that are _not actually present in
the DOM_. For example, an HTML document has no way of knowing if you've clicked
a link before, or are currently hovering your mouse over a particular element.
But a user's browser _does_ know these things and can style elements
differently based on these criteria. 

Pseudo classes can be differentiated from an existing element by adding the
pseudo class name after a colon (:). Say you've styled a document's link tags
to be blue by default, but you'd like to indicate to the user which links
they've already visited by styling them to be red:


```css
a: {
  color: blue;
}
a:visited {
  color: red;
}
```

Other options for pseudo classes include *:active*, *:checked*, and *:hover*,
which is frequently used to alter the appearance of elements when a user mouses
over them.



## Pseudo Elements 

These are elements that represent specific parts of other elements, such as the
first line or first letter of a block of text:

```css
p::first-line {
  font-weight: bold;
}
``` 

This would select the first line of all &lt;p&gt; tags, which is not something
that you can declare using HTML (without wrapping each first line in a
&lt;span&gt; with a class).



## Type 

Fonts are set using the **font-family:** attribute. By default you are limited
to a small number of fonts that exist on user's computers; since you don't
actually send font files along with your page, you must tell the user's browser
to pick a font to use. If they have that font, the page will use it. If not, it
will use a fallback face specified in a list, or a generic substitute:

```css
font-family {
  "Helvetica", "Arial", sans-serif;
}
```

This says to try Helvetica first (available mostly on Macs), and if that isn't
available try Arial instead. If neither is available, use the generic
sans-serif font. See the [CSS Font Stack](https://www.cssfontstack.com/) for
some information about this.

[Google Fonts](http://fonts.google.com) solves a lot of these problems by
allowing you to link to external fonts from Google's servers. This has opened
up many possibilities and made font usage much more pleasureable. 

And despite what I said earlier, you can actually send font files along with
your page. But be careful doing this, as fonts are generally copyrighted.
Distributing font files without proper licensing is illegal. 
 



## Color 

There are several ways to specify color using CSS. You can use a handful of
existing color names:

```css
p {
  color: red;
}
```
```css
body {
  background-color: blue;
}
```
However, this is kind of inflexible and limits you to about 150 or so colors.


The more traditional way to specify exact colors is to use hex codes, which
represent RGB values as pairs of numbers and letters from 0-9 and A-F:

```css
p {
  color: #FF0000;
}
```
```css
body {
  background-color: #00FF00;
}
```

These are the exact values as above, in hex values.

[HSL](https://www.w3schools.com/colors/colors_hsl.asp) is another option, where
can you specify the **Hue**, **Saturation**, and **Lightness** of colors. 

Personally, I prefer using RGB, or RGBA colors. This specifies each color as
RGB values from 0-255, with a value from 0 to 1 for the opacity (or *alpha*)
value:

```css
p {
  rgba(255,0,0,0.5);
}
```


## Units 

There are many units available when using CSS - pixels, percentages, ems, rems - 
but my preference is to use _relative_ em units, or **rems**.

This unit depends on the size of the type; one rem is equal to the height of a
standard character, or roughly 16 pixels. Sizing things this way allows your
design to expand and contract (a *fluid* layout) better than something that
uses fixed values like pixels. 


For example, if I set my font-size for the entire document (using the *
wildcard) to be 20px, one rem would be equal to that size:

```css
* {
  font-size: 20px;
}
```
  
If I set my &lt;hX&gt; tags using rem values, I know that these sizes will be
multiples of the original:

```css
h1 {
  font-size: 2rem /* 40px tall */
}

h2 {
  font-size: 1.5rem /* 30px tall */
}

h3 {
  font-size: 1.25rem /* 25px tall */
}
```


Say I decide to change my document's default font, and the new one looks
GIGANTIC at this size. All I would need to do is to change the "20px" value in
the first declaration, and all subsequent font sizes will scale accordingly. 

```css
* {
  font-size: 16px;
}
```


```css
h1 {
  font-size: 2rem /* 32px tall */
}

h2 {
  font-size: 1.5rem /* 24px tall */
}

h3 {
  font-size: 1.25rem /* 20px tall */
}
```




## Resources 

### Selectors 

There are far too many selectors to cover here; it's best to rely on online documentation. Some links:

- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS\_Selectors
- https://www.w3schools.com/cssref/css\_selectors.asp
- https://guide.freecodecamp.org/css/tutorials/css-selectors-cheat-sheet/
- https://learn-the-web.algonquindesign.ca/topics/css-selectors-units-cheat-sheet/
- https://htmlcheatsheet.com/css/


### Attributes and Values

The attributes and values that you operate on are not arbitrary; there are
specific things that can be manipulated and understanding what to do comes with
practice, trial, and error. 

Common things that can be manipulated include:

- font-family
- font-size
- color
- background-color
- padding
- margin

There are many others as well. Some of these apply to all elements, some do
not. Setting font-size on an &lt;img&gt; element, for example, would make no
sense because no type exists in that tag. 

Some of these values are *inherited* from their parent elements, and some are
not. Again, experimentation will help here.

Your browser's developer tools are very useful here, as they will show you all
the altered or default values for elements within your document. You can also
find the parent-child tree that exists in order to grab each element.
