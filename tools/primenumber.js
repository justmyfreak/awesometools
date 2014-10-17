var _ = require("underscore");
var fs = require("fs");
var render = require('../libs/render');
var write = require('../libs/write');
var read = require('../libs/read');

var prime = {
	count: 0,
	primes: [],
	result: "",
	delimeter: ", ",
	and: "and ",
	fileHeader: "/**************************** prime-result.txt ******************************/",
	start: "/***********************************START***********************************/",
	end: "/************************************END************************************/",
	outputFile: "prime-result.txt",
	inputFile: "prime-input.txt",
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
		this.result = render.simpleRender(this.primes);
	},
	write: function() {
		write.simpleWrite(this.outputFile, this.result);
	},
	readFile: function() {
		this.count = read.simpleRead(this.inputFile);
	},
	run: function() {
		this.readFile();
		this.check(this.count);
		this.render();
		this.write();
	}
};

prime.run();