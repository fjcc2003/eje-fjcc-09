/*Declaraciones*/

const servidorHTTP = require('express');
const app  = servidorHTTP();
const port = process.env.PORT || 3000;

/* Configuraciones */
app.get("/", (req, res) => {
res.send("Hola mundo de los servidores web");
});

app.listen(port, ()=>{
    console.log(`El servidor esta corriendo en el puerto http//localhost:${port}`);
});
