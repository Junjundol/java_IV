function solution(x) {
    let answer = true;
 
    let tempArr = []
    let num = String(x)
 
    for(let i = 0; i < num.length; i++) {
        tempArr.push(Number(num[i]));
    }
 
    let sum = tempArr.reduce((a, b) => (a + b))
 
    if (!(x % sum === 0)) {
        answer = false;
    }
 
    return answer;
}
console.log(solution(10));
console.log(solution(12));
console.log(solution(11));
console.log(solution(13));