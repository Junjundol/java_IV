//랜덤함수
function random(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 +1)) + n1;
}

//0개의 원소를 갖는 배열
const lotto = [];
console.log(lotto);

//6회의 반복을 수행
for (let i=0; i<6; i++){
    //console.log("%d번째 원소 결정하기", i);
    //console.log)(%s", lotto);
    // 중복되지 않는 숫자가 몇 번쨰에 생성될지 알 수 없으므로 무한반복
    while(true) {
        //랜덤한 숫자
        const rnd = random(1,6);
        
        if(!lotto.includes(rnd)){
            lotto.push(rnd);
            break;
        }
    }
}

console.log(lotto);