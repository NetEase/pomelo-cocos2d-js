var window = window || {};
var module = module || {};
module.exports = {};

var console = cc;
console.error = cc.log;

var setTimeout = function(fn, interval) {
	var instance = cc.Director.getInstance();
	var scene = instance.getRunningScene();

	instance.getScheduler().
		scheduleCallbackForTarget(scene, fn, interval, 1, 0, false);
	return scene;
}

var clearTimeout = function(target) {
	var instance = cc.Director.getInstance();
	instance.getScheduler().unscheduleAllCallbacksForTarget(target);
}

window.setTimeout = setTimeout;
window.clearTimeout = clearTimeout;

require('pomelo-cocos2d-js/lib/emitter/index.js');

window.EventEmitter = Emitter;

require('pomelo-cocos2d-js/lib/pomelo-protocol/lib/protocol.js');

require('pomelo-cocos2d-js/lib/pomelo-protobuf/lib/client/protobuf.js');

require('pomelo-cocos2d-js/lib/pomelo-jsclient-websocket/lib/pomelo-client.js');
