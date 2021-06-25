import express, { Application } from 'express';


import * as userRoutes from '../routes/usuario';    // Si hay más exportaciones en el archivo indicado
                                                    // se pueden llamar con userRoutes.miExportacion


class Server {

    private app: Application;   // Lo mismo que express.Application
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor(){

        this.app  = express();
        this.port = process.env.PORT || '8080';

        // Definir las rutas
        this.routes();

    }

    routes(){

        this.app.use( this.apiPaths.usuarios, userRoutes.default );

    }

    listen(){
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en el puerto:', this.port );
            
        });
    }

}


export default Server;
