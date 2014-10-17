var _ = require("underscore");
var fs = require("fs");
var count = 20;
var and = "and";

var res = "";
var prime = {
	primes: [],
	result: "",
	delimeter: ", ",
	and: "and ",
	start: "**************************START**************************",
	end: "***************************END***************************",
	outputFile: "result/prime-result.txt",
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
		// for each prime numbers without the last one, add ', '
		_.each(_.first(this.primes, this.primes.length - 1), function (item) {
			resTemp += item + delTemp;
		});
		this.result = resTemp;

		// last prime number must be aded 'and '
		this.result += andTemp+_.last(this.primes);
		// wite to file
		this.write();
	},
	write: function() {
		var compose = this.start+"\n"+this.result+"\n"+this.end;
		fs.writeFile(this.outputFile, compose, function(err) {
			if (err) {
				console.log(err);
			} else {
				console.log("Process Done !! Ouput File : result/prime-result.txt");
			}
		});
	}
};

prime.check(100);
prime.render()
console.log(prime.result);