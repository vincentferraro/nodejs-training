

function multiplyByTwo(array,cb){
    const arrayMultipliedByTwo = array.map(element => element*2);
    cb(null,arrayMultipliedByTwo)
}

function callback(error,data){
    console.log(data)
    return
}

const arr = [1,2,3,4,5];

multiplyByTwo(arr, callback);