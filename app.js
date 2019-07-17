const { PORT } = process.env
const express = require('express')
const app = express()
//body-parser, morgan


const listener = () => console.log('You are doing a thing!')
app.listen(PORT, listener)