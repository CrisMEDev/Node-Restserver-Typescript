import dotenv from 'dotenv';
import Server from './models/server';

dotenv.config();    // Leer la config del archivo .env



const server = new Server();


server.listen();


