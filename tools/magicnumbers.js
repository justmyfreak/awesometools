var _ = require("underscore");
var fs = require("fs");

var magic = {
	isMagicNumber: function(value) {
		var valInt = parseInt(value);
		// console.log(valInt);
		var half = (value.length / 2);
		
		var left = value.substring(0, half);
		var right = value.substring(half, value.length);
		var leftInt = parseInt(left);
		var rightInt = parseInt(right);

		var calculate = Math.pow((leftInt + rightInt), 2);
		
		if (calculate == valInt)
			return true;

		return false;
	}
}

console.log(magic.isMagicNumber('00'));