class MyList {
    #data;
    #size;

    constructor() {
        this.#data = [];
        this.#size = 0;
    }

    get data() {
        return this.#data;
    }

    get size() {
        return this.#size;
    }

    push(item) {
        // 파라미터로 전달된 값을 배열의 맨 뒤에 추가하고 size의 값을 1 증가
        this.#data[this.#size++] = item;
    }

    pop() {
        // 배열의 마지막 원소를 꺼낸다.
        const last = this.#data[this.#size-1];

        // data는 임시 변수에 깊은 복사
        const temp = new Array(this.#size);
        for (let i=0; i<this.#size; i++) {
            temp[i] = this.#data[i];
        }

        // 깊은 복사 처리된 임시 변수의 원소 중에서 마지막 원소를 제외한 상태로 다시 data에 깊은 복사
        this.#data = new Array(this.#size-1);
        for (let i=0; i<this.#size-1; i++) {
            this.#data[i] = temp[i];
        }

        // 배열의 크기를 1 축소
        this.#size--;

        // 마지막 원소 리턴
        return last;
    }
}

const list = new MyList();

list.push(100);
list.push(200);
list.push(300);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);

const x = list.pop();
console.log('추출된 데이터: %d', x);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);

list.push(400);
list.push(500);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);

const y = list.pop();
console.log('추출된 데이터: %d', y);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);

list.push(600);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);

const z = list.pop();
console.log('추출된 데이터: %d', z);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);