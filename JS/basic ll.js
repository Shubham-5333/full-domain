class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class Singly {
    constructor() {
        this.head = null
        this.size === 0
    }

    push(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.size++
    }

    pop() {
        if (!this.head) {
            return undefined
        }
        if (this.size === 1) {
            this.head === null
            this.tail === null
        } else {
            let curr = this.head
            while (curr.next !== this.tail) {
                curr = curr.next
            }
            curr.next = null
            this.tail = curr
            // console.log("kl",curr.value);   
        }
        this.size--
    }

    shift() {
        if (!this.head) {
            return undefined
        }
        if (this.size === 1) {
            this.head = null
            this.tail = null
        } else {
            let curr = this.head
            // curr.next = null
            this.head = curr.next
        }
        this.size--
    }

    unshift(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
    }
    add(value, pos) {
        let newNode = new Node(value)
        if (this.size === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            let curr = this.head
            let prev = null
            let i = 1
            while (i < pos) {
                prev = curr
                curr = curr.next
                i++
            }
            prev.next = newNode
            newNode.next = curr
        }
        this.size++
    }

    delete(value){
        let curr = this.head
        let prev = null
        while(curr){
            if(curr.value === value){
                break
            }
            prev = curr
            curr = curr.next
        }
        prev.next = curr.next
        this.size--
    }

    rev(){
        let curr = this.head
        let prev = null
        let next = null
        while(curr){
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    print() {
        let curr = this.head
        while (curr) {
            console.log(curr.value);
            curr = curr.next

        }
    }
}

let li = new Singly()

li.push(2)
li.push(3)
li.push(4)
li.push(5)

li.print()
li.rev()
li.print()
