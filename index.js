
import express from 'express';
import  Router  from 'express';


//------ config.js ----------
import dotenv from 'dotenv';
dotenv.config(); //iniciamos lectura de variables

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || 'http://localhost'
const NOMBRE = process.env.NOMBRE || 'Mundo'
//--------------------------

const app = express()

//Middlewares
app.use(express.json()) //Parse procesa el json body para leer con req body
app.use(express.urlencoded({extended: false})) //leer datos de url encoded con req.body




//contenido estático 
//así entro a mi carpeta public uploads
app.use("/uploads", express.static('public/uploads')) 
app.use("/web" , express.static('public'))







app.get("/", (req, res, next) => {
    res.setHeader("Content-Type", "text/html")   //respueta en html 


    const landingHTML = `
    
        <h1>  Hola ${NOMBRE} </h1>
        Bienvenido a nuestro backend en Express :))
    
    `;
    res.send(landingHTML)
})



//rutas de mi API
//(routes/index.routes.js)
const router = Router();

router.get("/", (req, res, next) => {
    res.json({message:"Bienvenidos a nuestra API v1 :))"})
})

router.get("/users", (req, res, next ) => {
    res.json({message: "Rutas para obtener usuarios :))"})
})


app.use('/api/v1', router)  //se usa esta url porque router está dentro 


app.listen(PORT, () => {
    console.log(`Servidor funcionando en ${HOST}:${PORT}`)
})