/**
 * 
 *  Number 는 숫자 처리와 관련된 기본 기능들을 제공하는 내장 클래스.
 */

const k = "123";
console.log(typeof parseInt(k));
console.log(typeof parseFloat(k));


// 객체의 생성(class)
let a = new Number(123); // a ===123은 false
console.log(a);
console.log(typeof a);
console.log(a == 123);
console.log(a === 123);

//Number() 함수를 통해 반환받는 값은 객체가 아닌 일반 숫자
//Number ()함수는 parseFloa, parseInt와 비슷한 기능.
var b = Number('123');  // b === 123은 true
console.log(b);
console.log(typeof b); //false
console.log(b === 123);

var b = Number('123.45'); // b === 123은 true
console.log(b);
console.log(typeof b); // false
console.log(b === 123.45);