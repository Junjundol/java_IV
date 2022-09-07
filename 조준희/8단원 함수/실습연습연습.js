let totalcount = 0;

function myGame(n) {
    for (let i =0; i<=n; i++){
        let count =0;
        let str = "" + i;  // i가 빈문자열과 합쳐짐.
        let clap = "";

        for ( let j=0; j<str.length; j++){
            if(str[j] == '3' || str[j] == '6' || str[j] == '9'){
                clap = "짝";
                count++;
                totalcount++;
            }
            if (count) {
                console.log(`${clap}${i} --> ${count}번`);
            } else {
                console.log(i);
            }
        }
    }console.log("박수를 총 %d번 쳤습니다.", totalcount);
}

myGame(35);