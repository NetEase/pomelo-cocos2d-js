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