var functions = [{
	fn: 'Slack',
	endpoint: '/api/slack',
	params: [{
		key: 'apiKey',
		name: 'API Key',
		default: 'changeme'
	}, {
		key: 'channel',
		name: 'Channel',
		default: '#testing'
	}, {
		key: 'username',
		name: 'Bot Username',
		default: 'Slack Relay'
	}, {
		key: 'text',
		name: 'Slack Message',
		default: 'Test message'
	}]
}];

function renderFunctions(selector) {
	$.get('/templates/function.mu', function(template) {
		Mustache.parse(template);
		$(selector).html(functions.map(function(fn) {
			return Mustache.render(template, fn);
		}).join(''));
	});
}

function submit(me, fn, endpoint) {
	$('#' + fn + ' > .result').text('');
	var json = $(me).parents('tr').find('input').toArray().reduce(function(object, input) {
		var key = $(input).attr('id').split('-')[1];
		var value = $(input).val();
		object[key] = value;
		return object;
	}, {});
	$.ajax({
		url: endpoint,
		data: json,
		success: function(data) {
			$('#' + fn + ' > .result').text(JSON.stringify(data, undefined, 4));
		}
	});
}
