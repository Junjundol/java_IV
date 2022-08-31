class Mylist {
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
        this.#data[this.#size] = item;
        this.#size ++;
    }

    pop() {
        const last = new this.#data[this.#size - 1];

        const temp = new Array(this.#size);
        for(let i=0; i<this.#size; i++){
            this.#data[i] = temp[i];
        }

        this.#data = new Array(this.#size-1);
        for(let i =0; i<this.#size; i++){
            this.#data[i] = temp[i];
        }

        this.#size--;

        return last;
    }
}