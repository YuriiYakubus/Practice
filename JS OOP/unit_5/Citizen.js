class Citizen extends User {
    constructor(bad_iin) {
        super();
        this.bad_iin = bad_iin;
    }
    set bad_iin(value) {
        for (let i = 0; i < this.bad_iin; i++) {
            if (value = this.bad_iin[i]) {
                return false;
            }
        }
    }
}