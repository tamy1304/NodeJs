import {Application} from 'express';
import { createLibreria, deleteLibreria, listLibreria, retrieveLibreria, updateLibreria } from './controller/libreria.controller';

export const router = (app: Application)=>{
    
/**
 * @swagger
 * components:
 *  schemas:
 *    Libro:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: id autogenerado del libro
 *        titulo:
 *          type: string
 *          description: el nombre del libro
 *        autor:
 *          type: string
 *          description: nombre del autor del libro
 *        fecha:
 *          type: date
 *          description: fecha de publicacion del libro
 *        lugar:
 *          type: string
 *          description: lugar de publicacion del libro
 *        editorial:
 *          type: string
 *          description: editorial que publico el libro
 *        numPaginas:
 *          type: number
 *          description: numero de paginas del libro
 *    LibroNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: Un mensaje cuando no se encuentra un libro
 */


    /**
     * @swagger 
     * /librerias:
     *  post:
     *   summary: Crear un nuevo libro
     *   responses:
     *    200:
     *     description: El libro fue creado correctamente
     *     content: 
     *      application/json:
     *    500:
     *     description: Algun error en el servidor
     */
    app.post("/librerias", createLibreria);  

/**
 * @swagger
 * //librerias/:id:
 *  get:
 *    summary: Obtener un libro por su id
 *    responses:
 *      200:
 *        description: El libro encontrado
 *        content:
 *          application/json:
 *      404:
 *        description: El libro no fue encontrado
 *        content:
 *          application/json:
 */
    app.get("/librerias/:id", retrieveLibreria);

/**
 * @swagger
 * /librerias/:id:
 *  put:
 *    summary: Actualiza un libro por el id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *    responses:
 *      200:
 *        description: Libro actualizado
 *        content:
 *          application/json:
 *      404:
 *        description: libro no encontrado
 *        content:
 *          application/json:
 *
 */

    app.put("/librerias/:id", updateLibreria);
/**
 * @swagger
 * /librerias/:id:
 *  delete:
 *    summary: Eliminar un libro por su id
 *    responses:
 *      200:
 *        description: El libro fue eliminado correctamente 
 *        content:
 *          application/json:
 *      404:
 *        description: el libro no fue encontrado
 *        content:
 *          application/json:
 *
 */
    app.delete("/librerias/:id", deleteLibreria);   
    
    /**
 * @swagger
 * /tasks:
 *  get:
 *    summary: Retorna la lista de libro
 *    responses:
 *      200:
 *        description: la lista de libros 
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 */

    app.get("/librerias", listLibreria);
}