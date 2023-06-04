var genpassw = require('generate-password');

var password = genpassw.generate({
	length: 14,
	numbers: true
});


console.log(password);