let arr = [3,5,6,3,2,64,87]

const solved = arr.reduce((total,value,index,array)=>{
   return total +value
})
console.log(solved);

