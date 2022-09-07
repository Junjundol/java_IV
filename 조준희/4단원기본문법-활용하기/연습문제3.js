let result = 0;

for (let i=1; i < 20; i++) {
    if(i % 2 == 0 || i % 3 == 0){
    result += i;
    }
}

console.log("2의 배수와 3의 배수의 총합은 %d 이다",result);


/*  let result = 0;

for(let i = 1; i < 20; i++){
    if (i % 2 ==0){
        result += i;
    } else if (i % 3 ==0){
        result += i;
    }
}
console.log(result);  */