// function* generatorFunc(){
//     for(let i =2;i<=100;i++){
//         if(i%2===0){
//             yield i
//         }
//     }

// }

function* generatorFunc(){
    for(let i=2;i<=100;i++){
        if(i%5===0){
            yield i
        }
    }
}

for(let num of generatorFunc()){
    console.log(num);
}