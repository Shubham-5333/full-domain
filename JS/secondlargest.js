let arr = [5,2,7,110,8,6,1]

for(let i =0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
        }
    }
    // console.log(arr);
}

console.log(arr);
console.log(arr[1]);
