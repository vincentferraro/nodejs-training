

async function fetchUserData(){
    const data= {
        name: "John Doe",
        age: 30,
        email: "john@example.com"
    }
    return new Promise((resolve, reject)=>{

        if(data){
            resolve(data)
        }else{
            reject(new Error('data not found'))
        }
    })
}

async function fetching(){
    try{
        const data = await fetchUserData();
        console.log(data)
    }catch(err){
        console.error(err);
    }
}

fetching()