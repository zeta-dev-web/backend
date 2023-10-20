const express = require('express');
const cors = require('cors');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPatch="/api/usuarios"
        this.middleware(); /* middlewares globales*/
        this.routes(); /* rutas */
    }

    middleware(){
//CORS
this.app.use(cors());
//carpeta pública
this.app.use(express.static('public'))
//leer datos recibidos en JSON
this.app.use(express.json());
}
routes(){
    this.app.use(this.usuariosPatch,require('../routes/usuarios'))
}

    listen(){
        this.app.listen(this.port,()=>{
            console.log("Server is running on port:",this.port) 
        })
    }
} 
module.exports = Server;