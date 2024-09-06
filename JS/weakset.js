const weakset = new WeakSet()
let obj1= {name:'john'}
let obj2= {name:'Doe'}

weakset.add(obj1)
weakset.add(obj2)


console.log(weakset.has(obj1));
weakset.delete(obj1)
console.log(weakset.has(obj1));