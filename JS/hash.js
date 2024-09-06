// class HashTable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }
// }


function hash(key,arrlength){
    let total = 0

    for(let char of key){
        let value = char.charCodeAt(0) - 96
        total = (total+ value) % arrlength;
    }
    return total;
}
console.log(hash("pink",10 ));
