function solution(K,N,M) {
    let price = K*N;
    let getmoney = price > M ? price - M : 0;
    return getmoney;
}

console.log(`동수가 부모님께 받아야 하는 돈은 ${solution(30, 4, 100)}원입니다.`)
console.log(`동수가 부모님께 받아야 하는 돈은 ${solution(250, 2, 140)}원입니다.`)
console.log(`동수가 부모님께 받아야 하는 돈은 ${solution(20, 6, 120)}원입니다.`)
console.log(`동수가 부모님께 받아야 하는 돈은 ${solution(20, 10, 320)}원입니다.`)
