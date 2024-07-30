import express from 'express';
import routeByMe from './routes/home.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
const port=process.env.PORT;
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({
    origin:' http://localhost:5173',
    allowedHeaders:['Content-Type','Authorization'],
    credentials:true,
    methods:['GET', 'POST']

}));

app.use('/',routeByMe);

app.listen(port,(error)=>{
    if(error){
        console.log(error);
    }
    console.log(`listening on port:${port}`)
}
);