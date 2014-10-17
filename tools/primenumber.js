var _ = require("underscore");
var fs = require("fs");
var count = 20;
var and = "and";

var res = "";
var prime = {
	count: 0,
	primes: [],
	result: "",
	delimeter: ", ",
	and: "and ",
	start: "**************************START**************************",
	end: "***************************END***************************",
	outputFile: "result/prime-result.txt",
	inputFile: "input/prime-input.txt",
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
	},
	readFile: function() {
		// get file content and save as string
		var content = fs.readFileSync(this.inputFile, 'utf8');
		// check if file is empty throw warning
		if (content == '') {
			console.log('Warning !!! Input input file is empty');
			return;
		}

		// check whether input is one line or not
		if (this.isMoreThanOneLine(content)) {
			console.log('Warning !!! Input must be one line only');
		} else {
			// check whether input countains alphabet or not
			if (this.isContainAlphabet(content)) {
				console.log('Warning !!! There is alphabet inside file. Process Terminated')
				return;
			} else {
				this.count = parseInt(content);
			}
		}
		
	},
	isMoreThanOneLine: function(value) {
		if ((value.split('\n').length) > 1)
			return true;

		return false; 
	},
	isContainAlphabet: function(value) {
		if (value.match(/[a-z]/i))
			return true

		return false;
	},
	run: function() {
		this.readFile();
		this.check(this.count);
		this.render();
	}
};

prime.run();
// prime.check(100);
// prime.readFile();
// prime.render();
// console.log(prime.result);