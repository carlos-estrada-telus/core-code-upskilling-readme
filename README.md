# core-code-upskilling-readme
> Carlos Rodrigo Estrada Najarro
>
> [CodeWars Profile: Completed solutions](https://www.codewars.com/users/carlos-estrada-telus/completed_solutions)
### Table of content

- [Week 1](#Week-1)
    - [Challenge 1: Ensure Question](#challenge-1-ensure-question)
    - [Challenge 2: Reversed Words](#challenge-2-reversed-words)
    - [Challenge 3: Smallest Integer In Array](#challenge-3-smallest-integer-in-array)
    - [Challenge 4: Odd Or Even](#challenge-4-odd-or-even)

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
