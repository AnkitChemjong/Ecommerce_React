import { Router } from 'express';
import db from '../connect/connection.js';

const router = Router();
router.get('/',(req,res)=>{
    res.send("Welcome to home!");
})
router.post('/signin', (req, res) => {
  const sql = 'INSERT INTO signin (`fullName`, `email`, `number`, `password`) VALUES (?,?,?,?)';
  const values = [req.body.fullName, req.body.email, req.body.number, req.body.password];

  
  db.query(sql,values, (error, results) => {
    if (error) {
      console.error("Error creating new user:", error);
      res.status(500).json({ error: 'An error occurred while creating a new user' });
    } else {
      console.log("Created new user");
      res.status(201).json({ message: 'User created successfully' });
    }
  });
});

router.post('/login', (req, res) => {
  const sql = 'select * from signin where email=(?)';
  const password=[req.body.password];
  const email=[req.body.email];

  db.query(sql,email, (error, results) => {
    if (error) {
      console.error("Error finding user:", error);
      res.status(500).json({ success:false,error: 'An error occurred while finding user with email' });
    } else {
     const sql1="select * from signin where password=(?)";
     db.query(sql1,password,(error,result)=>{
      if(error){
        res.json({success:false,message:"wrong password"});
        console.log(error);
      }
      res.send(result);
     })
    }
  });
});

export default router;
