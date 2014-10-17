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
			if (stepCounter == 5) {
				if (this.initialData[counter] != last) {
					this.orderedData.push(this.initialData[counter]);
				} else {
					var nextIndex = counter + 1;
					if (nextIndex == this.initialData.length) {
						nextIndex = 0;
					} 

					if (this.initialData.length > 1) {
						// console.log("should be last push : counter : "+counter+", "+stepCounter+" value : "+this.initialData[counter]+ " total of data : "+this.initialData.length + " next index "+nextIndex);
						this.orderedData.push(this.initialData[nextIndex]);
						
					} else {
						this.orderedData.push(this.initialData[counter]);
					}
				}
			}
			if (stepCounter >= step) {
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
		}
	}
}

pln.init(17);
pln.roulette(5, 7);
console.log(pln.orderedData);