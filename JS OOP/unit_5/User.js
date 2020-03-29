class User {
    set name(name) {
        if (name.length > 3) {
            this._name = name.trim().toLowerCase();
            return this._name;
        } else {
            return false;
        }
    }
    get name() {
        return this._name;
    }
    set iin(iin) {
        if (iin.length === 8 && iin.indexOf('o') === -1) {
            this._iin = iin.toLowerCase();
            return this._iin;
        } else {
            return false;
        }
    }
    get iin() {
        return this._iin;
    }
}