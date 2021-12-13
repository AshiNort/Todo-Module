import  express  from "express";
import router from './api/routes/todoRoute.js';
import  mongoose  from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const db = process.env.DB_URL;


mongoose.connect(db,
    {useNewUrlParser:true,useUnifiedTopology:true})
    .then(() =>{console.log('databaseis running live')})
const port = 3000;2


app.use(express.json())
app.use('/tools',router)

app.listen(port,() => {
    console.log(`listening at port ${port}`);
})


