const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') res.write('Hello Holberton School!');
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const donne = await countStudents(process.argv[2]);
      res.end(`${donne.join('\n')}`);
    } catch (err) {
      res.end(err.message);
    }
  }
  res.end();
});
app.listen(1245);
module.exports = app;
