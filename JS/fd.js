// function check(arr){
//     return new Promise((resolve,reject)=>{
//         if(arr.includes(3)){
//             resolve("3 is in array")
//         }else{
//             reject("3 isnt there")
//         }
//     })
// }

// async function finalCheck(){
//     try {
//         let result = await check([2,5,6,78,3])
//         console.log(result);
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// finalCheck()



// function num1(callback){
//     console.log("first function");
//     callback()
// }
// function num2(callback){
//     console.log("second function");
//     callback()
// }
// function num3(callback){
//     console.log("third function");
//     callback()
// }

// num1((res)=>{
//     num2((res1)=>{
//         num3((res3)=>{
//             console.log(res,res1,res3);
//         })
//     })
// })


// const obj ={
//     name:'doe',
//     age:33
// }

// const {
//     name,
//     age
// }=obj

// console.log(name,age);



// function greet(greeting){
//     console.log(`${greeting},${this.name}`);
// }

// const obj = {
//     name:'Doe'
// }

// greet.apply(obj,['hello'])


// function currying(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }
// console.log(currying(6)(4)(2));
