function select(arr){
    for(let i =0;i<arr.length;i++){
        var lowest = i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j] <arr[lowest]){
                lowest =j
            }
        }
        let temp = arr[i]
        arr[i] = arr[lowest]
        arr[lowest] = temp
    }
    return arr
}

console.log(select([6,33,55,23,7,8]));


function insertion(arr){
    for(var i=0;i<arr.length;i++){
        var currentVal = arr[i];
        for(var j=i-1;j>=0 && arr[j] > currentVal;j--){
            arr[j+1] = arr[j]
        }
        arr[j+1]= currentVal
    }
    return arr
}

console.log(insertion([44,33,22,5,7,9]));


// function merge(arr1, arr2){
//     let results = [];
//     let i = 0;
//     let j = 0;
//     while(i < arr1.length && j < arr2.length){
//         if(arr2[j] > arr1[i]){
//             results.push(arr1[i]);
//             i++;
//         } else {
//             results.push(arr2[j])
//             j++;
//         }
//     }
//     while(i < arr1.length) {
//         results.push(arr1[i])
//         i++;
//     }
//     while(j < arr2.length) {
//         results.push(arr2[j])
//         j++;
//     }
//     return results;
// }





function merge(arr1,arr2){
    let result =[]
    let i =0
    let j=0

    while(i<arr1.length && j<arr2.length){
        if(arr2[j] > arr1[i]){
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


console.log(merge([1,10,50],[2,34,42,55]));
