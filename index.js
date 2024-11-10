const express = require('express');
const app=express();
app.use(express.json());
const productController = require('./controllers/productController');
const employeeController = require('./controllers/employeeController');
app.get('/',(req,res)=>{
  res.send("Home Page");
})
app.use('/products', productController);
app.use('/employees', employeeController);

const PORT=3000;
app.listen(PORT, ()=>{
  console.log(`Server running on http://localhost:${PORT}`);
});
