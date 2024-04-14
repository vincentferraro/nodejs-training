const { execSync } = require('child_process');

console.log(process.platform);
const cmd = process.platform === 'Win32'? 'dir' : 'ls';
const output =execSync(cmd);


console.log(output.toString());

