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

// we should see 4 -> 7 -> 12 -> null
console.log(linkedList);
// linkedList.traverse()

//*!!!! ======= remove a node
let walker = linkedList.head;
// walker.next = walker.next.next;
// console.log(linkedList);

// assume that walker is the node with data of 4
// console.log(walker);
// therefore, walker.next would be the node with data of 7
// console.log(walker.next);
// and walker.next.next is the node with data of 12
// console.log(walker.next.next);

// walker -> next -> next -> null
// 4      -> 7    -> 12   -> null
// 4      -> 12   -> 7    -> null

// first, we should "move" out the node with data of 12
// we are just saving the node to a variable
let temp = walker.next.next; // temp is 12
// point node with data of 7 to what node with data of 12 was looking at
walker.next.next = temp.next; // 7 -> null
// point the node with data of 12 to node with data of 7
temp.next = walker.next; // 12 -> 7
// connect walker to node with data of 12
walker.next = temp;//  4 -> 12
// console.log(walker);

// === Add new methods
// AppendMethod
const newLinkedList = new LinkedList();
const headNode = newLinkedList.getHeadNode();
// console.log(headNode.data);

newLinkedList.appendNode(11);
newLinkedList.appendNode(33);
console.log(newLinkedList);