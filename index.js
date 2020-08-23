// Write your solution here!
const pets = ["Milo", "Otis", "Garfield"];

let append = [...pets];
append.push("Odie");

let prepend = [...pets];
prepend.unshift("Odie");

let removeLast = [...pets];
removeLast.pop();

let removeFirst = [...pets];
removeFirst.shift();



// solution says the following:
// const append = ["Milo", "Otis", "Garfield"];
// const prepend = ["Milo", "Otis", "Garfield"];
// const removeLast = ["Milo", "Otis", "Garfield"];
// const removeFirst = ["Milo", "Otis", "Garfield"];

// append.push("Odie");
// prepend.unshift("Odie");
// removeLast.pop();
// removeFirst.shift();
// why should I use const if I know I'm changing the arrays?
//also: how does pop, shift, push, and ushift remove and add to arrays that are declared with const?