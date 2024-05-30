export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(nuevoBrand) {
    this._brand = nuevoBrand;
  }

  get motor() {
    return this._motor;
  }

  set motor(nuevoMotor) {
    this._motor = nuevoMotor;
  }

  get color() {
    return this._color;
  }

  set color(nuevoColor) {
    this._color = nuevoColor;
  }

  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
