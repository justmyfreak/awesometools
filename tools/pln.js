var render = require('../libs/render');
var write = require('../libs/write');
var _ = require('underscore');

var pln = {
	initialData: [],
	orderedData: [],
	init: function(kecamatan) {
		for (i = 1; i <= kecamatan; i++) {
			this.initialData.push(i);
		}
	},
	roulette: function(step, last) {
		console.log(this.initialData);
		var counter = 0;
		var stepCounter = 5;
		while (this.initialData.length != 0) {
		// while (counter <= this.initialData.length) {
			if (stepCounter == 5) {
				console.log("counter : "+counter+" value : "+this.initialData[counter]);
				this.orderedData.push(this.initialData[counter]);
				// this.initialData.splice(counter, 1);	
			}

			if (stepCounter == step) {
				stepCounter = 1
			} else {
				stepCounter++;
			}

			if ((counter + 1) >= this.initialData.length) {
				counter = 0;
				this.initialData = _.difference(this.initialData, this.orderedData);
			} else {
				counter++;			
			}
			// counter += step;			
		}
		this.initialData = _.difference(this.initialData, this.orderedData);
		console.log(this.initialData);
	}
}

pln.init(17);
pln.roulette(5, 7);
console.log(pln.orderedData);