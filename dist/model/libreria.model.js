"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libreria = void 0;
const mongoose_1 = require("mongoose");
//Schema 
const libreriaSchema = new mongoose_1.Schema({
    tituloLibro: { type: String },
    autor: { type: String },
    fechaPublicacion: { type: Date },
    lugarPublicacion: { type: String },
    editorial: { type: String },
    numPaginas: { type: Number },
});
//Model
const Libreria = (0, mongoose_1.model)('Libreria', libreriaSchema);
exports.Libreria = Libreria;
