const express = require("express");
const bodyParse = require("body-parser");
const app = express();

app.set("view engine","ejs");
app.use(express.static("public"));

// Sample data (you can replace this with your actual data)
const products = [
    { id: 1, name: 'Product 1', price: 19.99, description: 'This is product 1' },
    { id: 2, name: 'Product 2', price: 29.99, description: 'This is product 2' },
    // Add more products as needed
  ];

// Sample data for delivery options and community guidelines
const deliveryOptions = [
    {
      option: 'In-Person Delivery',
      description: 'If you prefer, you can arrange to meet the buyer or seller in person for a local exchange.',
    },
    {
      option: 'Company Delivery',
      description: 'If in-person delivery is not feasible, we also provide delivery services through our trusted partner companies. They will ensure that your items are delivered securely and efficiently.',
    },
  ];
  
  const guidelines = [
    'No Illegal Items: Any form of illegal products or services, including but not limited to weapons, drugs, and stolen goods, is strictly prohibited.',
    'No Intoxicants: The sale or promotion of intoxicants, such as alcohol, tobacco, or recreational drugs, is not allowed.',
    'Be Respectful: Treat all users with respect and kindness. Harassment, hate speech, or any form of discrimination will not be tolerated.',
    'Honesty: Provide accurate information about your products and services. Misleading or deceptive practices are not permitted.',
  ];

app.get("/",function(req,res){
    res.render('index');
});
app.get("/about",function(req,res){
    res.render('about', { deliveryOptions, guidelines });
});
app.get("/product",function(req,res){
    res.render("product", { products });
});


app.listen(3000, function(){
    console.log("Server running on port 3000");
});