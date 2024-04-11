const os = require('os')

console.log(process.cpuUsage())
console.log(process.uptime())
console.log(process.memoryUsage())
const { rss } = process.memoryUsage();
const percentageUsageMemory = (rss/os.totalmem())*100;
console.log(percentageUsageMemory.toFixed(2),' %');


const percentageFreeMemory = ((os.totalmem()-os.freemem())/os.totalmem())*100;

console.log(percentageFreeMemory.toFixed(2), ' %')