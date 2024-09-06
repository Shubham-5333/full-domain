// function calc(a, b) {
// 	function add() {
// 		console.log("Sum: " + (a+b));
// 	}
// 	return add;
// }

// let s = calc(4,5);

// s();

// s();


// var a=9;
// var b = a ?? "Not declared";
// console.log(b);


// let obj = {
//     name:"jpu"
// }

// console.log(obj?.name);



// greet()
function* greet(){
    for(let i =0;i<10;i++){
        if(i%2 ==1){
            yield i;
        }
    }
    
}

for(let num of greet()){
    console.log(num);
    
}

