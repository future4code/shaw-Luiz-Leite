import app from "./app"
import createCompetition from "../src/createcompetition"
import signup from "../src/singupresults"
import createId from "../src/createcompetittionById"

//Cadastrar resultados(singupresults)
app.post("/signup", signup)

//Criar uma competição
app.post("/create", createCompetition)

app.get ("/recipe/:id", createId)

