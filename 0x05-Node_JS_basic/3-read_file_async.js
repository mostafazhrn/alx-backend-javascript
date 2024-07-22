const fs = require('fs');

function countStudents(path) {
  const promise = (res, rej) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        rej(new Error('Cannot load the database'));
        return;
      }
      const donne = data.split('\n');
      console.log(`Number of students: ${donne.length - 1}`);
      const sujs = {};
      for (const row of donne) {
        const student = row.split(',');
        if (!sujs[student[3]]) sujs[student[3]] = [];
        sujs[student[3]].push(student[0]);
      }
      for (const suj in sujs) {
        if (suj) console.log(`Number of students in ${suj}: ${sujs[suj].length}. List: ${sujs[suj].join(', ')}`);
      }
      res();
    });
  }
  return new Promise(promise);
}
module.exports = countStudents;
