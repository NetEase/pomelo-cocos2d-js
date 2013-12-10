var window = window || {};

require('lib/emitter.js');

window.EventEmitter = Emitter;

require('lib/pomelo-protocol.js');

window.Protocol = Protocol;

require('lib/pomelo-protobuf.js');

window.protobuf = Protobuf;

require('lib/pomelo-jsclient-websocket.js');