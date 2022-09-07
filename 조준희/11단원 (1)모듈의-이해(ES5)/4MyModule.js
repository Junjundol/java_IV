//객체를 모듈화 하기 ----> 가장 일반적인 방법
class HelloWorld {
    constructor() {
        console.log("--- hello world ---의 객체가 생성되었습니다.---");
    }

    say(){
        console.log("hello world");
    }
}


//클래스에 대한 객체를 모듈에 추가
module.exports = new HelloWorld();