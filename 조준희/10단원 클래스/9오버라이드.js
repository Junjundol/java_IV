class Terran {
    #name;
    #hp;
    #dps;

    // 모든 객체가 갖는 명사적 특성들을 멤버면수로 정의
    constructor(name, hp, dps) {
        this.#name = name;
        this.#hp = hp;
        this.#dps = dps;
        console.log("[%s] 체력: %d, 공격력: %d", this.name, this.hp, this.dps);
    }

    get name(){
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get hp() {
        return this.#hp;
    }

    set hp(value) {
        this.#hp = value;

    }

    get dps() {
        return this.#dps;
    }

    set dps(value){
        this.#dps = value;
    }

    // 객체가 수행해야 하는 동작들을 함수 형태로 정의
    move(position){
        console.log(this.name + "(이)가 " + position + "까지 이동합니다.");
    }

    attack(target){
        console.log(this.name + "(이)가 " + target + "(을)를 공격합니다. 데미지: " + this.dps);
    }
}

class Marine extends Terran{
    //attack 메서드 override
    attack(target){
        console.log(this.name + "(이)가" + target + "에게 사격을 개시합니다. 데미지: " + this.dps);
    }
}

class Tank extends Terran{
    //attack 메서드 override
    attack(target) {
        super.attack(target);
        console.log('>>>>> 탱크 포격');
    }
}

class Firebat extends Terran {
    // 생성자 override
    constructor(name) {
        super(name, 500, 50);
    }
}

const m = new Marine("해병", 120, 30);
// 자식 클래스에 의해 재정의된 기능 호출 --> 부모의 메서드는 가려진다.
m.attack("질럿");

const t = new Tank('탱크1', 120, 30);
t.attack('드라군');


const f = new Firebat('화염방사병');
f.attack("적");






// 생성자 재정의
// 상속시 부모생성자는 무조건 호출되어야 한다.Marine단, 자식 class가 오버라이드를 통해 부모 생정자 호출 과정을 중간에서 대행하면서 파라미터를 간소화 시킬 수 있다.``