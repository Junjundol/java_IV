let peterage = 25;

function whatShouldICallYou(age,gender){
    if(age == peterage){
        return "친구";
}   else if(age < peterage){
        return gender == "남성" ? "남동생" : "여동생";
}   else {
        return gender == "남성" ? "형"     : "누나";
}
}

console.log(whatShouldICallYou(25,"남성"));
console.log(whatShouldICallYou(25,"여성"));
console.log(whatShouldICallYou(26,"남성"));
console.log(whatShouldICallYou(26,"여성"));
console.log(whatShouldICallYou(24,"남성"));
console.log(whatShouldICallYou(24,"여성"));