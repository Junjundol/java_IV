// prototype 을 활용한 메서드 정의
const User3 = function(id, email) {
    this._id = id;
    this._email = email;
    
};

//로그인을 수행 하는 메서드
User.prototype.login = function() {
    console.log("로그인 되었씁니다. -> id" + this._id + ",  email =" + this._email);
};

//로그아웃을 수행하는 메서드
User3.prototype.logout = function() {
    console.log("로그아웃 되었습니다. -> id=" + ", email= " + this._email);
};

//객체생성하기
const student = new User3('학생', 'stud@gamil.com');

//객체 안에 내장된 메서드 호출하기
student.login();
student.logout();


//객체 생성하기
const teacher = New User3 ('강사', 'teac@gamil.com');

//객체 안에 내장된 메서드 호출하기
teacher.login();
teacher.logout();

//객체가 갖는 멤버변수 수정하기
teacher._id = '선생님';
teacher._email = 'teacher@naver.com';
teacher.login();
teacher.logout();