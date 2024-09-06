class Node{
    constructor(value){
        this.value= value;
        this.next = null
    }
}

class LinkList{
    constructor(){
        this.head = null;
        this.tail = null
        this.size=0
    }
    push(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail= newNode
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.size++
    }
    rev(){
        let prev = null
        let next = null
        let curr = this.head
        while(curr){
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.tail = this.head
        this.head = prev
    }
    print(){
        let curr = this.head
        while(curr){
            console.log(curr.value)
            curr = curr.next
        }
    }
}

const li = new LinkList()

li.push(3)
li.push(4)
li.push(5)
li.push(6)
li.print()
li.rev()
li.print()


