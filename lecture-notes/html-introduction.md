---
course: "wra410"
type: "doc"
slug: "/html/introduction"
published: "true"
category: "html"
title: " HTML Re-Introduction"
---

## Definition

HTML stands for *hypertext markup language*. 

- *hypertext* refers to text that can provide clickable links to other
  documents

- a *markup language* is a text processing tool that allows you to define areas
  of a document that serve a particular purpose or function, in a manner that
  distinguishable from the original text

This markup tells the software that displays or processes it how each section
is to be handled or interpreted; the markup text is hidden from the user or
viewer.


## Where Did HTML Come From?

HTML was invented in 1989 by Sir Tim Berners-Lee, a computer scientist who was
working at physics lab in Switzerland. He developed the markup language, and
the *protocol* (called *hypertext transfer protocol*, or *HTTP*) for making
documents available via the computer network called the *internet*. This system
of interconnected web documents became known as the World Wide Web, or WWW.

The web is just one of many different systems that use the internet; other
application protocols include email (SMTP), file transfer protocol (FTP),
Bittorrent, network time protocol (NTP), etc.

What defines HTML is governed by an international standards organization named
the World Wide Web Consortium (or W3C). They are the group that defines the
tags can be used and how they need to appear within documents.

Over the years this group has redefined HTML by adding new tags and declaring
some old tags obsolete. The current version of HTML is version 5, often simply
referred to as HTML5.


## Structure

HTML is used to define the parts of a document and give it a structure. 

- HTML uses *tags* or *elements* - specific characters between `< and >`
  symbols - that enclose specific words, characters, or sections of a document.
  These tags have a specific meaning and tell the software that interprets the
  marked up document (typically a web browser) how to render the document for a
  user. All (almost all) HTML tags depend on having an opening (`<>`) and
  closing (`</>`) tag to define the beginning and end of a marked-up
  section.

- The current version of HTML - HTML5 - uses a number of *semantic* tags to
  give easily understood meaning to different parts of a document. Tags include
  `<header>`, `<nav>`, `<main>`, `<section>`, and
  `<footer>`.

- Within these are numerous other tags for specific purposes - headlines of
  various sizes (`<h1>` through `<h6>`, paragraphs (`<p>`), groups
  of items in an ordered (`<ol>`) or unordered (`<ul>`) list,
  individual list items (`<li>`), links to other parts of a document or
  separate documents (`<a>`), and so on.

- There are also generic container elements - `<div>` and `<span>` -
  when you need to group other elements or apply a specific meaning to part of
  a document and none of the existing tags make sense

## Inline and Block Elements

Most of the tags above (with the exception of `<a>` and `<span>` ) are
*block* elements, meaning they have an implied line break before and after the
tag.

Inline elements do *not* have an implied line break and will "flow" within the
body of text where the appear. Links and most of the tags that describe text -
such as `<strong>` and `<em>` (for emphasized text) are inline
elements.


## Structure vs. Presentation

The concept of semantic markup is to give meaning to areas of a document,
**_not_** to describe how the document should look. Tags are used to define a
header, a block of navigational elements, a list, the main section of content,
etc. 

Browsers have default methods for displaying these tags on screens. For
example, the `<strong>` tag will display text in **bold**, while the
`<em>` tag will display *italic* text by default. These used to be done
using `<b>` and `<i>` tags - for bold and italic - but the semantic
tags have superseded these. This the conceptual idea behind semantic markup -
to describe the meaning of something, not to make assumptions about how to
display it. 

This might seem arbitrary but this concept is important for machines to learn
how humans make meaning of documents, and are also crucial in accessibility
where readers might use screen readers to render pages and visual presentation
means nothing. 

The goal with all HTML documents is to only describe their purpose using
markup, never to include any information about the visual presentation of the
document.



## Attributes, Classes, and IDs

There are a number of modifiers for HTML tags, some of which are necessary for
them to work correctly and others that make it easier to style using CSS or
manipulate using JavaScript.

Tags like the link tag `<a>` and the `<img>` tag need attributes to
function properly - to say where the link will take the user, or to say which
image to load

```html
<a href="http://google.com">Link To Google</a>

<img src="picture_of_dog.jpg"> 
``` 

Other times you might need to distinguish between two of the same element, or
to apply a style to one page of a document but different stying to another
page. This can be accomplished using a *class* or an *id* applied to any HTML
element.

- Classes are broad categories, and there can be any number of elements - of
  different types - that share the same class. Think about WRA 410 as a *class* - 
  one descriptor that contains all of the students in this room right now.

- IDs are unique - there can only be one element with a specific ID in any
  document. Using the WRA 410 analogy above, you might be one of 20 students
  enrolled in the class, but you (and only you) have your specific MSU Id
  Number. 

Class names and IDs are arbitrary (you can call them whatever you  want) but
they should only consist of letters, numbers, and dashes. They should also not
start with numbers, only  with letters.

## Case and Whitespace

All HTML5 elements should be in lowercase, no exceptions.

Whitespace - the line breaks and indentations used to make your code readable
to humans -  doesn't matter in HTML. 

Because spaces and special characters can be problematic when dealing with web
hosting, it is important that all your files and folders only use letters,
numbers, dashes, and underscores - no other characters, ever. It's also
preferable to use only lower case. On a web server, a file named Image.jpg is
not the same as a file named image.jpg; it's much simpler to start with
everything in lowercase and be consistent.


## Required Elements

For a document to be a valid HTML 5 document, there are a few necessary items
that must be included:

- The document must begin with a __doctype__ declaration; this tells the
  browser what to expect and how to render the page. There are a number of
  valid doctypes but the HTML 5 version is very simple: __<!doctype html\>__.

- Following the doctype, all of the content of the document contained within an
  __<html\>__ tag. This element often contains an attribute named __lang__,
  where the language of the document is declared (such as *en-US*, *en-GB*,
  *fr*, etc.))

- Inside the __<html\>__ tags are the two primary sections of each HTML
  document: the __<head\>__ and the __<body\>__

    - The __<head\>__ contains the page's *metadata*, or information about the
      page itself. Nothing inside the head will be visible within the browser
      window, and no actual HTML tags should ever appear here.

    - The __<body\>__ is where the actual content of the document is placed.
      Anything inside the __<body\>__ tag will be visible within the browser
      window.

## Metadata

Metadata inside the __`<head>`__  of the document contains important information
such as links to any CSS files that control the appearance of the document, the
title that will be visible in a browser window, bookmark, or search engine
listing, the character set used by the page, and any number of extra `<meta>`
tags for specific purposes like information about the authorship or copyright
of the document or instructions for Twitter on how to display a summary of the
page. 

The only elements required within the __`<head>`__ for a document to be valid are:

- The character set used by the document; there are numerous character sets for
  different purposes but using `<meta charset="utf-8">` is adequate for most
  things.

- The title, inside of a __`<title>`__  tag.


## Validation

HTML has strict specifications about what tags can be used for what purposes in
particular locations. Because of this strict specification, html can be *valid*
or *invalid* - meaning it conforms to the specification or not.
	
In practice this isn't particularly important because browsers try their best to
render what they *think* the author was trying to do and are capable of
glossing over lots errors in an effort to produce readable pages. If you check
popular sites for valid HTML, you will be more surprised to find a site that
actually *is* valid than one that is riddled with errors. 

For this class though, I want you to submit valid HTML documents. This ensures
that you've been careful with your markup, and, more importantly, eliminates
invalid HTML as the cause for why somthing isn't displaying correctly. Unless
otherwise stated, every HTML (and, later, CSS) document that you submit for
this class *must* validate against the [W3C HTML Validator](https://validator.w3.org/).

If you submit invalid code, you will see where the errors occur with
information about what is incorrect. You may also see warnings; these are not
errors but suggestions about better uses of tags. HTML submitted with
validation errors will immediately be worth no more than half credit. These
errors are spelled explicitly spelled out for you and there is no excuse for
not trying to fix them prior to submitting your work.
