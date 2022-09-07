// string형의 학과와ㅗ 정수형의 학번을 프로퍼티로 선언후 생성자를 통해 주입

function Student (major,code){
    this._major = major;
    this._code = code;
}

Student.prototype = {
    get major() {
        return this._major;
    },
    set major(p){
        this._major = p;
    },
    get code() {
        return this._code;
    },
    set code(p) {
        this._code = p;
    },

    sayHello: function() {
        console.log(`나는 ${this.major}학과 ${this.code}학번 입니다.`);
    }
};

const stud = new Student("컴퓨터", 202004123);
stud.sayHello();
