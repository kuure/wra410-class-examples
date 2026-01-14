# Flexbox

Flexbox (officially known as the [CSS Flexible Box Layout
Module](https://www.w3.org/TR/css-flexbox-1/)) is a specification for
controlling the layout of items. It is [widely supported by modern
browsers](https://caniuse.com/#feat=flexbox).

Flexbox can be used to lay out entire sites, but it is often used to style
smaller components within a design \- such as navigation bar, or laying out
several identical sized items within a container. 

Flexbox works best for aligning items in a single direction \- either
horizontally in a row, or vertically in a column. It does not have any sort of
two-dimensional properties, though you can nest flex containers inside of other
flex containers to develop more advanced layouts.  


## Flex Containers

Flexbox works by declaring an HTML element to be a _flex container_; any direct
child elements within that container are now _flex items_ and can be controlled
using flexbox rules.

This rule tells any `<div>` element to act like a flex container:


```css
div {
  display: flex;
}
```

Flexbox items are block-level (meaning they have a line break before and after)
by default; you can make an inline flex container by using __display:
inline-flex__; 

Flex containers \- the _parent_ \- will order their _children_ in a horizontal
row by default. You change this, or reverse it, using the __flex-direction__
directive:

```css
div {
  display: flex;
  flex-direction: row; // the default
}
```

Using __column__ instead of __row__ switches from a horizontal to a vertical
layout, while __reverse-row__ and __reverse-column__ switch the order of the
child elements within the container.



### Horizontal Controls

By default, all items will appear in a single row, unless the __flex-wrap__
attribute is changed (to wrap, or wrap-reverse).

Flex items within a flex container appear aligned to the left by default. This
behavior can be overridden using the __justify-content__ attribute. 

```css
div {
  display: flex;
  justify-content: flex-start; // the default
}
```

Additional Flexbox justify-content values include:

- __flex-end__, for the end (or right) of the container
- __center__
- __space-between__ (aligns first and last items to the left and right, and
	evenly distributes the remaining space between the other items)
- __space-around__ (puts one unit of space at the left and right edges, and two
	units beween each item)
- __space-evenly__ (puts one unit of space at the edges and between each item)


### Vertical Controls

The __align-items__ attribute controls the vertical layout of items. 

```css
div {
  align-items: flex-start; // the default
}
```

Other rules for vertical alignment include:

- __flex-end__, to push each item to the bottom of the verical space
- __center__, to center each along the middle of the container
- __stretch__, to force each item to be as tall as the container
- __baseline__, to align items based on the text baseline



### Flex Items

By default, flex items appear in the order that they appear in the HTML source.
But they can be reordered in any manner using the order attribute. In this
example, the `<p>` tag would appear *before* the `<h1>` element, regardless of
their order in the HTML:

```css
div {
  display: flex;
}

div p {
  order: 1;
}

div h1 {
  order: 2;
}
```


The flex-grow property allows flex elements to expand if needed. They use a
unitless relative value to indicate their proportion relative to other
elements: 


```css
div {
  display: flex;
}

div h1 {
  flex-grow: 1;
}

div p {
  flex-grow:   2;
}
```

If necessary, the items will grow in size but the paragraph will attempt to
stay twice as wide as the `<h1>`.

There are also directives for flex-shrink, and flex-basis \- which controls the
default size of an element before any additional space between items is
calculated. Flex-grow, \-shrink, and \-basis can all be combined using a
shorthand, which is the recommended method:

```css
div p {
  flex: 0 1 auto; // the default
}
```

Experimenting  with these values is important to understanding how they behave.



## Vertical Positioning

Individual items vertical alignment can overridden using the align-self attribute:

```css
div {
  display: flex;
  align-items: flex-start; // this is the default
}

div p {
  align-self: flex-end; 
}
```

This rule places the `<p>` element at the bottom of the flex container,
while all the other items would be aligned to the top.


## Resources

The best way to learn about flexbox is to read and practice using things like Codepen.

Some links to explore:

- [css-tricks.com/snippets/css/a-guide-to-flexbox/](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [w3schools.com/css/css3\_flexbox.asp](https://www.w3schools.com/css/css3_flexbox.asp)
- [developer.mozilla.org/en-US/docs/Web/CSS/CSS\_Flexible\_Box\_Layout/Basic\_Concepts\_of\_Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [developer.mozilla.org/en-US/docs/Learn/CSS/CSS\_layout/Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
- [Flexbox Froggy](https://flexboxfroggy.com/) \- a game to teach Flexbox positioning.
- [Flex Box Adventure](https://codingfantasy.com/games/flexboxadventure) \- another game using Flexbox


