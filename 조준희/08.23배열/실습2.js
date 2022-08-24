const myArr = new Array(5);
console.log(myArr);

const len = myArr.length;

for (let i=0; i<len; i++) {
    myArr[i] = i * 10;
}

console.log(myArr);

//for of 반복문

const data = [ 4, 5, 2, 1, 3];
for (const item of data) {
    console.log(item);
}

//원소의 총합,평균
const data = [ 10, 20, 30, 40, 50];

// 총 합을 구할 때는 항상 누적 합산을 수행한 변수를 0으로 초기화 해 놓고 반복을 수행 해야한다.
let sum = 0;

// 배열의 모든 원소에 대한 반복문 구성
for (let i = 0; i < data.length; i++) {
    sum += data[i];
}

console.log("data의 총합: %d", sum);

// 평균은 총 합의 원소의 길이로 나눈 값.
const avg = sum / data.length;
console.log("data의 평균: %d", avg);