// Program which compute, the average marks of the following students.
// Then, this average is used to determine the corresponding grade.
// let marksArray = [80, 77, 68, 88, 95];
// let sum = 0, average;
// for (let i = 0; i < marksArray.length; i++) {
//     sum = sum + marksArray[i];
// }
// average = sum / marksArray.length;
// console.log(`Array of students marks: ${marksArray}`);
// console.log(`The average marks of the students is ${average}`);
// if (average < 60) {
//     console.log('F');
// };
// if (average >= 60 && average < 70) {
//     console.log('D');
// };
// if (average >= 70 && average < 80) {
//     console.log('C');
// };
// if (average >= 80 && average < 90) {
//     console.log('B');
// };
// if (average >= 90 && average < 100) {
//     console.log('A');
// };

// Program to sum the multiples of 3 or 5 under 1000.
// let summary = 0;
// for (let j = 0; j < 1000; j++) {
//     if (j % 3 == 0 || j % 5 == 0) {
//         summary = summary + j;
//     }
// }
// console.log(`The summary of the multiples of 3 or 5 under 1000 is ${summary}.`);

// Program to construct the pattern, using a nested for loop.
let starArray = []; 
for (let k = 0; k < 6; k++) {
    starArray[k] = [];
    for (let l = 0; l < k; l++) {
        starArray[k][l] = '*';
    }
}
console.log(starArray);
