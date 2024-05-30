export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') throw TypeError('Length must be a number');
    if (students.constructor !== Array && students.every((student) => typeof student !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get student() {
    return this._students;
  }

  set name(nuevoName) {
    if (typeof nuevoName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = nuevoName;
  }

  set length(nuevoLength) {
    if (typeof nuevoLength !== 'number') throw TypeError('Length must be a number');
    this._length = nuevoLength;
  }

  set students(nuevoStudents) {
    if (nuevoStudents.constructor !== Array && nuevoStudents.every((student) => typeof student !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = nuevoStudents;
  }
}
