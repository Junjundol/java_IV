class Student {
    #grade = null;

    constructor() {
        this.#grade = [];


    }

    set grade(p){
        this.#grade.push(p);
    }

    getSumAvg() {
        const sumAvg = new Array(2);
        sumAvg[0] = this.#grade.reduce((acc,cur) => acc + cur);
        sumAvg[1] = sumAvg[0]/this.#grade.length;
        return sumAvg;
    }

    getMinMax(){
        let min = this.#grade[0];
        for(let i=0; i<this.#grade.length; i++){
            if(min > this.#grade[i]){
                min = this.#grade[i];
            }
        }
        
        let max = this.#grade[0];
        for(let i=0; i<this.#grade.length; i++){
            if(max < this.#grade[i]){
                max = this.#grade[i];
            }
        }

        let MinMax = {min,max};
        return MinMax;
    }
    getVar() {

        let deviation = new Array(this.#grade.length).fill(0);
        deviation.map((e,i) => deviation[i] = (this.#grade[i] - this.getSumAvg()[1]) );


        let deviationDouble = new Array(this.#grade.length);
        deviation.forEach((e,i) => deviationDouble[i] = deviation[i]**2);


        let dispersion = (deviationDouble.reduce((acc,cur) => acc + cur ,0))/this.#grade.length;
        
        return dispersion;
    }

    getStd() {
        return Math.sqrt(this.getVar());
    }
}

let st1 = new Student();
st1.grade = 82;
st1.grade = 76;
st1.grade = 91;
st1.grade = 98;
st1.grade = 64;

console.log("총점: %d , 평균 : %d",st1.getSumAvg()[0],st1.getSumAvg()[1]);
console.log("최소값: %d, 최대 값: %d",st1.getMinMax().min,st1.getMinMax().max);
console.log("분산: %d",st1.getVar());
console.log("표준편차: %d",st1.getStd());




// const numbers = [1,2,3,4,5];
// const result = numbers.map(number => number * number);

// console.log(numbers);
// console.log(result);



// const arr = ['1', '2', '3', '4'];

// arr.forEach((item, index) => {
//   console.log("index: " + index + ", item: " + item);
// });