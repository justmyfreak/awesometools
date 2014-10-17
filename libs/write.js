var fs = require("fs");

var write = {
	outputDir: 'result/',
	fileHeader: function(fileName) {
		return "/**************************** "+fileName+" ******************************/";
	},
	start: "/***********************************START***********************************/",
	end: "/************************************END************************************/",
	simpleWrite: function(outputFile, result) {
		var compose = this.fileHeader(outputFile)+"\n"+this.start+"\n"+result+"\n"+this.end;
		fs.writeFile(this.outputDir+outputFile, compose, function(err) {
			if (err) {
				console.log(err);
			} else {
				console.log("Process Done !! Ouput File : result/"+outputFile);
			}
		});
	}
}

module.exports = write;