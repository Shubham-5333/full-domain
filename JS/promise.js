function even(a){
    return new Promise((resolve,reject)=>{
        if(a%2===0){
            resolve("even")
        }else{
            reject("odd")
        }
    })
}

const final = async ()=>{
    try {
        const result = await even(3)
        console.log(result);
        
    } catch (error) {
        console.log(error);
    }
}

final()