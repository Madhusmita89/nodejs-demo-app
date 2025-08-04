const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('CI/CD with Docker and GitHub Actions works!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
