class MegaCitizen extends Citizen {
    constructor(errors, bad_iin) {
        super(bad_iin);
        this.errors = errors;
    }
    set bad_iin(value) {
        if (value.length !== 8) {
            return {
                'result': false,
                'err': this.errors[ERR_IIN_LENGTH]
            }
        }
    }
}