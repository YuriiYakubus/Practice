class Student extends User {
    constructor(userName, passWord, nickName) {
        super(userName, passWord);
        this.nickName = nickName;
    }
    getStudentCourses() {
        return [1, 2, 3,];
    }
    validatePassword() {
        if (this.passWord.length < 10) {
            return false;
        } else {
            return true;
        }
    }
}