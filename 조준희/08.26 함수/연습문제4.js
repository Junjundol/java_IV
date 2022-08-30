// max는 최대 행 수, current는 현재 출력중인 행의 위치
let str = "";

function printStar(max, current=1) {
    if(current > max){
        return;
    } else {
        str += '*';
        console.log(str);
        printStar(max, current+1); // 행 , 열 의미
    }
   }
printStar(5);
   
