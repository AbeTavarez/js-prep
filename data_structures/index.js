//* === Build-in Data Structures === 

// Arrays
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
const array = [];
// const array = new Array();

array.push(1);
console.log(array);
console.log(array.length);

// Objects
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
const obj = {};
// const obj = new Object();

obj.name = "John";
obj.age = 30;

console.log(obj);

// Map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
const map = new Map();
map.set("name", "John");
map.set("age", 30);


console.log(map);

// Set
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
const set = new Set();
set.add("John");
set.add(30);
set.add(30)


console.log(set);

//* === Custom Data Structures === 

// Node 
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const node1 = new Node({value: "Text Node 1"});
const node2 = new Node({value: "Text Node 2"});
const node3 = new Node({value: "Text Node 3"});


node1.next = node2;
node2.next = node3;

console.log(node1);

// NodeList
class NodeList  extends Node {
    list = [];
    length = this.list.length;

    append(node) {
        this.list.push(node);
    }

    removeLast() {
        this.list.pop();
    }

    traverse(fn) {
        this.list.forEach(node => {
            fn(node);
        });
    }
}

const myNodeList = new NodeList();
console.log(myNodeList.length)

import {LinkedList} from "./linkedlist.js";