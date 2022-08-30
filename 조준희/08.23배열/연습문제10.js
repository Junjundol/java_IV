var student = ['둘리', '도우너', '또치', '희동'];
var grade = [
    [78, 89, 96],
    [62, 77, 67],
    [54, 90, 80],
    [100, 99, 98]
];
var sum = 0, avg = 0;
let avgSum = 0;

for (let i=0; i<student.length; i++) {
    sum = 0;
    for (let j=0; j<grade[i].length; j++) {
        sum += grade[i][j];
    }
    avg = sum / grade[i].length;
    avgSum += avg;
    console.log(student[i] + " 총점: " + sum + "점," + " 평균: " + avg.toFixed(2) +
"점");
}

avgSum = avgSum / student.length;
console.log("반평균=" + avgSum.toFixed(2) + "점");