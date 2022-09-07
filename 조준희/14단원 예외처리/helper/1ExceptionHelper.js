/** */




class BadRequestException extends Error {
    //HTTP 상태코드를 의하는 멤버변수
    #satatusCode;

    constructor(msg = '잘못된 요청 입니다.'){
        super(msg);
        super.name = 'BadRequestException';
        this.#satatusCode =400;
    }

    get StatusCode() {
        return this.#satatusCode;
    }
}

export { BadRequestException};