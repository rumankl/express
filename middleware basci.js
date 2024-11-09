// // console.log("hello");




// import crypto from 'crypto'

// const time= Date.now();
// // console.log(time);
// crypto.pbkdf2('password','salt',100000,512,'sha512',(err,derivedkey)=>{
//     // console.log(derivedkey);
//     console.log('hash:',Date.now()-time);
// });
// crypto.pbkdf2('password','salt',100000,512,'sha512',(err,derivedkey)=>{
//     // console.log(derivedkey);
//     console.log('hash:',Date.now()-time);
// });
// crypto.pbkdf2('password','salt',100000,512,'sha512',(err,derivedkey)=>{
//     // console.log(derivedkey);
//     console.log('hash:',Date.now()-time);
// });
// crypto.pbkdf2('password','salt',100000,512,'sha512',(err,derivedkey)=>{
//     // console.log(derivedkey);
//     console.log('hash:',Date.now()-time);
// });
// crypto.pbkdf2('password','salt',100000,512,'sha512',(err,derivedkey)=>{
//     // console.log(derivedkey);
//     console.log('hash:',Date.now()-time);
// });
// crypto.pbkdf2('password','salt',100000,512,'sha512',(err,derivedkey)=>{
//     // console.log(derivedkey);
//     console.log('hash:',Date.now()-time);
// });
// crypto.pbkdf2('password','salt',100000,512,'sha512',(err,derivedkey)=>{
//     // console.log(derivedkey);
//     console.log('hash:',Date.now()-time);
// });
// crypto.pbkdf2('password','salt',100000,512,'sha512',(err,derivedkey)=>{
//     // console.log(derivedkey);
//     console.log('hash:',Date.now()-time);
// });



 //////import and export//////////////////


//  import path from'path'
//  const as ='sbc.jpg'
//  console.log(path.extname(as))

//  import fs from 'fs';
//  import path from 'path';
 
 
 
//  fs.readFile('./d.json', 'utf-8', (err, data) => {
//    console.log(data);
//  });
 
//   const g = fs.existsSync('./d.json');
//  console.log(g);

 
//   fs.mkdir('./uploads', (err) => {
 
//   }); // folder make
//   fs.writeFile('./sample.txt','abc abc abc abc abc',()=>{

//   })///write sample.txt text
 
//  fs.unlink('./sample.txt', (err) => {
 
//   })///file delect
 
//   fs.rmdir('./uploads', (err) => {
//     console.log(err);
 
//   }) //folder delect of upload
// index.js
// import { a } from './data.js';  // This works because 'a' is exported from data.js
// console.log(a);



{/*
import express from'express';
const port =5000;
const app =express();
const data = [
    {
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "qui sunt rem eveniet architecto"
    },
    {
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolore"
    }
  ]

 
app.get('/',(req,res)=>{
return res.status(200).json(data)

})
 
app.listen(port,()=>{
 console.log('listening')
});
*/}

//testing ko lagi postman use gara

import express from "express";
const port = 5000;
const app = express();

const data = [
    {

        "name": "rulokifs",
        "contact": 9842263522,
        "address": "bhatapur"
    },
    {
        "name": "kifs",
        "contact": 9842424242,
        "address": "lalitpur"
    }
];

app.use(express.json());
app.get('/', (req, res) => {
   // console.log(req.query);
   console.log(req.body);
   // console.log(req.params);
  return res.status(200).json(data);
});

 ////contact ko matrai hai//////////////////////////////////
app.use((req,res,next)=>{
  const data = req.body
  if(data?.contact){
    console.log('hello jee');
    next();
  } else{

    return res.status(400).json({
       message:"provide contact"
    })
   
   } 
  }
);

app.get('/contacts', (req, res) => {
    // console.log(req.query);
    
    return res.status(200).json(data);
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

 
{/*
  import express from "express";

const port = 5000;

const app = express();



const data = [
  {
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "qui sunt rem eveniet architecto"
  },
  {
    "id": 2,
    "title": "qui est esse",
    "body": "<h1> hhello </h1>"
  }
]



app.use(express.json());
app.get('/', (req, res) => {
  // console.log(req.query);
  console.log(req.body);
  // console.log(req.params);
  return res.status(200).json(data);
});


// app.use((req, res, next) => {
//   const data = req.body;
//   if (data?.contact) {
//     console.log('hello jee');
//     next();
//   } else {
//     return res.status(400).json({
//       message: 'please provide contact'
//     });
//   }

// });

app.get('/contacts', (req, res) => {
  console.log(req.body);
  return res.status(200).json(data);
});





app.listen(port, () => {
  console.log('listening');
});
  */}