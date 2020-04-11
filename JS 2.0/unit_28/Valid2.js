class Valid2 extends Valid {
    constructor(email, password, isValid, emailError, passwordError) {
        super(email, password, isValid);
        this.emailError = emailError;
        this.passwordError = passwordError;
    }
    validate() {
        let email = this.email,
            passwordLength = this.password.length;
        if (passwordLength > 6 && email !== '') {
            this.isValid = true;
        } else if (email === '') {
            this.isValid = false;
            this.emailError = 'email empty';
        } else if (passwordLength < 6) {
            this.isValid = false;
            this.passwordError = 'min length 6';
        }
    }
}