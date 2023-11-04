//## **Challenges**
//For these challenges, use either a stack or a queue (or a combination of both!)

//### **Browser Back/Forward**

//Design how you could design a browser back/forward system using two stacks, 
//so that you can visit a series of sites (Google, Yahoo, EBay, go back to Yahoo, 
//then forward again to EBay, then onto Apple, and so on).
//Write pseudo-code for this


//### **String Reversal**
//Write a function that reverses a string by handling one letter at a time. 
//You cannot use an arrays, nor can you use any string-reversal built-in method.

const Stack = require("./stack");
const Queue = require("./queue");

function stringReversal(str) {
    let stack = new Stack();
    for (let i = str.length - 1; i >= 0; i--) {
        stack.push(str[i])
    }
    for (let i = 0; i <= str.length - 1; i++) {
        console.log(stack.pop())
    }
}

stringReversal('hola')

//### **Balanced Brackets?**
//Write a function that is passed a string which can contain any text, 
//including different kinds of brackets: `{} [] ()`.
//It should examine the string and decide if the string is “balanced” — 
//a balanced string is one where the different kinds of brackets are properly balanced, 
//such that you never close an bracket that isn’t opened, is out of order, or end up with unclosed brackets.

//Examples of balanced strings:

// - `hello` *(no brackets)*
// - `(hi) [there]`
// - `(hi [there])`
// - `(((hi)))`

// Imbalanced:

// - `(hello` *(bracket left open at end)*
// - `(nope]` *(wrong type closed)*
// - `((ok) [nope)]` *(closed out of order)*



function balancedBrackets(str) {
    let stack = new Stack();
    let queue = new Queue();
    for (let i = 0; i <= str.length - 1; i++) {
        if (str[i] === '{' ||
            str[i] === '[' ||
            str[i] === '('
        ) {
            queue.enqueue(str[i]);
            console.log("IZQ", str[i]);
        }
        if (str[i] === '}' ||
            str[i] === ']' ||
            str[i] === ')') {
            stack.push(str[i]);
            console.log("DER", str[i]);
        }
    }
}

balancedBrackets('((ok) [nope)]')

//### **Josephus Survivor**
//This is a classic algorithm problem, based on a Biblical-era tale.
//Imagine a group of 10 people in a circle, numbered 1 to 10. 
//If we started at the first person (#1) and killed every three people.

class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}
//create a doublelinked list 

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        //create the node first and enter value
        let node = new Node(val)
        //check if empty
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            //store temporary value for the tail
            let temp = this.tail;
            this.tail = node;
            node.prev = temp;
            temp.next = node;
        }
        this.length += 1;
    }
    pop() {
        if (this.length === 0) {
            throw Error;
        }
        //create a variable
        let temp = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return temp;
    }
    shift() {
        if (this.length === 0) {
            throw Error;
        }
        //create a variable
        //create a variable
        let temp = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.length--;
        return temp;
    }
    get(idx) {
        if (idx < 0 || idx >= this.length) {
            throw Error;
        }
        let temp = this.head;
        if (idx < this.length / 2) {
            for (let i = 0; i < idx; i++) {
                temp = temp.next;
            }
        }
        else {
            temp = this.tail;
            for (let i = this.legth - 1; i > idx; i--) {
                temp = temp.prev;
            }
        }
        return temp;
    }
    remove(idx) {
        if (idx < 0 || idx >= this.length) {
            throw Error;
        } if (idx === 0) {
            return this.shift()
        }
        if (idx === this.length - 1) {
            return this.pop()
        }
        else {
            const temp = this.get(idx)
            temp.previos.next = temp.next;
            temp.next.previos = temp.previos;
            temp.next = null;
            temp.previos = null;
        }
        this.length--;
        return temp;
    }

}
let list = new DoubleLinkedList;

function Survivor(x, y) {
    for (let i = 1; i <= x; i++) {
        list.push(i);
    }
}
Survivor(10, 3)
console.log(list)
//Calculator 
//In this exercise, you’ll build a “polish notation calculator”.
//Polish notation is a different way to write an artithmetic expression. 
//For example, instead of writing ***1 + 2 * 3***, as we would in normal (“infix”) style, 
//we could write it with the operators to the left of their arguments. 
//This expression would become ***+ 1 * 2 3***. 
//You can read a polish notation expression backwards to see exactly what it does 
//in this case, multiply 2 times 3, and add that result to 1.
function calc(str) {
    let lst = '';
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] !== ' ') {
            lst += str[i]
        }
    }
    if (lst.length > 3) {
        let lst1 = eval(lst[1] + lst[2] + lst[0])
        let lst2 = eval(lst[3] + lst[4] + lst1)
        console.log(lst2)
    }
    else {
        let lst1 = eval(lst[1] + lst[2] + lst[0])
        console.log(lst1)
    }

}

calc("+ 1 2")
calc("* 2 + 1 2")
calc("+ 9 * 2 3")