const bf1 = Buffer.alloc(10);
console.log(bf1);
bf1[1]=100;
console.log(bf1);

const bf2 = Buffer.from('Hello Worl','base64');
console.log(bf2);
console.log(bf2.toString());

const bf3 = Buffer.from('hello').toJSON();

console.log(bf3);

console.log(Buffer)

const bf4 = Buffer.from("Hii")
const bf5 = Buffer.from("Hii")
console.log(bf4.compare(bf5))