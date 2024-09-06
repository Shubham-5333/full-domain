// Write a function that finds all pairs in an array whose sum equals a target value.

// let arr = []
let arr1 = []
function sum(arr,target){
    for(let i =0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(i!=j && arr[i]+arr[j]===target){
                console.log(arr[i],arr[j]); 
            }
            
        }
        // if(i!=i+1 && arr[i]+arr[i+1]==target){
        //     arr1.push(arr[i],arr[i+1])
        // }
    }
    // console.log(arr1);
}

sum([1,2,3,4,5],5);
