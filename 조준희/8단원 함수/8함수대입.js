//함수를 변수에 대입하기

//say_hello라는 이름을 갖는 일반적인 함수의 사용과 호출
function sayhello(msg) {
    console.log("sayhello(" + msg + ")");
}

sayhello("안녕하세요 자바스크립트!");

const say = sayhello;

say("hello javascript");