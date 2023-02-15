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
set.add(30);


console.log(set);

//* === Custom Data Structures === 

// TextNode 
class TextNode {
    constructor(data) {
        this.data = data;
        this.length = data.length;
    }
}

const node1 = new TextNode("Text Node 1");
const node2 = new TextNode("Text Node 2");
const node3 = new TextNode("Text Node 3");

// no need
class NodeList {
    length = 0;
    
    constructor(...nodes) {
        this.list = [...nodes];
    }

    append(node) {
        this.list.push(node);
        this.length = this.list.length;
    }
}

// HTML Element Node
class HTMLNode {
    textContent = null;
    outerHTML = null;

    constructor(name) {
        this.nodeName = name.toLowerCase();
        this.tagName = this.nodeName;
    }

    setTextContent(text) {
        this.textContent = text;
        this.outerHTML = this.#setOuterHTML();
    }

    #setOuterHTML(){
        return this.outerHTML = `<${this.nodeName}>${this.textContent}</${this.nodeName}>`
    }
}

const myHTMLElement = new HTMLNode("div");
myHTMLElement.setTextContent("Hello World");

console.log(myHTMLElement);

const h1 = document.querySelector("h1");
console.log(h1);