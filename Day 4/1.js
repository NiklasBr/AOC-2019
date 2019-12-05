'use strict';

let range = "264793-803935".split("-");
let tester = parseInt(range[0]);
let results1 = [];
let results2 = [];

while (tester < parseInt(range[1])) {
    if (tester.toString().match(/^0*1*2*3*4*5*6*7*8*9*$/gi)) {
        if (tester.toString().match(/\d*(\d)\1\d*$/gi)) {
            results1.push(tester);

            let digitCount = {0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8: 0, 9:0};
            Array.from(tester.toString()).forEach(function (digit) {
                digitCount[digit]++;
            });

            let hasLargeGroup, hasSingle = false;
            for (let key in digitCount) {
                if (digitCount[key] > 2) {
                    hasLargeGroup = true;
                }
                if (digitCount[key] === 2) {
                    hasSingle = true;
                }
            }

            if (!hasLargeGroup || hasSingle)  {
                results2.push(tester);
            }
        }
    }

    tester++;
}

console.log("Results 1: " + results1.length);
console.log("Results 2: " + results2.length);
