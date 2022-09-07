const ssn = '920321-1'
const date = new Date();
const now_year = date.getFullYear();

let yy = parseInt(ssn.substring(0,2));
let mm = parseInt(ssn.substring(2,4));
let dd = parseInt(ssn.substring(4,6));
let sex = parseInt(ssn.substring(7,8));

yy = (sex > 1) ? yy+2000 : yy+1900;
sex = (sex > 2) ? "여자" : "남자";
let age = now_year - yy;

console.log("당신은 %d세 %s입니다.",age,sex);