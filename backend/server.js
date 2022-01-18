require("dotenv").config();
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");
const bcrypt = require("bcrypt");
const User = require("./models/UserSchema");
const stripe = require("stripe")("sk_test_51KACgtSGs8lWX3upaAnXv9WuXpC1X7iHIEDuUZZp2y08KXmO5MX3FvlsJghxl0OXTr81QPrVVw9qiOZNtE9pzhDj00loaP5KmI")
const jwt = require('jsonwebtoken');
const cors =require("cors");

//database

connectDB();

//initializing APP
const app = express();

//Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});

app.use("/api/products", productRoutes);

//Register

app.post('/register', async (req, res)=>{
  const {name, email,  password1, cpassword} = req.body;
  
  if(!name || !email  || !password1 || !cpassword){
    return res.status(422).json({error: "Please fill the field properly"});
  }
  try{
     const userexist = await User.findOne({email: email})
  
     if(userexist)
      {
        return res.status(422).json({error: "Email already exist"});
      }
      const user = new User({ name, email , password1, cpassword });
  
      const userRegister = await user.save();
  
      if(userRegister){
        res.status(201).json({message:"user registered"})
      }
    }
   
  catch(err){
    console.log(err);
  }
  
     
  })

  //Login
  app.post("/signin",async (req, res) => {

    try{
      let token;
        const {email , password1} = req.body;
        if(!email || !password1 ) {
          return res.status(400).json({error:"please fill the field"})
        }
          const userlogin = await User.findOne({ email : email });
          
          
          if(userlogin){
                const isMatch = await bcrypt.compare(password1, userlogin.password1);
                
                token =  await userlogin.generateAuthToken(); 
                  
                console.log(token);
  
                res.cookie("jwtoken", token,{
                  expires: new Date(Date.now() + 25892000000),
                  httpOnly:true
                })
  
                
                if(!isMatch){
                      res.status(400).json ({error: "Invalid credentials"});
              } else{
                      res.json({message:"user signin successfully"});
              } 
                  
          }
          else {
                res.status(400).json ({error: "Invalid credentials"});
          }
    
    
      }
    catch(err){
        console.log()
        
    }
  
  })

  //Payment

  app.post("/payment", async (req, res) => {
    // Getting Product details and token from the client side
    const { product, token, price } = req.body;
  
    console.log(`Payment of ${price} is successfully Completed !!!` );
    
  
    return stripe.customers.create({
      email: token.email,
      source: token.id
    }).then((customer) => {
  
      stripe.charges.create({
        amount: product.price * 100 ,
        currency: "INR",
        customer: customer.id,
        receipt_email: token.email,
        description: `purchase of product.name`,
          shipping:{
            name:token.card.name,
            address:{
              country:token.card.address_country
            }
          }
      })
    })
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err))

   
  
  })


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
