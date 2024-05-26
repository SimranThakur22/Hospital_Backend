const express=require("express");
const mysql=require("mysql2");
const config=require("./config.js");
const {body,validationResult}=require("express-validator");
const path = require('path');
const bodyParser = require('body-parser');
const multer=require("multer");
const fs = require('fs');
const port=4000;

const app=express();
app.use(express.json());
app.use(bodyParser.json());


    const connection= mysql.createConnection(config.db);
    connection.connect((err)=>{
        if(err){
          console.error('Error connecting to the database: ' + err.stack);
          return;
        }
        else{
            console.log('Connected to the database ');

        }
        })

//CREATING API FOR FETCHING HOSPITAL DETAILS
app.get("/psychiatristdetails",(req,res)=>{
    if(!req.query.id|| req.query.id>4){
       return res.status(404).json({
            message:"Bad Request"
        })
    }
const hospitalid=req.query.id;
connection.query(`SELECT 
hospital_data.name AS hospital_name,
JSON_LENGTH(hospital_data.psychiatrist_details) AS psychiatrist_count, 
count(patient.patient_id) as patients_count,
JSON_EXTRACT(psychiatrist_details,'$') as Psychiatrist_Details FROM hospital_data 
    join patient on patient.hospital_id=hospital_data.id
    WHERE 
    id = ${hospitalid} limit 1`
,(error,result)=>{
    if(error){
        console.error("Error in fetching data");
       return res.status(500).json({
            error:"Failed to fetch details"
        })
    }
    res.status(200).json({
        data:result
    })
})
})
const validateEmailAndPassword=(req,res,next)=>{
    body('email').isEmail(),
    body('password').isLength({min: 8 ,max:15}).withMessage('Password must be between 8 and 15 characters long.')
    .matches(/[A-Z]/).withMessage('Password must have at least one uppercase letter.')
    .matches(/[a-z]/).withMessage('Password must have at least one lowercase letter.'),
    body('address').isLength({min:10}).withMessage('Address should be at least 10 characters.')
    next();
}

//Creating API FOR POSTING PATIENT DEATILS DATA ASSUMING HOSPITAL ID AND PSYCHIATRIST ID IS GIVEN IN REQUEST QUERY

const storage=multer.diskStorage({
    destination:"./upload/images",
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);// this will rename the image with a new name and that image will be stored in the images folder
    }
})
const upload=multer({storage:storage});
app.use("/images",express.static('upload/images'));// images will be mounted on the /images endpoint



app.post("/patientdetails",upload.single('patient'),validateEmailAndPassword,(req,res)=>{
    try{
  const error=validationResult(req);// if error is present this will return an error array
  if(!error.isEmpty()){
    return res.status(400).json({
        error:error.errors
    })
  }
  const phoneRegex = /^\+91 \d{10}$/;// phone number validation
  const data = JSON.parse(req.body.data);
  const isValid=phoneRegex.test(data.phone);
  if(!isValid){
    return res.status(400).json({
        error:"Invalid Phone Number"
    })
  }

  if (!req.file) {
    return res.status(400).json({
        error: "No file uploaded"
    });
}
const image_url = `http://localhost:4000/images/${req.file.filename}`;

if(!req.query.hospital_id){
    return res.status(404).json({
        message:"Invalid request"
    })
}
const sql = `INSERT INTO patient 
(name, address, email, phone_number, password, photo_url, hospital_id) 
VALUES (?, ?, ?, ?, ?, ?, ?)`;

const values = [
data.name,
data.address,
data.email,
data.phone,
data.password,
image_url,
req.query.hospital_id
];

 connection.query(sql,values,(err,result)=>{
  if(err){
    console.log(err);
   return res.status(400).json({
        message:"Data insertion operation unsuccessful"
    })
  }
    console.log("patient data insertion successful");
    connection.query(``)
 })

  res.status(201).json({
    data:{
  status:"data inserted successfully"
    }
  })
}catch(errr){
    res.status(400).json({
        message:"Invalid Request"
    })
}
})
app.listen(port,()=>{
console.log(`server is listening to port ${port}`);
})