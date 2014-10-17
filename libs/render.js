var _ = require("underscore");

var render = {
	result: "",
	delimeter: ", ",
	and: "and ",
	simpleRender: function(arrayData) {
		// if primes is only one, break the operation and write to file
		if (arrayData.length == 1) {
			this.result += arrayData[0];
			return this.result;
		}

		var resTemp = "";
		var delTemp = this.delimeter;
		var andTemp = this.and;
		// for each prime numbers without the last one, add ', '
		_.each(_.first(arrayData, arrayData.length - 1), function (item) {
			resTemp += item + delTemp;
		});
		this.result = resTemp;

		// last prime number must be aded 'and '
		this.result += andTemp+_.last(arrayData);

		return this.result;
	}
}

module.exports = render;