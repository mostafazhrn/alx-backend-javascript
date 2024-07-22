const fs = require('fs');

function countStudents(path) {
  const promise = (res, rej) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        rej(new Error('Cannot load the database'));
        return;
      }
      const msgs = [];
      let ms;
      const cont = data.toString().split('\n');
      let studs = cont.filter((item) => item);
      studs = studs.map((item) => item.split(','));
      const nStuds = studs.length ? studs.length - 1 : 0;
      ms = `Number of students: ${nStuds}`;
      console.log(ms);
      msgs.push(ms);
      const sujs = {};
      for (const x in studs) {
        if (x !== 0) {
          if (!sujs[studs[x][3]]) sujs[studs[x][3]] = [];
          sujs[studs[x][3]].push(studs[x][0]);
        }
      }
      delete sujs.subject;
      for (const cle of Object.keys(sujs)) {
        ms = `Number of students in ${cle}: ${
          sujs[cle].length
        }. List: ${sujs[cle].join(', ')}`;
        console.log(ms);
        msgs.push(ms);
        }
        res(msgs);
    });
  };
  return new Promise(promise);
}
module.exports = countStudents;
