




// function sortStack(stack) {
//     let tempStack = [];

//     while (stack.length > 0) {
//         // Pop the top element from the original stack
//         let temp = stack.pop();
//         let peak = tempStack[tempStack.length-1]

//         // While temporary stack is not empty and top of tempStack is greater than temp
//         while (tempStack.length > 0 && peak > temp) {
//             // Pop from tempStack and push it back to the original stack
//             stack.push(tempStack.pop());
//         }

//         // Push temp into tempStack
//         tempStack.push(temp);
//     }

//     // Move sorted elements back to the original stack
//     while (tempStack.length > 0) {
//         stack.push(tempStack.pop());
//     }
// }


// function sortStack(stack){
//     let tempStack = []

//     while(stack.length >0){
//         let temp = stack.pop()
//         let peak = tempStack[tempStack.length-1]
//         while(tempStack.length> 0 && peak > temp){
//             stack.push(tempStack.pop())
//         }

//         tempStack.push(temp)
//     }
//     while(tempStack.length >0){
//         stack.push(tempStack.pop())
//     }
// }
// const stack = []


//  stack.push(25)
//  stack.push(3)
//  stack.push(7)
//  stack.push(5)
//  stack.push(8)
// console.log(stack);

// sortStack(stack)



// console.log(stack);


