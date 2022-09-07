let check_list = [true, false, true, false, true];
console.log("before " + check_list);

for (let i=0; i<check_list.length; i++) {
    check_list[i] = check_list[i] === true ? false : true;
}

console.log("after " + check_list)




// check_list[i] = !check_list[i];

// if (cl[i]) {
//     cl[i]= false;
// } else {
//     cl[i] = true;
// }