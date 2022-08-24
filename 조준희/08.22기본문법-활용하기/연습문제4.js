let count = 0;
for (let i = 1; i<=6; i++){

    for (let j = 1; j<=6; j++){
        if(i+j == 6){
            console.log(`[ ${i}, ${j} ]`);
            count++;
        }
    }
}
console.log(`경우의 수는 ${count}개 입니다.`);