import {Application} from 'express';
import { createLibreria, deleteLibreria, listLibreria, retrieveLibreria, updateLibreria } from './controller/libreria.controller';

export const router = (app: Application)=>{
    app.post("/librerias", createLibreria);  
    app.get("/librerias/:id", retrieveLibreria);
    app.put("/librerias/:id", updateLibreria);
    app.delete("/librerias/:id", deleteLibreria);    
    app.get("/librerias", listLibreria);
}