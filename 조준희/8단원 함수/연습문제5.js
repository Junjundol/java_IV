// max는 최대 행 수, current는 현재 출력중인 행의 위치
``


function printRevStar(max, current=1) {
    let str ="";
    if ( current > max) {
        return;
    } else {
        for (let i =current; i<= max; i++){
            str += "*";
        }
        console.log(str);
        printRevStar(max, current+1);
    }
}

printRevStar(5);



// function printStar(max) {
//     for(i=0; i < max; i++){
//         let str = "";
//         for(let j = 0; j < 5-i; j++){
//             str += "*";
//         }
//         console.log(str);

//     }
// }
// printStar(5);