class Hi {
    message = null;

    sayHi(){
        console.log(this.message);
    }

    setEng() {
        this.message = "Hi javascript";
    }

    setKor() {
        this.message = "안녕하세요. 자바스크립트";
    }
}

const hiyo = new Hi();

hiyo.setEng();
hiyo.sayHi();

hiyo.setKor();
hiyo.sayHi();