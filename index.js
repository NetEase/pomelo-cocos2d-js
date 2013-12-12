var window = window || {};

require('emitter/index.js');

window.EventEmitter = Emitter;

require('pomelo-protocol/lib/protocol.js');

window.Protocol = Protocol;

require('pomelo-protobuf/lib/client/protobuf.js');

window.protobuf = Protobuf;

require('pomelo-jsclient-websocket/lib/pomelo-client.js');