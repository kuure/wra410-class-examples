# The CSS Box Model

In CSS, some elements (like `<div>`, `<p>`, `<header>` and others) are [block
level](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements),
meaning they are rendered with a line break above and below by default. Others
(like `<span>`, `<a>`, `<strong>`, etc.) are
[inline](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements)
elements, where they fit into the flow of whatever surrounds them.

But every element has an implied box surrounding it. These boxes have four
different CSS properties that can be altered to determine how the element looks
on the screen and is placed relative to other elements:

1. Margin 
2. Border 
3. Padding
4. Width 


The margin, border, and padding can be given different dimensions to add space,
either around outside of the containing element or to give some breathing room
between the content and its container; the border can also be given a color and
style value to affect its appearance.


You can use your browser's developer tools to see a visual representation of
how these are applied to different elements and the current values for them. 


## Margin

The `margin` is the space __around the outside__ of the container \- it can be used
to adjust how much space appears around various elements and to provide a break
between paragraphs, after headline tags, etc.


## Padding

The `padding` is the space __between the content and its border__. Adding padding to
paragraphs \- especially inside of an element with background color or a border
\- greatly increases readability.


## Setting Margin and Padding

The values for margin and padding can be set all at once to the same value. The
units can be anything - ems, rems, pixels, or percentages: 

```css
p {
  margin: 1rem;
  padding: 10px;
}
```

You can set the values for the top, left, right, and bottom of the element:

```css
p {
  padding-top: 1rem;
  padding-right: 3rem;
  padding-bottom: 20rem;
  padding-left: 2rem;
}
```


There is shorthand for this, starting with top, then the right, bottom, and
left side in order (think about a clock, starting at noon, then 3, 6, and 9
o'clock):


```css
p {
  padding: 1rem 3rem 20rem 2rem;
}
```


If you give two values, the first will apply to the top and bottom, the second
to the left and right:

```css
p {
  margin: 2rem 5rem;
}
```


## Border

By default, borders have a size value of zero, so are not visible. Borders are
a bit more complex than padding and margin, as you have to specify a thickness,
color, and style:

```css
p {
  border-style: solid;
  border-color: red;
  border-width: 2px;
}
```


There is of course a shorthand that combines all of these:
```css
p {
  border: 2px solid red;
}
```


This can be specified on a per-side basis:

```css
p {
  border-top: 1px solid red;
  border-left: 2rem dotted #ffff00;
  border-bottom: 10px double rgba(222,33,44,0.8);
}
```

There are several [border style
options](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style), as
well as the option to round the corners of the border. 


## Content

The actual content, and the sizing of it, can be a bit trickier. Content tends
to "flow" depending on how much there is, the type size, the properties of the
parent element, etc.

Common things to adjust the size of the content include an absolute value:

```css
p {
  width: 300px;
}
```


Or a percentage, based on the dimensions of the parent or containing element:
```css
p {
  width: 50%;
  /*  
    this will be half the width of the element in which the p tag is contained

    so if this <p> is inside a <div> with a width of 600px, then this element
    would be 300px wide
  */
}
```


Or combinations of a number of values to allow for different scenarios:
```css
p {
  width: 20%;
  max-width: 300px;
  min-width: 20px;
}
```
This says to make the element 20% of the width of its parent element, but never
to be wider than 300px or narrower than 20px. Rules like this need to be
tested, of course, at different screen sizes to see how they behave in real
life. 




## Resetting Margins and Padding

All elements have default padding and margin values used by web browsers to
ensure that they are readable when unstyled. These can often conflict with your
needs or combine in odd ways, so it is often advantageous to reset these to
zero and add them back as needed. 

Browsers also calculate the display width of the element confusingly when
taking the margin, padding, and border size into account. Consider the
following example:

```css
div {
  width: 800px;
  border: 5px solid black;
  padding: 10px;
}
```

You would assume that this element would be 800px wide, but by default browsers
will size it at 830px \- 800px for the content, 10px on each side for the
padding, and another 5px on each side for the border.

If you set the CSS property `box-sizing` to the value of `border-box`, the
browser will size the element at 800px wide, narrowing the area of the content
to 770px to allow for the width of the padding and border.

I tend to use the rule below at the beginning of my CSS files to reset the
margin and padding of _all_ elements. The `*` is the 'wildcard' selector, that
matches every single CSS element. This says 'give every element a margin and
padding of zero, and use `border-box` for the `box-sizing` property. 

It is a brute-force way to make sure that everything will be exactly the size
that you give it, regardless of default browser styles, and `margin`,
`padding`, or `border-size` values;

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

There are more elaborate reset tools available, but this one is simple and
effective enough for my needs.
