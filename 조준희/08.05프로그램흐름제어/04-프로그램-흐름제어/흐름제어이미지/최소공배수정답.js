let num1 = 34;
let num2 = 15;
let lcm = 2;


while(true){
    if(lcm % num1 == 0 && lcm % num2 ==0){
        break;
    }
    lcm++
}

console.log(`${num1}와 ${num2}의 최소공배수는 ${lcm}입니다.`);