function bs(arr,target,start =0,end=arr.length-1){
  if(start>end){
    return -1;
  }

  let mid = Math.floor((start+end)/2)

  if(target=== arr[mid]){
    return mid
  }

  if(target < arr[mid]){
    return bs(arr,target,start,end = mid-1)
}
return bs(arr,target,start= mid+1,end)
}

console.log(bs([8,6,5,3,2],5));
