var fs = require("fs");

var readDict = function(fname, minlength) {
	minlength = minlength || 4;
	var txt = fs.readFileSync(fname) + "";
	// console.log(txt);
	return txt.split("\n").filter((line) => {
		line = line.trim();
		if (line[0] == ";")
			return false;
		if (line.length < minlength)
			return false;
		if (line.length > 8)
			return false;
		return true;
	}).map((line) => {
		return line.replace(/-|\s/g, "");
	});
};

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var generateHappyPass = function() {
	String.prototype.ucfirst = function() {
	    return this.charAt(0).toUpperCase() + this.slice(1);
	};
	$positiveWords = readDict(__dirname + "/positive-words.txt");
	var ints = [ getRandomIntInclusive(1, $positiveWords.length), getRandomIntInclusive(1, $positiveWords.length) , getRandomIntInclusive(1, $positiveWords.length) ];
	return $positiveWords[ints[0]].ucfirst() + $positiveWords[ints[1]].ucfirst() + getRandomIntInclusive(10, 999);
};

// for(var x = 0; x < 99; x++)
// 	console.log(generateHappyPass());

module.exports = {
	generate: generateHappyPass
};
// console.log($s.length);