function Account(owner,balance){
    this._owner = owner;
    this._balance = balance;
};

Account.prototype = {
    get owner() {
        return this._owner;
    },
    set owner(p) {
        this.owner = p;
    },
    get balance() {
        return this._balance;
    },
    set balance(p){
        this._balance = p;
    },

    disposit: function(amount) {
        this.balance += amount;
    },

    withdraw: function(amount){
        if(this.balance < amount){
            console.log("잔액이 부족합니다.");
        } else {
            this.balance -= amount;
        }
    }
}

const acc = new Account("Hello", 15000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);
acc.disposit(5000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);
acc.withdraw(15000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);
acc.disposit(5000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);
acc.withdraw(15000);
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);