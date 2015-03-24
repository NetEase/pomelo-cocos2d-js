function checkCocos2dJsb() {
	if (typeof cc !== 'undefined' && cc && cc.sys && cc.sys.isNative) {
		return true;
	}

	return false;
}

if (checkCocos2dJsb()) {
	var window = window || {};
	// var module = module || {};
	// module.exports = {};
	var console = cc;
	console.error = cc.log;
}

var Root;
(function() {
	Root = this;
}());

var EventEmitter = require('events').EventEmitter;
Root.EventEmitter = EventEmitter;
var protobuf = require('pomelo-protobuf');
Root.protobuf = protobuf;
var Protocol = require('pomelo-protocol');
Root.Protocol = Protocol;
var pomelo = require('pomelo-jsclient-websocket');
Root.pomelo = pomelo;