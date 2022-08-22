let num = 250;
let i = 1;
let cnt = 0;

while(i <= num){
    if(num % i == 0 ){
        console.log(i);
        cnt++;
    }
    i++;
}

console.log(`${num}의 약수의 개수는 ${cnt}개 입니다.`)