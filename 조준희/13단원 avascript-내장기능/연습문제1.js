// const email = "cth1032@naver.com";
// const substring1 = email.substring(0, 7);
// const substring2 = email.substring(8,17);
// console.log(substring1);
// console.log(substring2);

const email = "cth1032@naver.com";
p = email.indexOf("@");
id = email.substring(0, p);
domain = email.substring(p + 1);

console.log(id);
console.log(domain);

k = email.split("@");
k[0] = email;
k[1] = domain;
console.log(k[0]);
console.log(k[1]);