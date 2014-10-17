var number = 20;
var delimeter = ", ";
var and = "and";

var res = "";
var prime = {
	isPrime: function (number) {
		if (number < 2)
			return false;

		for (var i = 2; i < number; i++) {
			// console.log(i);
			if (number % i == 0) 
				return false;
		}
		return true;
	}
};

console.log(prime.isPrime(2));