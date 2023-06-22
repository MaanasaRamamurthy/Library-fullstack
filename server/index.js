import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import useRoutes from './routes/user.js'

const app = express()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace with your frontend URL
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});
app.use(cors());
app.options('*', cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', useRoutes)
require('dotenv').config();

// Access environment variables
const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL,{
    useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((e)=>console.log(e.message))
