import { Schema, model } from 'mongoose';

//Interface
export interface ILibreria{
    tituloLibro:         null | string;
    autor:               null | string;
    fechaPublicacion:    null | Date;    
    lugarPublicacion:     null | string;
    editorial:           null | string;
    numPaginas:          null | number;
}

//Schema 

const libreriaSchema = new Schema<ILibreria>({
    tituloLibro:         {type:String},
    autor:               {type:String},
    fechaPublicacion:    {type:Date},    
    lugarPublicacion:     {type:String},
    editorial:           {type:String},
    numPaginas:          {type:Number},
});

//Model

const Libreria = model<ILibreria>('Libreria', libreriaSchema);
export {Libreria}