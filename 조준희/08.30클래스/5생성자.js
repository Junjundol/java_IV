class Monster {
    name;
    speed;
    dps;

    constructor(name, speed, dps){
        this.name = name;
        this.speed = speed;
        this.dps = dps;
        console.log(`>>> 생성자를 통한 ${this.name} 객체 초기화 완료 speed=${this.speed}, dps=${dps}`);
    }

    move(where) {
        console.log(`${this.name}이가 ${where}로 ${this.speed}의 속력으로 이동합니다.}`);
    }

    attack(tg){
        console.log(`${this.name}이가 ${tg}에게 ${this.dps}의 데미지를 입힙니다.`);
    }
}

//단일 객체 사용
const marin = new Monster("따발총", 5, 10);
marin.move("던전");
marin.attack("준수");

//객체 배열 사용
const team = [
    new Monster("준솔", 15, 20),
    new Monster("중길", 20, 5),
    new Monster("영준", 18,9)
];

for (const t of team) {
    t.move("던전");
    t.attack("보스");
}