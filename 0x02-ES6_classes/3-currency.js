export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(nuevoCode) {
    this._code = nuevoCode;
  }

  set name(nuevoName) {
    this._name = nuevoName;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
