/**
 *  비동기 처리로 실행되는 함수에 대한 결과 처리를 별도의 로직으로 실행 할 수 있는 기법
 */
function random(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 +1)) +n1;
}

// Promise를 가동하기 위해서는 Promise객체를 리턴하는 함수가 필요함.
function getLuckyResult