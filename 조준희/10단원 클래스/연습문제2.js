class Rectangle {
    #width;
    #height;
    #getAround;
    #getArea;

    constructor(width, kheightor, getAround, getArea) {
        this.#width = width;
        this.#height = height;
        this.#getAround = getAround;
        this.#getArea = getArea;
        console.log();
    }

    get width() {
        return this.#width;
    }

    set width(vlaue){
        this.#width = vlaue;
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




//
class Rectangle {
    #width;
    #height;

    constructor(){
        this.#width = null;
        this.#height = null;
    }

    get width(){
        return this.#width;
    }

    set width(p){
        this.#width = p;
    }

    get height(){
        return this.#height;
    }

    set height(p){
        this.#height = p;
    }

    getAround(){
        this.#width * 2 + this.#height * 2;
    }

    getArea(){
        return this.#width * this.#height;
    }
}