# CSS Fonts

There are three way to incorporate fonts into your document.

## System Fonts

The traditional method is to name a typeface and hope that the user has it
installed. Ideally, you will provide a fallback option if the first isn't
availalble, and a broad category if noting you specify is available:

```css
body {
  font-family:  "Helvetica", "Arial", sans-serif;
}
```

```css
body {
  font-family:  "Adobe Garamond", "Times New Roman", serif;
}
```

This method is limited in many ways, as there are only a handful of fonts that
are available to most web users. [CSS Font
Stack](https://www.cssfontstack.com/) is a site that will give you an overview
of which system fonts are available and help you build a "stack" of fallback
options.



## Loading Font Files

If you really, truly need to use a very specific font, you can load that type
file along with your CSS:

```css
@font-face {
  font-family: GothamLight; 
  src: url(fonts/gotham_light.ttf);
}

body {
  font-family: GothamLight, sans-serif;
}
```

This uses the `@font-face` rule to define an arbitrary font name
("GothamLight"), and list a font file to be used for that font name. In this
case, it's specifying a file named "gotham\_light.ttf" inside a "fonts"
sub-folder.

This works well for ensuring that your design looks exactly how you want it to
look. However, there are licensing concerns as you *must* have the legal right
to distribute a type file in this manner. There are many freely available web
fonts, but be sure to check the license.


## Google Fonts

Google Fonts really opened up the world of type on the web, by allowing you to
link fonts from Google's servers to your documents. There are hundreds of fonts
available and many sites that focus on interesting combinations of Google
fonts. 

There are two ways to incorporate Google fonts: using a linked stylesheet, or
using the CSS `@import` rule.

I prefer the latter, as it allows you to put all of your CSS information in
your CSS files; the former is something you need to link inside your HTML
document.

The "standard", linked stylesheet method is added to the `<head>` of your HTML file:

```html
<head>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"> 
</head>
```

Then in your CSS file, you invoke the font using the name in the URL from
Google, replacing any "+" characters with a space:

```css
body {
  font-family: "Open Sans", sans-serif;
}
```


The `@import` method allows you to add a single line to the top of your CSS file
instead of to your HTML document. This allows you to reference all your Google
Font information in the same place as your existing CSS. The `@import` line
_must_ be the first line in your CSS document:

```css
 @import url('https://fonts.googleapis.com/css?family=Open+Sans');

 body {
  font-family: "Open Sans", sans-serif;
}
```

Remember that adding fonts to your CSS document increases the load time, as
each typeface that you use will have to be downloaded from Google by the user's
browser. Google's font tool will warn you about the load time if you add a lot
of different faces or weights. 
