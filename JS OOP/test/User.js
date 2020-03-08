class User {
    constructor(userName, passWord) {
        this.userName = userName;
        this.passWord = passWord;
    }
    validatePassword() {
        if (this.passWord.length < 6) {
            return false;
        } else {
            return true;
        }
    }
}