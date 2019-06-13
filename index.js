const express = require('express')
const app = express()
const port = 4200
const data = require('./data');

app.get('/test-case-1', (req, res) => res.json(data.input1))
app.get('/test-case-2', (req, res) => res.json(data.input2))
app.get('/test-case-3', (req, res) => res.json(data.input3))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))