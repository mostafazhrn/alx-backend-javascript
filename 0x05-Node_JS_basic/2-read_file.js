const fs = require('fs');

const countStudents = (path) => {
  try{
    let data = fs.readFileSync(path, 'utf8').toString().split('\n');
    donne = data.slice(1, data.length - 1);
    console.log(`Number of students: ${donne.length}`);
    const sujs = {};
    for (const row of donne) {
      const student = row.split(',');
      if (!sujs[student[3]]) sujs[student[3]] = [];
      sujs[student[3]].push(student[0]);
    }
    for (const suj in sujs) {
      if (suj) console.log(`Number of students in ${suj}: ${sujs[suj].length}. List: ${sujs[suj].join(', ')}`); 
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};
module.exports = countStudents;
