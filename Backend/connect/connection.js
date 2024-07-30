import mysql from 'mysql2';

const db=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hamrosadhan',
})

db.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("connected to database")
    }
})
export default db;