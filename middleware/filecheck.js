



export const fileCheck = (req, res, next) => {

  const file = req.files?.image;

  file.mv(`./uploads/Mern.png`, (err) => {
    console.log(err);
  })

  next();

}





// export const fileCheck = (req, res, next) => {

//   const file = req.files?.image;

//   file.mv(`./uploads/Mern.png`, (err) => {
//     console.log(err);
//   })

//   next();

// }




// export const somware = (req, res, next) => {
//   console.log(req.body);

//   if (req.body.email) {
//     return next();
//   }
//   return res.status(400).json({ message: "file not found" });

// }