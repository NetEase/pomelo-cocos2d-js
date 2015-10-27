var fs = require('fs');
var pomeloClientPath = require.resolve('../dist/pomelo-cocos2d-js.js');
var fileStr = fs.readFileSync(pomeloClientPath).toString();
fileStr = fileStr.replace(/typeof\s*require==\"function\"\&\&require/g, "function(str) {throw new Error('can not require ' + str)}");

fs.writeFileSync(pomeloClientPath, fileStr);

var pomeloClientPath = require.resolve('../dist/pomelo-cocos2d-js.min.js');
var fileStr = fs.readFileSync(pomeloClientPath).toString();
fileStr = fileStr.replace(/typeof\s*require==\"function\"\&\&require/g, "function(str) {throw new Error('can not require ' + str)}");

fs.writeFileSync(pomeloClientPath, fileStr);

console.log('replace require done...');