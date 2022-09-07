const covid19 = [
    {date: '0125', active: 426}, 
    {date: '0126', active: 343}, 
    {date: '0127', active: 547}, 
    {date: '0128', active: 490}, 
    {date: '0129', active: 460}, 
    {date: '0130', active: 443}, 
    {date: '0131', active: 338}, 
    {date: '0201', active: 299}
   ]


let sum = 0;
   for (let c in covid) {
    sum += c.active;

   }
avg =  sum / covid.length;

console.log("누적 확진자 수: %d", sum);
console.log("평균 확진자 수: %d", sum / covid.length);
