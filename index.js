const express = require('express');

const port = 3001;
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/route', (req, res) => res.send('Good bye World'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))