# CSS Media Queries

[Media
queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
are a method for modifying the presentation of your document based on specific
attributes of the viewer's device, including screen dimensions, aspect ratio,
or purpose (screen, print, screen reader).

The most common use is to deliver different CSS content based on the dimensions
of the screen to present a document that is optimized for mobile or
laptop/desktop devices.


## An Example

A media query in your CSS looks like this:

```css
@media [media type] (media feature expression) {
/* 
  css rules here only apply
  to the document if the expression 
  evaluates as 'true'
*/
}
```

A media query is essentially an `if/then` statement in a programming
language; _If_ the criteria on the first line evaluate as __true__, _then_ the
CSS rules inside the curly braces are applied to the document. These rules may 
cancel out existing ones, or introduce entirely new rules.



## Explanation

Options for __media type__ include:
- __all__, applicable to all devices
- __print__, for printing documents or viewing them in "print preview" mode on screens
- __screen__, for screen displays
- __speech__, for speech synthesizers

The __media feature expression__ is what the browser evaluates to determine if
the new CSS rules should be applied to the document. There are a number of
things you can check - such as orientation of the viewport, supported color
range, or if the input device allows users to "hover" over elements - but the
most common is the screen width. These criteria can be combined with [logical
operators](https://css-tricks.com/logic-in-media-queries/), like __and__,
__or__, and __not__.




## Examples



### Overriding an Existing Rule:

Imagine you have a site that will have a blue background by default with 4rem
of padding and Arial as the font, but you want viewers with wider screens to
have a red background. Your CSS would look like this:

```css
body {
  background-color: blue;
  font-family: "Arial";
  margin: 4rem;
}
@media screen and (min-width: 600px) {
  body {
    background-color: #ff0000;
  }
}
```


You don't have to specify the `font-family` and `margin` properties again, _unless you  want to
change them_. They've already been declared, so the CSS in the media query just
needs to override what you want to be different \- in this case, the
`background-color`.


### Adding New Rules:

The code inside the media query is like a whole other new stylesheet, so you can add rules to it that
won't exist in any other versions.

```css
body {
  background-color: blue;
  font-family: "Arial", sans-serif;
  margin: 4rem;
}
@media screen and (min-width: 600px) {
  h1 {
    font-family: "Times New Roman", serif;
    font-size: 2rem;
  }
}
```


### Multiple Media Queries

You can have many media queries, to cover any number of situations - like one
with a breakpoint for a small phone screen, another breakpoint for tablets, a
third for laptops, and a fourth for large displays.


You can also use other _media type_ options to customize the display for
different viewing situations; this example hides the `nav` tag when
printing:

```css
@media print {
  nav {
    display: none;
  }
}
```



## Mobile-First Design

The current general practice is to design for mobile devices first. The idea is
that since designing a clean, usable, readable site is more difficult for a
smaller screen, it's imperative to focus on this layout first. 

Optimizing a site for a mobile screen will help to keep your design to only the
essential features. Then, using the concept of *progressive enhancement*,
additional design elements can be added to the layout for users on tablets,
laptops, or desktops.

Modern layouts that use Flexbox and Grid are more responsive by design and
reduce the need for special CSS rules, which were more necessary when layouts
were built with floats or other positioning methods. However, adjusting type
size, padding, and margins for mobile layouts is still important even if layout
issues are less of a problem than in the past.


### Breakpoint Examples

There are a number of schools of thought about where to put your *breakpoints*
\- or the dimensions where different CSS rules are invoked - and how many to
offer.

A common rule of thumb is to target 320 pixels and below for phones, and
between 321 and 768 pixels for tablets, though this varies wildly and many
sites offer many more breakpoints targeting specific devices. A simple rule is
to design your site for 0 - 768 pixels and add rules to alter the style for
displays that are at least 769 pixels wide. 

To do this in a mobile-first way, CSS rules that apply to mobile devices are
placed in your main CSS document, and rules that alter the presentation for
wider screens are set in a media query that looks for a _minimum_ width of 769
pixels. This ensures screens between 0 and 768 pixels wide see the simplified
mobile view, while any screens that are at least 769 pixels wide are shown the
desktop or laptop view: 

```css
@media screen and (min-width: 769px) {
  /*
    widescreen view rules go here
  */
}
```


Another, more thorough, option is to have queries at 300, 600, 900,
and 1200 pixels, with a possible option for very large screens at 1800
or 2100 pixels. 

To be extra through, you can combine __min-width__ and __max-width__
expressions to ensure that you catch all possible width scenarios:

```css
@media screen and (min-width: 0px) and (max-width: 300px) {
  /* small phone rules */
}

@media screen and (min-width: 301px) and (max-width: 599px) {
  /* large phone or small tablet rules */
}

@media screen and (min-width: 600px) and (max-width: 899px) {
  /* tablet rules */
}

@media screen and (min-width: 900px) and (max-width: 2099px) {
  /* most laptops and many monitors */
}

@media screen and (min-width: 2100px) {
  /* really wide screen rules */
}
```


## Do You Even Need Media Queries?

It's possible, especially with modern fluid layout tools like Grid and Flexbox
and relative sizing using rems, to build sites that scale and reposition
without needing to query for screen dimensions at all, or using a minimal query
to change the base font size so anything using rems scales up or down, or to
collapse a menu for a mobile view.
