// // let time = [ 7, 5, 5, 5, 5, 10, 7];
// // let money = 0;

// // for (let i=0; i<time.length; i++){
// //     if(i<4){
// //         money += time[i] * 4500;
// //     } else {
// //         money += time[i] * 5200;
// //     }
// // }

// console.log("1주일간의 전체 급여: " + money + "원");

let price = [38000, 20000, 17900, 17900];
let qty = [6, 4, 3, 5];
let money = 0;
let max = 0;
let count = 0;

for (let i = 0; i<price.length; i++) {
    money += price[i] * qty[i];

    let priceValue = price[i] * qty[i];
    
    if(max<priceValue){
        max=priceValue;
    }

    if(priceValue>=80000){
        count++;
    }

}

console.log("전체 결재 금액: " + money + "원");
console.log("가장 높은 상품금액: " +max +"원");
console.log("무료배송 항목: " + count + "건");
