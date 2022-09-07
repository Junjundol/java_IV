// const grade = [
//     [ "철수", 92, 81, 77],
//     [ "영희", 72, 95, 98],
//     [ "민혁", 80, 86, 84]
// ];

// function Student(kor, eng, math) {
//     this._kor = kor;
//     this._eng = eng;
//     this._math = math;
// }ㅋ

// Student.prototype = {
//     sum : function(){
//         return this._kor + this._eng + this._math;

//     },

//     avg: function(){
//         return this.sum() / 3;

//     }
// };

// for (const item of grade){
//     const s = new Student(item[1], item[2], item[3]);
//     console.log("%s의 총점은 %d점 이고 평균은 %d점 입니다.", item[0], s.sum(),s.avg());
// }









// const s1 = new Student(92, 81, 77);
// const s2 = new Student(72, 95, 98);
// const s3 = new Student(80, 86, 84);

// console.log("철수의 총점은 %d점 이고 평균은 %d점 입니다.", s1.sum(), s1.avg());
// console.log("영희의 총점은 %d점 이고 평균은 %d점 입니다.", s2.sum(), s2.avg());
// console.log("민혁의 총점은 %d점 이고 평균은 %d점 입니다.", s3.sum(), s3.avg());






const student = function (kor,eng,math) {
    this._kor = kor;
    this._eng = eng;
    this._math = math;
};

student.prototype.sum = function(){
    return (this._kor + this._eng + this._math)
};

student.prototype.avg = function(){
    return ((this._kor + this._eng + this._math) / 3)
};

const 철수 = new student(92, 81, 77);
const 영희 = new student(72, 95, 98);
const 민혁 = new student(80, 86, 84);

console.log("철수의 총점은 %d점이고 평균은 %d점입니다.", 철수.sum(), 철수.avg());
console.log("영희의 총점은 %d점이고 평균은 %d점입니다.", 영희.sum(), 영희.avg());
console.log("민혁의 총점은 %d점이고 평균은 %d점입니다.", 민혁.sum(), 민혁.avg());







