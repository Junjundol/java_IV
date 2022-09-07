let num1 = 42;
let num2 = 36;
let d = 0;

let min = num1 < num2 ? num1 : num2;

let i = 1;

while(i <= min){
    d = (num1%i == 0 && num2%i == 0)? i : d;
    i++
}

console.log(`${num1}과 ${num2}의 최대 공약수는 ${d}이다.`)