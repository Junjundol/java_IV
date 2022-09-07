import { BadRequestException} from './1ExceptionHelper.js';

class RegexHelper {
    static #current = null;

    static getInstance() {
        if (RegexHelper.#current === null) {
            RegexHelper.#current = new RegexHelper();
        }

        return RegexHelper.#current;
    }

    /**
     * 값의 존재여부를 검사한다.
     * @param {string} content 검사할 값
     * @param {string} msg     값이 없을 경우 표시할 메시지 내용
     */
    value(content, msg) {
        if (content === undefined || content == null ||
            (typeof content == 'string' && content.trim().length === 0)) {
                throw new BadRequestException(msg);
        }
        return true;
    }

    /**
     *  입력값이 지정된 글자수를 초과했는지 검사한다.
     * @param {string} content   검사할 값
     * @param {int} len          최대 글자수
     * @param {string} msg       값이 없을 경우 표시될 메시지
     */

    maxLength(content, len, msg) {
        if (!this.value(constent) || content.length > len) {
            throw new BadRequestException(msg);
        }

        return true;
    }

    
    /** 두 값이 동일한지 검사한다.
     * @param {String} origin     원본
     * @param {String} compare    검사대상
     * @param {String} msg        검사에 실패할 경우 표시할 메시지
     */

    compareTo(origin, compare, msg) {
        var src = origin.trim();  //원본값을 가져온다.
        var dcs = compare.trim(); // 비교할 값을 가져온다.

        if (src != dcs) {
            throw new BadRequestException(msg);
        }

        return true; //성공했을때 리턴
    }

    /**
     * 입력값이 정규 표현식을 충족하는지 검사한다.
     * @param {string} content    입력내용
     * @param {string} msg        표시할 메시지
     * @param {object} regexExpr  검사할 정규표현식
     */

    field(content, msg, regexExpr) {
        const src = typeof content == 'string' ? content.trim() : content;

        //입력값이 없거나 입력값에 대한 정규표현식 검사가 실패라면?
        if(!src || !regexExpr.test(src)) {
            throw new BadRequestException(msg);
        }

        return true;
    }


    /**
     * 숫자로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
     * @param {string} content       입력내용
     * @param {string} msg           표시할 메시지
     */

    num(content, msg) {
        return this.field(content, msg, /^[0-9]*$/);
    }


    /**
     * 영문으로만 이루어 졌는지 검사하기 위해 field()값을 간접적으로 호출한다.
     * @param {string} content       입력내용
     * @param {string} msg           표시할 메시지
     */

    eng(content, msg) {
        return this.field(content, msg, /^[a-zA-Z]*$/);
    }


    /**
     * 한글로만 이루어 졌는지 검사하기 위해 field()값을 간접적으로 호출한다.
     * @param {string} content       입력내용
     * @param {string} msg           표시할 메시지
     */

    kor(content, msg) {
        return this.field(content, msg, /^[ㄱ-ㅎ가-힣]*$/);
    }


    /**
     * 영문과 숫자로 이루어 졌는지 검사하기 위해 field()값을 간접적으로 호출한다.
     * @param {string} content       입력내용
     * @param {string} msg           표시할 메시지
     */

    engNum(content, msg) {
        return this.field(content, msg, /^[a-zA-Z0-9]*$/);
    }

    /**
     * 한글과 숫자로만 이루어 졌는지 검사하기 위해 field()값을 간접적으로 호출한다.
     * @param {string} content       입력내용
     * @param {string} msg           표시할 메시지
     */

    KorNum(content, msg) {
        return this.field(content, msg, /^[ㄱ-ㅎ가-힣0-9]*$/);
    }


    /**
     * 이메일주소 형식인지 검사하기 위해 field()값을 간접적으로 호출한다.
     * @param {string} content       입력내용
     * @param {string} msg           표시할 메시지
     */

    email(content, msg) {
        return this.field(content, msg, /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i);
    }


    /**
     * 핸드폰 번호 형식인지 검사하기 위해 field()값을 간접적으로 호출한다.
     * @param {string} content       입력내용
     * @param {string} msg           표시할 메시지
     */

    cellphone(content, msg) {
        return this.field(content, msg, /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/);
    }



    /**
     * 집전화 형식인지 검사하기 위해 field()값을 간접적으로 호출한다.
     * @param {string} content       입력내용
     * @param {string} msg           표시할 메시지
     */

    tellphone(content, msg) {
        return this.field(content, msg, /^\d{2,3}\d{3,4}\d{4}$/);
    }



        /**
     * 핸드폰번호 형식과 집전화 번호 형식 둘중 하나를 충족하는지 검사.
     * @param {string} content       입력내용
     * @param {string} msg           표시할 메시지
     */

    phone(content, msg) {
        var check1 = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
        var check2 = /^\d{2,3}\d{3,4}\d{4}$/;

        var src = content.trim(); // 입력값을 가져온다

        //입력값이 없거나,    핸드폰 형식도 아니고,  집전화형식도 아니라면???
        if (!src || (!check1.test(src) && !check2.test(src))) {
            throw new BadRequestException(msg);
        }

        return true;  // 성공했을 때 리턴
    }
}
export default RegexHelper;