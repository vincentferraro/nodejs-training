'use strict'

const { Readable, Writable,Transform, pipeline }=require('stream')
process.stdin.setEncoding('utf8');
process.stdout.setEncoding('utf8');


let answers=[];

const createTransform= ()=>{
    return new Transform({
        transform(chunk, enc, next){
            const uppercase = chunk.toString().toUpperCase();
            
            next(null,uppercase)
        }
    })
}
const questions = [
    'How are you?',
    'What is your name?',
    "How old are you?"
]



function ask(i){
    process.stdout.write(questions[i] + ' >');
}



process.stdin.on('data',()=>{
    
    if(answers.length < questions.length){
        ask(answers.length)
    }
    else{
        process.exit()
    }
}
)

ask(0);
