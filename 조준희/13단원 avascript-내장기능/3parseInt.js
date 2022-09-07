// parseInt(value, int)

//첫번째 파라미터를 10진 정수값으로 변환한다.
//변환할 수 없다면 NaN을 반환
//두 번째 파라미터는 value가 어떤 진법인지를 알려주는 값.(기본값=10)
// 문자열의 선행 공백은 무시한다.
// 숫자 + 글자 형태의 문자열은 숫자 부분만 취함
// 글자 + 숫자 형태의 문자열은 변환 불가 -NaN
//소수점을 포함하고 있을 경우 정수부분만 취한다.


// 10진법
// 16진법
// 8진법



// 15로 변환
console.log(parseInt(' 0xF',16));
console.log(parseInt(' F', 16));
console.log(parseInt('17', 8));
console.log(parseInt('015', 10));
console.log(parseInt(15.99, 10)); //소수점 이하 버려짐
console.log(parseInt('15,123', 10));//, 콤마는 단순 문자열이라 이후 버려짐
console.log(parseInt('FXX123', 16)); //16진수 기준 정상숫자인 F는 인식되지만 문자열 X이후로는 버려진다.
console.log(parseInt('1111', 2));
console.log(parseInt('15*3', 10));  //문자열에서 *는 곱하기가 아니라 단순 글자이므로 *는 버려진다.
console.log(parseInt('15e2', 10)); //문자열 e이후는 버려진다
console.log(parseInt('15px', 10)); // 문자열 px는 버려진다.


//-15로 변환
console.log(parseInt(' -0xF',16));
console.log(parseInt(' -F', 16));
console.log(parseInt(' -0F',16));
console.log(parseInt('-17', 8));
console.log(parseInt('-15', 10));
console.log(parseInt('-1111', 2));
console.log(parseInt(-15.99, 10)); 

//NaN로 변환
console.log(parseInt("Hello", 8));