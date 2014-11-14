plugin_rd
=========

Tags: Javascript, Jquery, Plugin, Form, Validation
Author: Gilberto Prado Júnior
Version 1.0 – 14/11/2014

Description:
This jQuery plugin sets up a form through a hash of options and sends your information by ajax  . This plugin is not complete.

Installation:
For this example we will use:
- Jquery
- Bootstrap ( css form and modal )
 - Download do plugin Dynaform

insert the js files in your projectExample: 
<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>        
 <script src="js/dynaform.js"></script>

choose which html tag will call the plugin
Example:
<a href="#" id="idForm" class="btn btn-primary" data-toggle="modal" data-target="#modalDyna">  Test DynaForm	 </a>
Important:  For bootstrap modal, you need to use: data-toggle="modal" data-target="#modalDyna"

Great! Now you need create a file js for call the function and set options
Example:
 
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

	$('#idForm”).click(function() {
		$(this).dynaform(options);
	});
});
