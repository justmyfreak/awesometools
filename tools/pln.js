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
		// define counter and step counter
		var counter = 0;
		var stepCounter = step;
		while (this.initialData.length != 0) {
			// if stepCounter equal to step, it should push element to orderedData
			if (stepCounter == step) {
				// if current value is not the last, push the data directly
				if (this.initialData[counter] != last) {
					this.orderedData.push(this.initialData[counter]);
				} else {
					// if current element is the last order, let's do some checking
					// define next index for next element to be the next order
					var nextIndex = counter + 1;
					// if next index is equal to remaining data, next index should be 0
					if (nextIndex == this.initialData.length) {
						nextIndex = 0;
					} 

					// if there is no other element in initial data, push next order
					if (this.initialData.length > 1) {
						// console.log("should be last push : counter : "+counter+", "+stepCounter+" value : "+this.initialData[counter]+ " total of data : "+this.initialData.length + " next index "+nextIndex);
						this.orderedData.push(this.initialData[nextIndex]);
						
					} else {
						// if current element has no other data, push it as the last order
						this.orderedData.push(this.initialData[counter]);
					}
				}
			}

			// handling the stepCounter and reset it when exceed
			if (stepCounter >= step) {
				stepCounter = 1
			} else {
				stepCounter++;
			}

			// handling counter for loop control
			if ((counter + 1) >= this.initialData.length) {
				counter = 0;
				// after loop done for entire initial data array, delete unused data to prefent duplication
				this.initialData = _.difference(this.initialData, this.orderedData);
			} else {
				counter++;			
			}
		}
	}
}

pln.init(17);
pln.roulette(7, 5);
console.log(pln.orderedData);