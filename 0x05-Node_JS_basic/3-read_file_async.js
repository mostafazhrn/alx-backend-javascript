const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf8', flag: 'r' },
      (err, data) => {
        // continue the code below
        if (err) {
          reject(new Error('Cannot load the database'));
          return;
        }
        const respo = [];
        let mesage;
        const conte = data.split('\n');

        let students = conte.filter((item) => item.length);
        students = students.map((item) => item.split(','));
        const szStudents = students.length ? students.length - 1 : 0;
        mesage = `Number of students: ${szStudents}`;
        console.log(mesage);

        respo.push(mesage);
        const fields = {};
        for (const x in students) {
          if (x !== 0) {
            if (!fields[students[x][3]]) fields[students[x][3]] = [];
            fields[students[x][3]].push(students[x][0]);
          }
        }
        delete fields.field;
        for (const cle of Object.keys(fields)) {
          mesage = `Number of students in ${cle}: ${fields[cle].length}. List: ${fields[cle].join(', ')}`;
          console.log(mesage);
          respo.push(mesage);
        }
        resolve(respo);
      });
  });
}
