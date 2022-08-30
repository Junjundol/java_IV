// const exam = {
//     "철수": [89, 82, 79, 91],
//     "민영": [91, 95, 94, 89],
//     "남철": [65, 57, 71, 64],
//     "혜진": [82, 76, 81, 83]
//    }


//    for (let x in exam){
//     let sum = 0;
//     for (let y of exam[x]){
//         sum += y;
//     }
//     let avg = sum / exam[x].length;

//     console.log("%s의 총점은 %d점 이고 평균은 %d점 입니다.", x, sum, avg);
//    }


const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
   }

let sum= 0;

let student_count = 0;

for (const y in exam) {
    sum += exam[y][2];

    student_count++;
}

let avg = sum / student_count;

console.log("모든 학생의 수학 총점은 %d점 이고 평균은 %d점 입니다.", sum, avg);