let str = "수업시간에 배운것은 수업시간에 다 이해하고 넘어가야지 수업시간에 놓치면 따라오기 힘들다";
let word = "수업시간";
let x = word.length;
let find = true;
let count = 0;

while(find) {
    y = str.indexOf(word);
    find = y > -1;

    if(find) {
        count++;
        str = str.substring(x+y);
    }
}

console.log(count);