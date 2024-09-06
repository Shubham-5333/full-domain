// const arr = [3,5,2,7,1]

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//         if(arr[j]>arr[j+1]){
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp
//         }
//     }
// }
// console.log(arr);



// function bs(arr,target){
//     let start = 0
//     let end = arr.length-1
//     let middle = Math.floor((start+end)/2)
//     while(target !== arr[middle]){
//         if(target <arr[middle]){
//             end = middle-1
//         }else{
//             start = middle+1
//         }
//         middle = Math.floor((start+end)/2)
//     }
//     return middle
// }

// console.log(bs([2,4,6,8,99,222],99));




// function bs(arr,target){
//     let start = 0
//     let end = arr.length-1
//     let mid = Math.floor((start+end)/2)
//     while(target !== arr[mid]){
//         if(arr[mid]< target){
//             start= mid+1
//         }else{
//             end = mid-1
//         }
//         mid = Math.floor((start+end)/2)
//     }
//     return mid
// }

// console.log(bs([2,3,5,8,13,26,77],13));


// function bs(arr,target,start=0,end=arr.length-1){
//     if(start >end){
//         return -1
//     }
//     let mid = Math.floor((start+end)/2)
//     if(target === arr[mid]){
//         return mid
//     }

//     if(target < arr[mid]){
//         return bs(arr,target,start,end=mid-1)
//     }
//     return bs(arr,target,start=mid+1,end)
// }


console.log(bs([2,4,6,8,13,14,66,77],6));
