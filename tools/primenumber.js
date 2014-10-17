var count = 20;
var and = "and";

var res = "";
var prime = {
	primes: [],
	result: "",
	delimeter: ", ",
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
		if (this.primes.length == 1) {
			this.result += this.primes[0];
			break;
		}

		
	}
};

prime.check(2);
prime.render()
console.log(prime.result);