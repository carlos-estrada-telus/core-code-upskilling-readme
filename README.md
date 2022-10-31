# core-code-upskilling-readme
> Carlos Rodrigo Estrada Najarro
>
> [CodeWars Profile: Completed solutions](https://www.codewars.com/users/carlos-estrada-telus/completed_solutions)
### Table of content

- [Week 1](#week-1)
    - [Challenge 1: Ensure Question](#challenge-1-ensure-question)
    - [Challenge 2: Reversed Words](#challenge-2-reversed-words)
    - [Challenge 3: Smallest Integer In Array](#challenge-3-smallest-integer-in-array)
    - [Challenge 4: Odd Or Even](#challenge-4-odd-or-even)
- [Week 2](#week-2)
    - [Challenge 1: Is Palindrome?](#challenge-1-is-palindrome)
    - [Challenge 2: Well Of Ideas](#challenge-2-well-of-ideas)
    - [Challenge 3: React Manage Events](#challenge-3-react-manage-events)
    - [Challenge 4: React Santa Wish List](#challenge-4-react-santa-wish-list)

---
# Week 1

## Challenge 1 Ensure Question

Code:
``` Javascript
function ensureQuestion(s) {
  return s.slice(-1) === '?' ? s : s+'?';
}
```

## Challenge 2 Reversed Words

Code:
``` Javascript
function reverseWords(str){
  return str.split(" ").reverse().join(" "); 
}
```

## Challenge 3 Smallest Integer In Array

Code:
``` Javascript
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a,b)=>a-b)[0]
  }
}
```
## Challenge 4 Odd Or Even

Code:
``` Javascript
function oddOrEven(array) {
   return !array.length||(array.reduce((prev,curr)=>prev+curr)%2===0)?'even':'odd';
}
```
# Week 2

## Challenge 1 Is Palindrome

Code:
``` Javascript
function isPalindrome(line) {
  return line.toString()===line.toString().split("").reverse().join("");
}
```
`Palindrome Taka was retired`
![Palindrome was retired](./img/palindrome-retired.png)
## Challenge 2 Well Of Ideas

Code:
``` Javascript
function well(x){
let numberGoodIdeas = x.filter(i=>i==='good').length;
  if(numberGoodIdeas<1){
    return 'Fail!';
  }else if(numberGoodIdeas<3){
    return 'Publish!';
  }
  return  'I smell a series!';
}
```
## Challenge 3 React Manage Events

Code:
``` Javascript
import React from 'react';

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0}
  }
  
  // Your event handlers 
  render() {
    return (
      <div>
        <h1 id="counter">{this.state.counter}</h1>
          <button id="decrement" onClick={()=>this.setState(prevState =>({counter:prevState.counter-1}))} type="button">
            Decrement
          </button>
          <button id="increment" onClick={()=>this.setState(prevState =>({counter:prevState.counter+1}))} type="button">
            Increment
          </button>
      </div>
    )
  }
}
```
## Challenge 4 React Santa Wish List

Code:
``` Javascript
const React = require("react");

class WishlistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name:'',wish:'',priority:1}
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeWish = this.handleChangeWish.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({priority: event.target.value});
  }
  handleChangeName(event) {
    this.setState({name: event.target.value});
  }
  handleChangeWish(event) {
    this.setState({wish: event.target.value});
  }
  
   handleSubmit(event) {
    send(this.state);
     event.preventDefault();
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <label for="name">name:</label>
        <input value={this.state.name} onChange={this.handleChangeName} type="text" id="name" />
        <label for="wish">wish</label>
        <textarea id="wish" value={this.state.wish} onChange={this.handleChangeWish} />
        <label for="priority">Priority</label>
          <select id='priority' value={this.state.priority} onChange={this.handleChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
       <input type="submit" value="Submit" />
      </form>
    );
  }
};

```