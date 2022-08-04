import app from "./app"
import createRecipe from "./endPoints/recipes/createRecipe"
import createRecipeId from "./endPoints/recipes/createRecipeById"
import getProfile from "./endPoints/users/getProfile"
import getUserById from "./endPoints/users/getUserById"
import login from "./endPoints/users/login"
import signup from "./endPoints/users/signup"

//Criação de cadastro (singupresults)
app.post("/signup", signup)

//Criar uma receita
app.post("/recipe", createRecipe)



