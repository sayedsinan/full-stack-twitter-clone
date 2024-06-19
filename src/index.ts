import express, {Express}from "express";
import http  from "http";
import cors from "cors"
import bodyParser from "body-parser";
import exp from "constants";
const app:Express =express();
const server=http.createServer(app);

// Express configuration
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set("PORT",3000)
app.set("BASE_URL","localhost")
// Starting the server
try{
    const port =app.get("PORT")
    const baseUrl =app.get("BASE_URL")

    server.listen(port,(): void =>{
        console.log("The server is listening ")
    })
}catch(e){
    console.log(e)
}
export default server