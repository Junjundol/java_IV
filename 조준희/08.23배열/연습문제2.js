let grade =[75,82,91];
let sum = 0, avg = 0;

for (let i= 0; i<grade.length; i++) {
        sum += grade[i];
        avg = sum / grade.length;
}

avg = avg.toFixed(2);
console.log("총점: " + sum +"점","평균점수: " + avg + "점");



// for (let i of grade) {
//     sum += i;
// }