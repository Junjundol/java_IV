// 기본 데이터 타입
const num = 123.45;
const str = "hello";
const bool = true
// 추후 살펴보게 될 데이터 타입
const obj = new Date;               //객체
const arr = [1,2,3];                // 배열 (객체의 일종)
const json = {"a": 123, "b": 234}   // JSON (객체의 일종)

/** 1) (중요) 숫자 표현을 위한 문자 : %d */
console.group("숫자값 출력하기")
console.log("숫자값 출력하기=%d", num);     //정상
console.log("숫자값 출력하기=%d", str);     //숫자가 아니므로 NAN
console.log("숫자값 출력하기=%d", true);    //1 (0은 거짓, 0이외의 수는 참. 일반적으로 1을 참으로 처리)
console.log("숫자값 출력하기=%d", obj);     //객체에 대한 Hash값 출력
console.log("숫자값 출력하기=%d", arr);     //숫자가 아니므로 NAN
console.log9("숫자값 출력하기=%d", json);   //숫자가 아니므로 NAN
console.groupEnd();

/** 2) (중요) 문자열 표현을 위한 문자 : %s */
console.groupo("문자열 출력하기");
console.log("문자열 출력하기=%s", num);      //정상
console.log("문자열 출력하기=%s", str);   //정상
console.log("문자열 출력하기=%s", true); //정상
console.log("문자열 출력하기=%s", obj); //정상
console.log("문자열 출력하기=%s", arr); //정상
console.log("문자열 출력하기=%s", json); //정상
console.groupEnd();

/** 3) 객체 표현을 위한 문자 : %o */
console.group("객체 출력하기");
console.log("객체 출력하기=%o", num); //정상
console.log("객체 출력하기=%o", str); //정상(따옴표가 적용됨)
console.log("객체 출력하기=%o", true); //정상
console.log("객체 출력하기=%o", obj); //정상
console.log("객체 출력하기=%o", arr); //정상
console.log("객체 출력하기=%o", json); //정상
console.groupEnd();

/** 4) json 표현을 위한 문자 : %j */
console.group("json 출력하기");
console.log("json 출력하기=%j", num);   //정상
console.log("json 출력하기=%j", str);   //정상(따옴표가 적용됨)
console.log("json 출력하기=%j", true);  //정상
console.log("json 출력하기=%j", obj);   //정상
console.log("json 출력하기=%j", arr);   //정상
console.log("json 출력하기=%j", json);  //정상
console.groupEnd();

const student = "자바스크립트학생";
const age = 20;
console.group("복합사용");
console.log("%s님의 나이는 %d세입니다.", student, age);
console.groupEnd();
