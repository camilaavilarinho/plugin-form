# plugin-form
Plugin to dynamically create forms

## Usage
Import the script within the file where you want to create the form
```
<script src="js/pluginForm.js"></script>
```
The `dynaform` function takes a hash of options to generate the form:
```
options = { 'token':'62bb61431348e22850828a5829c4373faafe29c1',
			'secret':'51a266c2844ccd5cac83d88de88d82d05358aa51', 
			'fields':{ 'estado':['PR','SC','SP','RS'], 
			'nivel':['Iniciante','Intermediário','Avançado','Ninja'] } }

$('#integration_form').dynaform(options); 
```
See a example [here](form.html)
