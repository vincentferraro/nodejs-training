"use strict"
const prompts = require('prompts')

(async ()=>{
    const response = await prompts(
       { type:'number',
        name:'value',
    message:'How old are you?'
        }
    )
    console.log(response.value)
})();

// const prompts = require('prompts');

// (async () => {
//   const response = await prompts({
//     type: 'text',
//     name: 'meaning',
//     message: 'What is the meaning of life?'
//   });

//   console.log(response.meaning);
// })();