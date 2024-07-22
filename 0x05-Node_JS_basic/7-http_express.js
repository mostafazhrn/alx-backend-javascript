const express = require('express');

const args = process.argv.slice(2);
const countStudents = require('./3-read_file_async');

const DATABASE = args[0]

const app = express();
const port = 1245;

app.get('/', (req, res) => res.send('Hello Holberton School!'));

app.get('/students', async (req, res) => {
  const message = 'This is the list of our students\n';
  // continue the code here below
  try {
    const donne = await countStudents(DATABASE);
    res.send(`${message}${donne.join('\n')}`);
  } catch (err) {
    res.send(`${message}${err.message}`);
  }
});

app.listen(port, () => { });
module.exports = app;
