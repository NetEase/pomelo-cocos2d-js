#pomelo-cocos2d-js

`pomelo-cocos2d-js` is a library for using in [pomelo](http://pomelo.netease.com/) with [cocos2dx-js](http://cocos2d-x.org/products#cocos2dx-js)  

#Usage
using browserify to resolve library dependencies  

add this library to your project  

```
npm install pomelo-cocos2d-js --save
```

add to your browserify main.js   

```
require('pomelo-cocos2d-js');
```

in cocos2d-js you can also add [dist/pomelo-cocos2d-js.js](https://github.com/NetEase/pomelo-cocos2d-js/tree/master/dist/pomelo-cocos2d-js.js) file into ***jsList***  

then you can use `pomelo` object under the gloal `window` object the same as using in the browser  

simple chat test  
```
var pomelo = window.pomelo;

var route = 'gate.gateHandler.queryEntry';
var uid = "uid";
var rid = "rid";
var username = "username";

pomelo.init({
	host: "127.0.0.1",
	port: 3014,
	log: true
}, function() {
	pomelo.request(route, {
		uid: uid
	}, function(data) {
		pomelo.disconnect();
		pomelo.init({
			host: data.host,
			port: data.port,
			log: true
		}, function() {
			var route = "connector.entryHandler.enter";
			pomelo.request(route, {
				username: username,
				rid: rid
			}, function(data) {
				cc.log(JSON.stringify(data));
				chatSend();
			});
		});
	});
});

function chatSend() {
	var route = "chat.chatHandler.send";
	var target = "*";
	var msg = "msg"
	pomelo.request(route, {
		rid: rid,
		content: msg,
		from: username,
		target: target
	}, function(data) {
		cc.log(JSON.stringify(data));
	});
}
```

## License

(The MIT License)

Copyright (c) 2012-2015 NetEase, Inc. and other contributors

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
