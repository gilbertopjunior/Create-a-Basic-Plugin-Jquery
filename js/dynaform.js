/*

Author: Gilberto Prado 
Description: Crate a form with jquery
Date: 10/11/2014


*/

/*Create plugin inside a Onload*/
(function($) {

	$.fn.dynaform = function(options) {

		//creat a new object 
		var settings = $.extend({

			token: null,
			secret: null,
			lead: {
				state: null,
				level: null
			}

		}, options);

		return this.each(function() {

			var tokens = settings.token;
			var secrets = settings.secret;
			var lead = settings.lead;

			$('body').append(
				"<div class='modal fade bs-example-modal-lg' id='modalDyna'  tabindex='-1' role='dialog'>" +
				"<div class='modal-content'>" +
				"<form id='idForm' role='form' method='post' >" +
				"<div class='form-group'>" +
				"<label for='nameInput'>Name:</label>" +
				"<input type='name' class='form-control' id='nameInput' placeholder='Digite seu nome' name='txtName'>" +
				"</div>" +

				"<div class='form-group'>" +
				"<label for='emailInput'>Email:</label>" +
				"<input type='email' class='form-control' id='emailInput' placeholder='Email' name='txtEmail'>" +
				"</div>" +

				"<div class='form-group'>" +
				"<label>State:</label>" +
				"<select class='form-control' id='stateSelect'>" +
				"</select>" +
				"</div>" +

				"<div class='form-group'>" +
				"<label>Level:</label>" +
				"<select class='form-control' id='levelSelect'>" +
				"</select>" +
				"</div>" +

				"<button id='btnSubmit' type='submit' class='btn btn-success'>SEND FORM</button>" +

				"</form>" +
				"</div>" +
				"</div>"
			);

			for (var i = 0; i < lead.state.length; i++) {
				$('#stateSelect').append('<option>' + lead.state[i] + '</option>');
			};

			for (var i = 0; i < lead.level.length; i++) {
				$('#levelSelect').append('<option>' + lead.level[i] + '</option>');
			};

			$('#btnSubmit').click(function() {

				event.preventDefault();

				if ($("#nameInput").val() == '') {
					alert('digite um nome');
					return false;
				} else if ($("#emailInput").val() == '') {
					alert('digite um e-mail');
					return false;
				} else {
					var params = {};
					params.Token = tokens;
					params.Secret = secrets;
					params.Lead = {
						names: $("#nameInput").val(),
						email: $("#emailInput").val(),
						state: $("#stateSelect option:selected").val(),
						level: $("#levelSelect option:selected").val()
					}

					$.ajax({
						type: "POST",
						url: "destination",
						data: JSON.stringify(params),
						contentType: "application/json; charset=utf-8",
						dataType: "json",
						timeout: 4000,
						success: function(data){
							alert('Mensagem enviada com sucesso');
						},
						error: function(e1, e2, e3){
							console.log('error');
							console.log(e1);
							console.log(e2);
							console.log(e3);
						},
						statusCode: {
							200: function() {
								alert('Mensagem enviada com sucesso');
								//return true;
							},
							500: function() {
								alert('Mensagem não enviada');
							}
						}						
					});					
				}
			});

		});

	};

})(jQuery);
