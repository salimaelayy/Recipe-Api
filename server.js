const express =require ("express");
const app= express();
require("./connect");
const recipeRoute=require("./Routes/routeRecipe");
const port=3001;


//json middleware
app.use(express.json());

//starting server
app.listen(port, () => {
    console.log("Server is running on port", port);
  });

//use router middleware
app.use('/recipes/', recipeRoute);
