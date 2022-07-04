import app from "./app"
import createRecipe from "./endPoints/recipes/createRecipe"
import createRecipeId from "./endPoints/recipes/createRecipeById"
import getProfile from "./endPoints/users/getProfile"
import getUserById from "./endPoints/users/getUserById"
import login from "./endPoints/users/login"
import signup from "./endPoints/users/signup"

//Criação de cadastro (singup)
app.post("/users/signup", signup)

//Criação de usuário (login)
app.post("/users/login", login)

//Trazer informações do perfil (getProfile)
app.get("/users/profile", getProfile)

//Trazer informações do perfil Id (getUserById)
app.get("/users/:id/profile", getUserById)

//Criar uma receita
app.post("/recipe", createRecipe)


app.get ("/recipe/:id", createRecipeId)



 