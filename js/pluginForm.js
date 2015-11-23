/**
 * 
 */
(function( $ ) {
	
	$.fn.dynaform = function(options){	
		
		var form = document.createElement('form');
		form.setAttribute('action', 'sucess.html'); 
		form.setAttribute('method', 'POST');
		form.setAttribute('role', 'form');
		form.setAttribute('id', 'scriptForm');
		
		//token
		var formGroup = document.createElement('div');
		formGroup.setAttribute('class', 'form-group');
		
		var token = document.createElement("label");
		token.setAttribute('for', 'token');		
		//var tkn = document.createTextNode("Token:");
		//token.appendChild(tkn);
		
		var input1 = document.createElement('input');
		input1.setAttribute('type', 'hidden');		
		input1.setAttribute('name', 'token');
		input1.setAttribute('value', options.token);
		input1.setAttribute('id', 'token');
		input1.setAttribute('class', 'form-control');
		input1.setAttribute('disabled', '');
		
		//secret
		var formGroup2 = document.createElement('div');
		formGroup2.setAttribute('class', 'form-group');
		
		var secret = document.createElement("label");
		secret.setAttribute('for', 'secret');
		//var scr = document.createTextNode("Secret:");
		//secret.appendChild(scr);
		
		var input2 = document.createElement('input');
		input2.setAttribute('type', 'hidden');		
		input2.setAttribute('name', 'secret');
		input2.setAttribute('value', options.secret);
		input2.setAttribute('id', 'secret');
		input2.setAttribute('class', 'form-control');
		input2.setAttribute('disabled', '');
		
		//name
		var formGroup3 = document.createElement('div');
		formGroup3.setAttribute('class', 'form-group');
		
		var name = document.createElement("label");
		name.setAttribute('for', 'name');
		name.setAttribute('class', 'control-label');
		var node = document.createTextNode("Name:");
		name.appendChild(node);
		
		var inputName = document.createElement('input');
		inputName.setAttribute('type', 'text');		
		inputName.setAttribute('name', 'name');		
		inputName.setAttribute('id', 'name');
		inputName.setAttribute('class', 'form-control');
		
		//email
		var formGroup4 = document.createElement('div');
		formGroup4.setAttribute('class', 'form-group');
		
		var email = document.createElement("label");
		email.setAttribute('for', 'email');
		var eml = document.createTextNode("Email:");
		email.appendChild(eml);
		
		var inputEmail = document.createElement('input');
		inputEmail.setAttribute('type', 'email');		
		inputEmail.setAttribute('name', 'email');		
		inputEmail.setAttribute('id', 'email');
		inputEmail.setAttribute('class', 'form-control');
		
		//estado
		var formGroup5 = document.createElement('div');
		formGroup5.setAttribute('class', 'form-group');
		
		var estado = document.createElement("label");
		estado.setAttribute('for', 'sel');
		var est = document.createTextNode("Estado:");
		estado.appendChild(est);
		
		var estados = options.fields.estado;
		var selEst = $('<select class="form-control" id="sel">');
		for (var i in estados) {
		    selEst.append($('<option/>').text(estados[i]));
		    
		}
		
		//nivel
		var formGroup6 = document.createElement('div');
		formGroup6.setAttribute('class', 'form-group');
		
		var nivel = document.createElement("label");
		nivel.setAttribute('for', 'sel1');
		var nvl = document.createTextNode("Nível:");
		nivel.appendChild(nvl);
		
		var niveis = options.fields.nivel;
		var selNiv = $('<select class="form-control" id="sel1">');
		for (var i in niveis) {
		    selNiv.append($('<option/>').text(niveis[i]));
		}		
		
		//submit
		var submit = document.createElement('button');
		submit.setAttribute('type', 'submit');
		submit.setAttribute('class', 'btn btn-default');
		submit.setAttribute('id', 'submitForm');
		var sbt = document.createTextNode("Enviar");
		submit.appendChild(sbt);
		
		
		//set form
		
		formGroup.appendChild(token);
		formGroup.appendChild(input1); 
		form.appendChild(formGroup);
		
		formGroup2.appendChild(secret);
		formGroup2.appendChild(input2); 
		form.appendChild(formGroup2);
		
		formGroup3.appendChild(name);
		formGroup3.appendChild(inputName); 
		form.appendChild(formGroup3);
		
		formGroup4.appendChild(email);
		formGroup4.appendChild(inputEmail); 
		form.appendChild(formGroup4);
		
		formGroup5.appendChild(estado);
		selEst.appendTo(formGroup5); 
		form.appendChild(formGroup5);
		
		formGroup6.appendChild(nivel);
		selNiv.appendTo(formGroup6); 
		form.appendChild(formGroup6);
		
		form.appendChild(submit);
		
		
			
		
		this.append(form);
		
		
		
		
		return this;
	};
	
	
	$.fn.serializeObject = function()
	{
	    var o = {};
	    var a = this.serializeArray();
	    $(this).find("input").each(function(a) {
	        if (o[this.name] !== undefined) {
	            if (!o[this.name].push) {
	                o[this.name] = [o[this.option]];
	            }
	            o[this.name].push(this.value || '');
	        } else {
	            o[this.name] = this.value || '';
	        }
	    });
	    $(this).find("select").each(function () {
	    	if (o[this.name] !== undefined) {
	            if (!o[this.name].push) {
	                o[this.name] = [o[this.name]];
	            }
	            o[this.name].push(this.value || '');
	        } else {
	            o[this.name] = this.value || '';
	        }
	    });
	    return o;
	};

	$(function() {
	    $('form').submit(function() {
	        JSON.stringify($('form').serializeObject());
	        return false;
	    });
	});
	
	
	$(document).ready(function(){
		$('#scriptForm').validate({
			rules: {
	            name: {
	                minlength: 2,
	                required: true
	            },
	            email: {
	                required: true,
	                email: true
	            },
			},
			highlight: function (element) {
	            $(element).closest('.control-group').removeClass('success').addClass('error');
	        },
	        success: function (element) {
	            element.text('Ok!').addClass('valid')
	                .closest('.control-group').removeClass('error').addClass('success');
	        }
		});
	});
 
}( jQuery ));

