import { Request, Response } from 'express';
import { Libreria, ILibreria } from '../model/libreria.model';
import { IResponse } from '../model/response.model';

export const createLibreria = async (req: Request, res: Response)=> {           
    const { tituloLibro, autor, fechaPublicacion, lugarPublicacion, editorial, numPaginas } : ILibreria = req.body;
    const response = await new LibreriaController().create({ tituloLibro, autor, fechaPublicacion, lugarPublicacion, editorial, numPaginas});         
    return res.status(response.status).json(response);   
}

export const retrieveLibreria = async (req: Request, res: Response) => {
    const docId : String = req.params.id; 
    const response = await new LibreriaController().retrieve(docId);         
    return res.status(response.status).json(response);   
 }

 export const updateLibreria = async (req: Request, res: Response)=> {           
    const { tituloLibro, autor, fechaPublicacion, lugarPublicacion, editorial, numPaginas } : ILibreria = req.body;
    const docId : String = req.params.id; 
    const response = await new LibreriaController().update(docId, { tituloLibro, autor, fechaPublicacion, lugarPublicacion, editorial, numPaginas});         
    return res.status(response.status).json(response);   
}

export const deleteLibreria = async (req: Request, res: Response) => {
    const docId : String = req.params.id; 
    const response = await new LibreriaController().delete(docId);         
    return res.status(response.status).json(response);   
 }

 export const listLibreria = async (req: Request, res: Response) => {
    const response = await new LibreriaController().list();         
    return res.status(200).json(response);    
}


class LibreriaController{

    public async create(payload : ILibreria) : Promise<IResponse> {
        const libreria = new Libreria(payload);
        return libreria.save().then(data => {
            return {
                message: "CREATED: Libro added to database",
                status: 201,
                content : data
            }
        }).catch(err => {
            return {
                message: "Error on create Libro",
                status: 500,
                content : err
            }
        });        
    }

    public async retrieve(docId: String) : Promise<IResponse> {        
        return Libreria.findOne({_id: docId}).then(data => {
            if(data === null) {
                return {
                    message: "NOT FOUND: Libro not found",
                    status: 404,
                    content : data
                };
            }
            return {
                message: "OK: Libro retrieve",
                status: 200,
                content : data
            };
        }).catch(err => {
            return {
                message: "INTERNAL SERVER ERROR: " + err.name ,
                status: 500,
                content : err
            };
        });        
    }

    public async update(docId: String, payload : ILibreria) : Promise<IResponse>{
        return Libreria.updateOne({_id: docId} , { $set: { 
            tituloLibro:         payload.tituloLibro,
            autor:               payload.autor,
            fechaPublicacion:    payload.fechaPublicacion,
            lugarPublicaion:     payload.lugarPublicacion,
            editorial:           payload.editorial,
            numPaginas:          payload.numPaginas,

          } }).then(data => {            
            return {
                message: "OK: Libo updated",
                status: 200,
                content : data
            }
        }).catch(err => {
            return {
                message: "INTERNAL SERVER ERROR: Libro not updated",
                status: 500,
                content : err
            }
        });
    }

    public async delete(docId: String) : Promise<IResponse> {
        return Libreria.deleteOne({_id: docId}).then(data => {
            if (data.deletedCount == 0) {
                return {
                    message: "NOT FOUND: Libro not found",
                    status: 404,
                    content : data
                };
            }
            return {
                message: "OK: Libro deleted",
                status: 200,
                content : data
            }
        }).catch(err => {
            return {
                message: "INTERNAL SERVER ERROR: " + err.name,
                status: 500,
                content : err
            }
        });
    }

    public async list() : Promise<IResponse> {
        return Libreria.find({}).then(data => {
                return {
                    message: "OK: All libros retrieve",
                    status: 200,
                    content : data
                };
            }).catch(err => {
                return { message: "Error on retrieve Libros", status: 500, content : err }
        });       
    }
}