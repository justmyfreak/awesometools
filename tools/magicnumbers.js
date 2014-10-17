var _ = require("underscore");
var fs = require("fs");

var magic = {
	validData: [],
	magicNumbers: [],
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
	},
	prepareData: function(totalData) {
		// loop for total data
		for (var i = 0; i <= totalData; i++) {
			// count number
			var numStr = i.toString();

			// if under 10, add 0
			if (i < 10) {
				var str = "0"+i;
				// push valid even number to array
				this.validData.push(str);
			} else if ((numStr.length % 2) == 0) {
				var str = i.toString();
				this.validData.push(str);
			}
		}
	},
	check: function() {
		// this function is used to check whether the number magic number or not. 
		for (var i = 0; i < this.validData.length; i++) {
			if (this.isMagicNumber(this.validData[i]))
				this.magicNumbers.push(this.validData[i]);
		}
	}
}

magic.prepareData(1000000);
magic.check();
console.log(magic.magicNumbers);
// console.log(magic.validData);
// console.log(magic.isMagicNumber('00'));