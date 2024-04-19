

function filterArray(array, cb){
    const filteredArray=[]
    for(const element of array){
            const boolean = cb(null, element)
            if(boolean){ 
                filteredArray.push(element)
            }
    }
    return filteredArray;
}

function callback(error,data){
    if(data <10){
        return true;
    }else{
        return false;
    }
}

const array = [1,11,2,22,3,33,4,44,5,55];

const arrayFiltered = filterArray(array,callback);
console.log(arrayFiltered);