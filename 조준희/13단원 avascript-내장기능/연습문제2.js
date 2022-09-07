// const ssn = '020517-3******';

// const date = new Date();
// const now_year = date.getFullYear();
// console.log(now_year);

// let yy = parseInt(ssn.substring(0, 2));
// let mm = parseInt(ssn.substring(2,4));
// let dd = parseInt(ssn.substring(4,8));
// let gen = parseInt(ssn.substring(7,8));



// yy = (gen >2) ? yy+2000 : yy+1900;
// console.log(yy);

// const age = now_year -yy +1;

// const sex = (gen %2) ? "남자" : "여자";

// console.log("%d년 %d월 %d일에 태어난 %d세 %s입니다." , yy, mm , dd, age, sex);


const ssn = '020517-3';
const date = new Date();
const now_year = date.getFullYear();

let yy = parseInt(ssn.substring(0,2));
let mm = parseInt(ssn.substring(2,4));
let dd = parseInt(ssn.substring(4,6));
let sex = parseInt(ssn.substring(7,8));

yy = (sex > 1) ? yy+2000 : yy+1900;
sex = (sex > 2) ? "남자" : "여자";
let age = now_year - yy;

console.log("%d년 %d월 %d일에 태어난 %d세 %s입니다.",yy,mm,dd,age,sex);