let price = [209000, 109000, 119000, 109000, 94000];
console.log("상품가격--> " + price);

for (let i=0; i<price.length-1; i++) {
    for (let j=i+1; j<price.length; j++){
        if (price[i] > price[j]) {
            let tmp = price[i];
            price[i] = price[j];
            price[j] = tmp;
        }
    }
}

console.log("낮은가격순--> " + price);


// -1  i+1

a[0] = 10;
a[1] = 9;
let tmp = a[0];
a[0] = a[1];
a[1] = tmp;



