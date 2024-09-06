// // Node class representing each node in the binary tree
// class Node {
//     constructor(data) {
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
// }

// const { log } = require("console")

// // BinaryTree class containing methods to manage the tree
// class BinaryTree {
//     constructor() {
//         this.root = null;
//     }

//     // Method to insert a node in the binary tree
//     insert(data) {
//         const newNode = new Node(data);
//         if (this.root === null) {
//             this.root = newNode;
//         } else {
//             this.insertNode(this.root, newNode);
//         }
//     }

//     // Helper method to insert a node in the correct position in the tree
//     insertNode(node, newNode) {
//         if (newNode.data < node.data) {
//             if (node.left === null) {
//                 node.left = newNode;
//             } else {
//                 this.insertNode(node.left, newNode);
//             }
//         } else {
//             if (node.right === null) {
//                 node.right = newNode;
//             } else {
//                 this.insertNode(node.right, newNode);
//             }
//         }
//     }

//     // Method for in-order traversal of the binary tree
//     inOrderTraversal(node) {
//         if (node !== null) {
//             this.inOrderTraversal(node.left);
//             console.log(node.data);
//             this.inOrderTraversal(node.right);
//         }
//     }

//     // Method for pre-order traversal of the binary tree
//     preOrderTraversal(node) {
//         if (node !== null) {
//             console.log(node.data);
//             this.preOrderTraversal(node.left);
//             this.preOrderTraversal(node.right);
//         }
//     }

//     // Method for post-order traversal of the binary tree
//     postOrderTraversal(node) {
//         if (node !== null) {
//             this.postOrderTraversal(node.left);
//             this.postOrderTraversal(node.right);
//             console.log(node.data);
//         }
//     }

//     // Method to find the minimum value in the binary tree
//     findMinNode(node) {
//         if (node.left === null) {
//             return node;
//         } else {
//             return this.findMinNode(node.left);
//         }
//     }

//     // Method to delete a node from the binary tree
//     delete(data) {
//         this.root = this.deleteNode(this.root, data);
//     }

//     // Helper method to delete a node and reorganize the tree
//     deleteNode(node, key) {
//         if (node === null) {
//             return null;
//         } else if (key < node.data) {
//             node.left = this.deleteNode(node.left, key);
//             return node;
//         } else if (key > node.data) {
//             node.right = this.deleteNode(node.right, key);
//             return node;
//         } else {
//             // Case 1: Node with no children (leaf node)
//             if (node.left === null && node.right === null) {
//                 node = null;
//                 return node;
//             }

//             // Case 2: Node with only one child
//             if (node.left === null) {
//                 node = node.right;
//                 return node;
//             } else if (node.right === null) {
//                 node = node.left;
//                 return node;
//             }

//             // Case 3: Node with two children
//             const aux = this.findMinNode(node.right);
//             node.data = aux.data;
//             node.right = this.deleteNode(node.right, aux.data);
//             return node;
//         }
//     }

//     // Method to get the root node
//     getRootNode() {
//         return this.root;
//     }
// }

// // Example usage:
// const tree = new BinaryTree();
// tree.insert(15);
// tree.insert(25);
// tree.insert(10);
// tree.insert(7);
// tree.insert(22);
// tree.insert(17);
// tree.insert(13);
// tree.insert(5);
// tree.insert(9);
// tree.insert(27);

// const root = tree.getRootNode();
// console.log("In-order Traversal:");
// tree.inOrderTraversal(root);

// console.log("Pre-order Traversal:");
// tree.preOrderTraversal(root);

// console.log("Post-order Traversal:");
// tree.postOrderTraversal(root);

// // Deleting a node
// tree.delete(5);
// console.log("In-order Traversal after deletion:");
// tree.inOrderTraversal(root);


// ["fed", "cba"]


let arr = ["abc", "def"]
let length=arr.length-1

for(let i=0;i<arr.length;i++){

  let str=""
  for(let j=arr[i].length-1;j>=0;j--){
        str+=arr[i][j]
  }

 
  arr[i]=str
}

let temp=arr[0]
arr[0]=arr[1]
arr[1]=temp

console.log(arr)



// function findWord(){
//     for(let i=arr.length-1;i>=0;i--){
//         console.log(arr[i]);
//     }
// }
// // findWord()

// for(let words in findWord()){
//     for(let j=words.length;j>0;j--){
//         console.log(words[j]); 
//     }
//     // console.log(words[j]);
// }

    


