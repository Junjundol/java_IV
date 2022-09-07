let arr = [5, 3, 2, 8, 9];
console.log('before--> ' + arr);

for ( let i=0; i< parseInt(arr.length/2); i++) {
    let tmp = arr[i];
    arr[i] = arr[arr.length-i-1];
    arr[arr.length-i-1] = tmp;
}

console.log('after-->' + arr);



// //parseInt >> 삼항연산자 이용 (int=정수를 의미)(괄호안에있는것을 무조건 정수로 바꾸고 소주점을 버린다.)
// (x/2)(삼항연산자이용)
// length-i-1
// length-i-1