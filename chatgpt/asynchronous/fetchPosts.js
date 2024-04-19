async function fetchPosts(userId){
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        if(!response.ok){
            throw new Error('failed to fetch data');
        }
        const data = await response.json()
        return data;
        
    }catch(err){
        throw new Error(`Error fetching data: ${err.message}`);
    }
    
}


async function run(){
    try{
        const data = await fetchPosts(2);
        console.log(data);
    }catch(err){
        console.error(err)
    }
}

run();