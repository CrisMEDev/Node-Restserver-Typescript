import express, { Application } from 'express';
import cors from 'cors';


import * as userRoutes from '../routes/usuario';    // Si hay más exportaciones en el archivo indicado
import db from '../db/conexion';
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

        // DB
        this.conectarDB();
        
        // Middlewares
        this.middlewares();

        // Definir las rutas
        this.routes();

    }

    async conectarDB(){

        try {
            
            await db.authenticate();
            console.log('Database online');

        } catch (error) {
            throw new Error( error );
            
        }

    }

    middlewares(){

        // CORS
        this.app.use( cors() );

        // Lectura del body
        this.app.use( express.json() );

        // Carpeta publica
        this.app.use( express.static('public') );
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
