const weakmap = new WeakMap();
const obj1 = {id:1}
const obj2 = {id:2}

weakmap.set(obj2,{name:"haris"})
weakmap.set(obj1,"second value")

console.log(weakmap.has(obj1));
console.log(weakmap.has(obj2));
console.log(weakmap.get(obj2));

weakmap.delete(obj2)

console.log(weakmap.has(obj2));
