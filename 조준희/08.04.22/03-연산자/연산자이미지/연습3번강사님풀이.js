//사과의 수 
const numOfApples = 123;

// 10개씩 담았을 경우 남는 사과가 몇개인지 구함
const extra = numOfApples % 10;
console.log(`나머지=${extra}`);

// 나머지만 담은 바구니 수
const extrabasket = extra == 0 ? 0 : 1;


/*/ 10개씩 나누어 담았을 때 바구니의 수
let basketCount = (numOfApples - extra) / 10 + extrabasket;
console.log("바구니 수=${basketCount}");
*/

// 축약형
let basketCount = (numOfApples - extra) / 10 + (extra == 0 ? 0 : 1);
console.log(`바구니 수=${basketCount}`);