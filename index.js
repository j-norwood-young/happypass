var fs = require("fs");

var readDict = function(fname, minlength) {
	minlength = minlength || 4;
	var txt = fs.readFileSync(fname) + "";
	// console.log(txt);
	return txt.split("\n").filter((line) => {
		line = line.trim();
		if (line[0] == ";")
			return false;
		if (line[0] == "#")
			return false;
		if (line.length < minlength)
			return false;
		if (line.length > 6)
			return false;
		return true;
	}).map((line) => {
		return line.replace(/-|\s/g, "");
	});
};

var colours = readDict(__dirname + "/colours.txt");
var animals = readDict(__dirname + "/animals.txt");
var positiveWords = readDict(__dirname + "/positive-words.txt");
var google = readDict(__dirname + "/google-10000-english-no-swears.txt");

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

ucfirst = function() {
	if (!this)
		return "";
    return this.charAt(0).toUpperCase() + this.slice(1);
};

var generateHappyPass = function() {
	var ints = [ getRandomIntInclusive(1, positiveWords.length), getRandomIntInclusive(1, positiveWords.length) , getRandomIntInclusive(1, positiveWords.length) ];
	return ucfirst(positiveWords[ints[0]]) + ucfirst(positiveWords[ints[1]]) + getRandomIntInclusive(10, 999);
};

var generateAnimalPass = function() {
	//An easier password, for a simpler time...
	var ints = [ getRandomIntInclusive(1, colours.length), getRandomIntInclusive(1, animals.length), getRandomIntInclusive(1, positiveWords.length), getRandomIntInclusive(0,3) ];
	var pass = "";
	var colour = colours[ints[0]];
	var animal = animals[ints[1]];
	pass = colour + animal;
	// if (ints[3] === 0) {
	// 	pass = colour + animals[ints[1]];
	// } else if (ints[3] === 1) {
	// 	pass = positiveWords[ints[2]] + animals[ints[1]];
	// } else {
	// 	pass = positiveWords[ints[2]] + colours[ints[0]];
	// }
	pass += getRandomIntInclusive(10, 999);
	return pass;
};

var generateCommonPass = function() {
	var ints = [ getRandomIntInclusive(1, google.length), getRandomIntInclusive(1, google.length), getRandomIntInclusive(1, google.length), getRandomIntInclusive(1,3) ];
	var pass = "";
	for(var x = 0; x < 2; x++) {
		pass += google[ints[x]];
	}
	pass += getRandomIntInclusive(10, 999);
	return pass;
};

// console.log(generateHappyPass());

module.exports = {
	generate: generateHappyPass,
	colouranimal: generateAnimalPass,
	common: generateCommonPass
};
// console.log($s.length);