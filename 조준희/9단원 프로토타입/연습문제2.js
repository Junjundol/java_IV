function Rectangle(){
    this._width = null;
    this._height = null;
};

Rectangle.prototype = {
    get width () {
        return this._width;
    },
    set width(pr) {
        this._width = pr;
    },
    get height() {
        return this._height;
    },
    set height(pr) {
        this._height = pr;
    },
    getAround(){
        return this.width * 2 + this.height * 2;
    },
    getArea(){
        return this.width * this.height;
    }
};

const rec = new Rectangle();
rec.width = 10;
rec.height = 5;

console.log("둘레의 길이는 %d이고 넓이는 %d 입니다.", rec.getAround(), rec.getArea());