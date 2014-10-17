var _ = require("underscore");
var count = 20;
var and = "and";

var res = "";
var prime = {
	primes: [],
	result: "",
	delimeter: ", ",
	and: "and ",
	isPrime: function (number) {
		if (number < 2)
			return false;

		for (var i = 2; i < number; i++) {
			if (number % i == 0) 
				return false;
		}
		return true;
	},
	check: function(count) {
		for (var i = 2; i <= count; i++) {
			if (this.isPrime(i)) 
				this.primes.push(i);
		}
	},
	render: function() {
		// if primes is only one, break the operation and write to file
		if (this.primes.length == 1) {
			this.result += this.primes[0];
			this.write();
			return;
		}

		var resTemp = "";
		var delTemp = this.delimeter;
		var andTemp = this.and;
		_.each(_.first(this.primes, this.primes.length - 1), function (item) {
			resTemp += item + delTemp;
		});
		this.result = resTemp;

		this.result += andTemp+_.last(this.primes);
		// wite to file
		this.write();
	},
	write: function() {
		console.log('it should be write');
	}
};

prime.check(20);
prime.render()
console.log(prime.result);