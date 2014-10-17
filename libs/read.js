var fs = require("fs");

var read = {
	inputDir: 'input/',
	simpleRead: function(fileName) {
		// get file content and save as string
		var content = fs.readFileSync(this.inputDir+fileName, 'utf8');
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
				return parseInt(content);
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
}

module.exports = read;