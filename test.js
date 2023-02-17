class Car {
    _maker;
    _model;
    _year;

    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;   
    }

    getMaker() {
        return this._maker;
    }

    getModel() {
        return this._model;

    }
    getYear() {
        return this._year;
    }

    toString() {
        return `${this._maker} ${this._model} ${this._year}`;
    }

}