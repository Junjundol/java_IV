let inven = [
    [500,291],
    [320,586],
    [100,460],
    [120,558],
    [92,18],
    [30,72]
];

let money = 0;

for (let i =0; i<inven.length; i++) {
    money += inven[i][0] *inven[i][1] *0.9;
}
console.log("아이템 총 판매가격: ",money+"G"); 
