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

    shift(){
        //이를 위해 data의 첫 번째 원소를 지역변수(혹은 상수)에 복사
        const first = this.#data[0];
        
        // 임시 변수를 data의 길이보다 1 작은 크기로 초기화 하고 data의 1번째 원소부터 나머지 원소들을 임시 변수에 깊은복사 처리
        const temp = new Array(this.#size-1);
         for (let i=0; i<this.#size-1; i++) {
            temp[i] = this.#data[i+1];      
        }

        //복사가 완료되면 data의 크기를 기존보다 1 작게 다시 초기화 하고 임시 변수의 항목들을 깊은 복사 처리
        this.#data = new Array(this.#size-1);
        for(let i=0; i<this.#size-1; i++) {
            this.#data[i] = temp[i];
        }
    unshift(item){
    
        }
    }
}






const list = new MyList();

list.push(100);
list.push(200);
list.push(300);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);

const x = list.shift();
console.log('추출된 데이터: %d', x);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);

list.push(400);
list.push(500);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);

const y = list.shift();
console.log('추출된 데이터: %d', y);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);

list.push(600);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);

const z = list.shift();
console.log('추출된 데이터: %d', z);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);

list.unshift(700);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);

list.unshift(800);
list.unshift(900);
console.log('원소의 수: %d, 데이터 확인: %s', list.size, list.data);




// 원소의 수: 3, 데이터 확인: [ 100, 200, 300 ]
// 추출된 데이터: 100
// 원소의 수: 2, 데이터 확인: [ 200, 300 ]
// 원소의 수: 4, 데이터 확인: [ 200, 300, 400, 500 ]
// 추출된 데이터: 200
// 원소의 수: 3, 데이터 확인: [ 300, 400, 500 ]
// 원소의 수: 4, 데이터 확인: [ 300, 400, 500, 600 ]
// 추출된 데이터: 300
// 원소의 수: 3, 데이터 확인: [ 400, 500, 600 ]
// 원소의 수: 4, 데이터 확인: [ 700, 400, 500, 600 ]
// 원소의 수: 6, 데이터 확인: [ 900, 800, 700, 400, 500, 600 ]
