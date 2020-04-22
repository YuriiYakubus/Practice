class Validate {
    constructor(a) {
        this.a = a;
    }
    static isValidate(elem) {
        if (typeof elem === 'number') {
            return true;
        } else {
            return false;
        }
    }
    static isInt(elem) {
        if (Number.isInteger(elem)) {
            return true;
        } else {
            return false;
        }
    }
    static isFloat(elem) {
        if (Number(elem) === elem && elem % 1 !== 0) {
            return true;
        } else if (Number.isInteger(elem)) {
            return false;
        }
    }
    static isChar(elem) {
        if (elem.length === 1) {
            return true;
        } else {
            return false;
        }
    }

    static isString(elem) {
        if (typeof elem === 'string') {
            return true;
        } else {
            return false;
        }
    }
    static isBoolean(elem) {
        if (typeof elem === 'boolean') {
            return true;
        } else {
            return false;
        }
    }
    static isArray(elem) {
        if (Array.isArray(elem)) {
            return true;
        } else {
            return false;
        }
    }
    static toMoney(elem) {
        let str = elem.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        return str + '.00';
    }
}