// function bubble(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//             if(arr[j] > arr[j+1]){
//                 let temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return arr
// }


// function selection(arr){
//     for(let i=0;i<arr.length;i++){
//         var lowest = i
//         for(let j =i+1;j<arr.length;j++){
//             if(arr[j] <arr[lowest]){
//                 lowest = j
//             }
//             let temp = arr[i]
//             arr[i] = arr[lowest]
//             arr[lowest] = temp
//         }
//     }
//     return arr
// } 

// function insertion(arr){
//     for(let i=0;i<arr.length;i++){
//         var currVal= arr[i]
//         for(var j=i-1;j>=0 && arr[j] > currVal;j--){
//             arr[j+1] = arr[j]
//         }
//         arr[j+1] = currVal
//     }
//     return arr
// }


function merge(arr1,arr2){
    let result = []
    let i =0
    let j = 0
    while(i<arr1.length && j<arr2.length){
        if(arr2[j]>arr1[i]){
            result.push(arr1[i])
            i++
        }else{
            result.push(arr2[j])
            j++
        }
    }
    while(i<arr1.length){
        result.push(arr1[i])
        i++
    }
    while(j<arr2.length){
        result.push(arr2[j])
        j++
    }
    return result
}

console.log(merge([0,2,4,8,14],[6,12,88,94]));



