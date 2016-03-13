var express = require('express');
var Slack = require('node-slack');

var app = express();
var slack = new Slack(process.env.HOOK_URL);

app.use(express.static('public'));

app.get('/api/slack', function(req, res) {
	try {
		var result = {
			"ok": true
		};
		var request = {
			channel: '#testing',
			username: 'Slack Relay'
		};
		if (req.query.apiKey !== process.env.API_KEY) {
			throw "Invalid API key";
		}
		if (!req.query.text) {
			throw "Requires a text parameter";
		}
		request.text = req.query.text;
		if (req.query.username) {
			request.username = req.query.username;
		}
		if (req.query.channel) {
			request.channel = req.query.channel;
		}
		slack.send(request);
		res.json(result);
	} catch (e) {
		console.log(e);
		res.json({
			"ok": false,
			"error": e
		});
	}
});

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});
