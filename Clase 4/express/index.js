import express from "express";

const app = express();  
const PORT = 8080

app.get("/", (req, res) => {    
    res.send("Hello World from Express")    
})

app.get("/api", (req, res) => {    
    res.send("Aca deberian existir datos...")    
})

app.listen(PORT, () => console.log("Server running!"))