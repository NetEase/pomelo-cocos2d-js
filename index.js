var Util = require('util');

function checkCocos2dJsb() {
	if (typeof cc !== 'undefined' && cc && cc.sys && cc.sys.isNative) {
		return true;
	}

	return false;
}

var Root;
(function() {
	Root = this;
}());

if (checkCocos2dJsb()) {
	var console = cc;
	Root.console = console;
	cc.formatStr = Util.format;
}

var EventEmitter = require('events').EventEmitter;
Root.EventEmitter = EventEmitter;
var protobuf = require('pomelo-protobuf');
Root.protobuf = protobuf;
var Protocol = require('pomelo-protocol');
Root.Protocol = Protocol;
var pomelo = require('pomelo-jsclient-websocket');
Root.pomelo = pomelo;