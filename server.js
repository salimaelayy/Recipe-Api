const express =require ("express");
const mongoose =require("mongoose");
const recipeRoute=require("./Routes/routeRecipe");
const app= express();
const port=3001;

//json middleware
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/recipeApi")
.then(() => {
    console.log("Connected to MongoDB");
    
})
.catch((err) => {
    console.log("Error:", err);
})



//starting server
app.listen(port, () => {
    console.log("Server is running on port", port);
  });

//use router middleware
app.use('/recipes/', recipeRoute)
