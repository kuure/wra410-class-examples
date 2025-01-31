# CSS Transitions


CSS transitions allow you to animate CSS properties smoothly over a period of time.

Transitions are triggered by a particular user action, and are often bound to a
**:hover** pseudo-class. An initial state is defined, the transition properties
are listed explicitly, and the alternate style is applied to the :hover class.


## Syntax and Examples

Consider the example below, with two states for a `<div>` element - by default
it's 10rem wide, but when a user hovers their mouse over the element, it will
immediately become 20rem wide. 

```css
div {
  width: 10rem;
}

div:hover {
  width: 20rem;
}
```


The effect would happen suddenly and would be rather jarring. The CSS
**transition** property allows you to control how long that effect takes to
happen: 

```css
div {
  width: 10rem;
  transition-property: width;
  transition-duration: 1s;
  transition-timing-function: linear;
  transition-delay: .5s;
}

div:hover {
  width: 20rem;
}
```

This will still cause the `<div>` to grow from 10rem wide to 20rem
wide, because the **stransition-property:** is set to *width*.
However, the transition will start 0.5 seconds after you hover
(**transition-delay:**), will take 1 second to complete
(**transition-duration:**), and the transition will happen in a
*linear* fashion (**transition-timing-function:**), meaning the speed
will be consistent throughout.

These actions are reversed when you mouse out of the targeted element.

There is a shorthand for this:

```css
div {
  transition: <property> <duration> <timing-function> <delay>;
}
```
  
Using this, the example above would look like this:

```css
div {
  transition: width 1s linear 0.5s;
}
```



## Multiple Properties

Multiple transitions can be performed at the same time; just list the desired changes in order:

```css
div {
  transition: width 2s, height 2s, background-color 2s;
}

div:hover {
  width: 20rem; 
  height: 20rem;
  background-color: orange;
}
```


## Multiple Time Values

The transition-duration and transition-delay numbers can differ; experiment to see how they work together.


```css
div {
  transition: 
    width 2s ease-in 0s, 
    height 2s ease-in-out .5s,
    background-color 4s ease-out 4s,
    font-size 2s ease-in-out .5s;
}

div:hover {
  width: 20rem; 
  height: 20rem;
  background-color: orange;
  font-size: 3rem;
}
```


## Transform

The CSS **transform** property can also be manipulated using transitions. 


```css
#div {
  transition: transform 3s ease-in 1s;
}
  
#div:hover {
  transform: rotate(180deg);
}
```


## Resources 

[https://developer.mozilla.org/en-US/docs/Web/CSS/CSS\_Transitions/Using\_CSS\_transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)

[https://developer.mozilla.org/en-US/docs/Web/CSS/CSS\_animated\_properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)

[https://www.w3schools.com/Css/css3\_transitions.asp](https://www.w3schools.com/Css/css3_transitions.asp)

[https://developer.mozilla.org/en-US/docs/Web/CSS/CSS\_Transforms/Using\_CSS\_transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)
