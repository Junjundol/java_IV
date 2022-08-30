const Student = function(major,code,kor,eng,math){
    this._major = major;
    this._code = code;
    this._kor = kor;
    this._eng = eng;
    this._math = math;
};




Student.prototype = {
    sum : function(){
        return this._kor + this._eng + this._math;
    },

    avg : function() {
        return this.sum() /3;
    }
};

const 현우 = new Student(90,95,95);
const 승택 = new Student(60,67,88);
const 준희 = new Student(92,88,77);
const 정민 = new Student(100,88,55);

현우.i = ["일본어학과",20200004];
승택.i = ["프랑스학과",20200003];
준희.i = ["한국어학과",20200002];
정민.i = ["프랑스어학과",20200001];

console.log("현우의 학과는 %s학과이고 학번은 %d이며 총점은 %d점 평균은 %d점이다.",현우.i[0],현우.i[1],현우.sum(),현우.avg());
console.log("승택의 학과는 %s학과이고 학번은 %d이며 총점은 %d점 평균은 %d점이다.",승택.i[0],승택.i[1],승택.sum(),승택.avg());
console.log("준희의 학과는 %s학과이고 학번은 %d이며 총점은 %d점 평균은 %d점이다.",준희.i[0],준희.i[1],준희.sum(),준희.avg());
console.log("정민의 학과는 %s학과이고 학번은 %d이며 총점은 %d점 평균은 %d점이다.",정민.i[0], 정민.i[1], 정민.sum(),정민.avg());
