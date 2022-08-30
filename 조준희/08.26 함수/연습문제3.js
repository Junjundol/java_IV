// 3과 6과 9에 박수를 치게 만들어라

function myGame(n){
    let c_count = 0;
    for(let i = 1; i <=n; i++) {
        let count =0;
        let str = "" + i;
        let clap = "";
        for ( let j= 0; j < str.length; j++) {
            if (str[j] ==  '3' || str[j] == '6' || str[j] == '9') {
                clap = "짝";
                count++;
                c_count++;                
            }
            if (count) {
                console.log("%s(%d) --> %s번", clap, i, count);
            } else {
                console.log(i);
            }
        }
    } console.log("박수를 총 %d번 쳤습니다.", c_count);
}

myGame(35);