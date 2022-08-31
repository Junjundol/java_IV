// 기본 기능을 갖는 클래스
class SayHi {
    eng() {
        console.log("hi java");
    }
}

// 기본 기능을 확장하는 클래스 
// 부모의 기능을 상속받고, 추가로 자신이 구현하는 기능도 사용할 수 있다.
class SayHiworld extends SayHi {
    kor() {
        console.log("하이 자바");
    }
}

const hi = new SayHiworld();
hi.eng();
hi.kor();