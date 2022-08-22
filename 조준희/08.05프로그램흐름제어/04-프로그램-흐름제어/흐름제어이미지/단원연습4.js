let num1 = 34;
let num2 = 15;
let d = 0;
let stop = true;


let i = 34;

while(stop){
    if(i%num1 == 0 && i%num2 == 0){
        d = i;
        stop = false;
    }
    i++;
}

console.log(d);

