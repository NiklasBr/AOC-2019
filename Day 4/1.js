
let range = "264793-803935".split("-");
let tester = parseInt(range[0]);
var results = [];

while (tester < parseInt(range[1]) && tester++) {
	if (tester.toString().match(/^0*1*2*3*4*5*6*7*8*9*$/gi)) {
		if (tester.toString().match(/\d*(\d)\1\d*$/gi)) {
			results.push(tester);
		}
	}
}

console.log("Results 1: " + results.length);
