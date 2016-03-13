<tr id="{{ fn }}">
	<td>{{ fn }}</td>
	<td>{{ endpoint }}</td>
	<td class="ui form">
		{{# params }}
			<div class="field">
				<label>{{ name }}</label>
				<input type="text" id="{{ fn }}-{{ key }}" value="{{ default }}" />
			</div>
		{{/ params }}
	</td>
	<td class="result"></td>
	<td><button class="ui primary button" onclick="submit(this, '{{ fn }}', '{{ endpoint }}')">Submit</button></td>
</tr>
