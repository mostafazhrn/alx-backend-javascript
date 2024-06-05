interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Mo",
  lastName: "Salah",
  age: 20,
  location: "Egypt",
};

const student2: Student = {
  firstName: "mai",
  lastName: "Noor",
  age: 21,
  location: "Tunisia",
};

const studentList: Student[] = [student1, student2];
const table: HTMLTableElement = document.createElement("table");
document.body.appendChild(table);
studentList.forEach((student: Student): void => {
  const rw: HTMLTableRowElement = table.insertRow();
  const nw_rw_nom: HTMLTableCellElement = rw.insertCell();
  const nw_rw_nom2: HTMLTableCellElement = rw.insertCell();
  nw_rw_nom.innerHTML = student.firstName;
  nw_rw_nom2.innerHTML = student.lastName;
})
