//피보나치 수열에서 10번째 항목이 무엇인지 출력하시오.

//보통은 0123순으로가 가지만 피보나치 수열은
//      0112358순으로 f(0)=1  f(1)=1   f(2)=2
//    이 이후로 앞전의 두 숫자가 더해진값이 다음 함수로들어온다.


// f(n) = f(n-1) + f(n-2);

function fibonacci(n) {
    if (n <2) {
        return n;
    } else {
        return fibonacci(n-2) + fibonacci(n-1);
    }
}

console.log(fibonacci(10));