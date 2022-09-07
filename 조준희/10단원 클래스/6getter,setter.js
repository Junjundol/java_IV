class UserClass {
    //은닉된 멤버변수
    #userNmae;
    #email;

    constructor(userName, email) {
        this.#userName = userName;
        this.#email = email;
    }

    // 멤버변수 #userName에 값을 할당하기 위한 setter 함수
    set userName(value) {
        if(!value) {
            console.log("userName을 입력하세요");
            return;
        }

        this.userName = value;
    }

    // 멤버변수 #userName 값을 반한하기 위한 getter 함수
    get userName() {
        return this.#userNmae;
    }

    // 멤버변수 #email에 값을 할당하기 위한 setter 함수
    set email(value) {
        if (!value) {
            console.log("email을 입력하세요");
        }

        this.#email = value;
    }

    //멤버변수 #email 값을 반환하기 위한 geter 함수
    get email() {
        return this.#email;
    }

    //일반적인 기능을 수행하기 위한 메서드
    login() {
        if(!this.userName || !this.useremail) {
            console.log("userName이나 email을 확인하세요");
            re
        }
    }
}