class Student {
    #name;
    #kor;
    #eng;
    #math;

    constructor(name, kor, eng, math) {
        this.#name = name;
        this.#kor = kor;
        this.#eng = eng;
        this.#math = math;
        console.log();
    }

    get name() {
        return this.#name;
    }

    set name(vlaue){
        this.#name = vlaue;
    }

    get kor() {
        return this.#kor;
    }

    set kor(value) {
        return this.#kor = kor;
    }
    get eng() {
        return this.#eng;
    }

    set eng(value) {
        return this.#eng = eng;
    }
    get math() {
        return this.#math;
    }

    set math(value) {
        return this.#math = math;
    }

    sum(){
        return this.kor + this.eng + this.math;
    }

    div(){
       return (this.kor + this.eng + this.math) / 3;
    }
}

var 철수 = new Student("철수", 92, 81, 77);
console.log(`철수의 총점은 ${철수.sum()}점이고 평균은 ${철수.div()}점 입니다.`);

var 영희 = new Student("영희", 92, 81, 77);
console.log(`영희의 총점은 ${영희.sum()}점이고 평균은 ${영희.div()}점 입니다.`);

var 민혁 = new Student("민혁", 92, 81, 77);
console.log(`민혁의 총점은 ${민혁.sum()}점이고 평균은 ${민혁.div()}점 입니다.`);