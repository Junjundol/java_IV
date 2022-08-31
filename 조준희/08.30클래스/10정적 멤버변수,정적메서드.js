class Customer {
    #name;

    //모든 객체가 공유하는 정적 멤버변수를 정의
    static count = 0;

    constructor(name) {
        this.#name = name;
        
    }
    
    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    //정적 멤버변수에 대한 관리를 위해서 함수 정의
    in(){
        Customer.count++;
    }

    out() {
        Customer.count--;
    }

    showState(){
        console.log(`손님의 이름: ${this.name}, 전체 손님 수: ${Customer.count}`);
    }
}

console.group("손님1");
const c1 = new Customer("손님1");
c1.in();
c1.showState();

console.group("손님2");
const c2 = new Customer("손님2");
c2.in();
c1.showState();
c2.showState();

console.group("손님3");
const c3 = new Customer("손님3");
c1.in();

c1.showState();
c2.showState();
c3.showState();

console.group("손님2,3 out");
c3.out();
c2.out();
c1.showState();
c2.showState();
c3.showState();