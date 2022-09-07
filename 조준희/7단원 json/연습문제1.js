const blood = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O'];

let result = {"A" : 0, "B" : 0, "AB" : 0, "O" : 0};

for (const k of blood) {
    if (k =='A') {
        result.A++;
    } else if (k == 'B') {
        result.B++;
    } else if (k == 'O') {
        result.O++;
    } else {
        result.AB++;
}
}
console.log(result);

// for (const k of blood) {
//     result[k]++;
// }
// console.log(result);