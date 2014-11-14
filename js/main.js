$(document).ready(function() {
	options = {
		'token': '62bb61431348e22850828a5829c4373faafe29c1',
		'secret': '51a266c2844ccd5cac83d88de88d82d05358aa51',
		'modal': true,
		'lead': {
			'state': ['PR', 'SC', 'SP', 'RS'],
			'level': ['Iniciante', 'Intermediário', 'Avançado', 'Ninja']
		}
	}

	$('#integration_form').click(function() {
		$(this).dynaform(options);
	});

});