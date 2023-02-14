export class LinkedList {

    constructor() {
        this.head = null;
        // optional
        this.tail = null;
        this.length = 0;

    }

    traverse() {
        let walker = this.head;
        while(walker.next){
            console.log(walker);
            walker = walker.next;
        }
    }

    getHeadNode() {
        return this.head;
    }
    
    clear() {
        this.head = null;
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }

    // methods creates a new Node and adds it to the end of the linked list
    appendNode(value) {
        const node = new Node(value);

        let lastNode = this.head;
        if (lastNode) {
            while(lastNode.next) {
                lastNode = lastNode.next;
            }
            lastNode.next = node;
        } else {
            this.head = node;
        }

    }


}

export class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// initialize
const node1 = new Node(4);
const node2 = new Node(7);
const node3 = new Node(12);
const linkedList = new LinkedList();
linkedList.head = node1;
linkedList.head.next = node2;
linkedList.head.next.next = node3;

console.log(linkedList);
// linkedList.traverse()

const headNode = linkedList.getHeadNode();
// console.log(headNode.data);

// AppendMethod
const newLinkedList = new LinkedList();
newLinkedList.appendNode(11);
newLinkedList.appendNode(33);
console.log(newLinkedList);

//*!!!! ======= remove a node
let walker = headNode;
// walker.next = walker.next.next;
// console.log(linkedList);

// assume that walker is the node with data of 4
// therefore, walker.next would be the node with data of 7
// and walker.next.next is the node with data of 12

// first, we should "move" out the node with data of 12
// we are just saving the node to a variable
// let temp = walker.next.next;
// point node with data of 7 to what node with data of 12 was looking at
// walker.next.next = temp.next;
// point the node with data of 12 to node with data of 7
// temp.next = walker.next;
// connect walker to node with data of 12
// walker.next = temp;