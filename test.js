var HappyPass = require("./index.js");

console.time("test");
var generated = [];
var itterations = 10000;

var repetitions = 0;
for (var x = 0; x < itterations; x++) {
	var coloranimal = HappyPass.colouranimal();
	if (generated.indexOf(coloranimal) !== -1) {
		console.log("Repeatition", coloranimal,"at index", generated.indexOf(coloranimal));
		repetitions++;
	}
	generated.push(coloranimal);
}

if (repetitions) {
	console.log("Repetitions: " + repetitions + " in " + itterations);
} else {
	console.log("No repetitions in " + itterations);
}
console.log(generated.slice(1,5));
console.timeEnd("test");