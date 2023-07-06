import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser'
import Service from './Service';
require('dotenv').config()

const app = express();
const port = process.env.PORT;


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use('/api/',Service())

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});