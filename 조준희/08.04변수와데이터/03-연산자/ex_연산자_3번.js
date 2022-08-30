let numOfApples = 123; // 사과개수
let bowl = 10;         // 나눌수
let d = numOfApples % bowl;  // 나머지

let count = d  === 0 ? numOfApples/bowl : (numOfApples-d)/bowl+1;

console.log(count);
