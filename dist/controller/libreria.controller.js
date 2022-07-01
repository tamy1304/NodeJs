"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listLibreria = exports.deleteLibreria = exports.updateLibreria = exports.retrieveLibreria = exports.createLibreria = void 0;
const libreria_model_1 = require("../model/libreria.model");
const createLibreria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tituloLibro, autor, fechaPublicacion, lugarPublicacion, editorial, numPaginas } = req.body;
    const response = yield new LibreriaController().create({ tituloLibro, autor, fechaPublicacion, lugarPublicacion, editorial, numPaginas });
    return res.status(response.status).json(response);
});
exports.createLibreria = createLibreria;
const retrieveLibreria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const docId = req.params.id;
    const response = yield new LibreriaController().retrieve(docId);
    return res.status(response.status).json(response);
});
exports.retrieveLibreria = retrieveLibreria;
const updateLibreria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tituloLibro, autor, fechaPublicacion, lugarPublicacion, editorial, numPaginas } = req.body;
    const docId = req.params.id;
    const response = yield new LibreriaController().update(docId, { tituloLibro, autor, fechaPublicacion, lugarPublicacion, editorial, numPaginas });
    return res.status(response.status).json(response);
});
exports.updateLibreria = updateLibreria;
const deleteLibreria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const docId = req.params.id;
    const response = yield new LibreriaController().delete(docId);
    return res.status(response.status).json(response);
});
exports.deleteLibreria = deleteLibreria;
const listLibreria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield new LibreriaController().list();
    return res.status(200).json(response);
});
exports.listLibreria = listLibreria;
class LibreriaController {
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const libreria = new libreria_model_1.Libreria(payload);
            return libreria.save().then(data => {
                return {
                    message: "CREATED: Libro added to database",
                    status: 201,
                    content: data
                };
            }).catch(err => {
                return {
                    message: "Error on create Libro",
                    status: 500,
                    content: err
                };
            });
        });
    }
    retrieve(docId) {
        return __awaiter(this, void 0, void 0, function* () {
            return libreria_model_1.Libreria.findOne({ _id: docId }).then(data => {
                if (data === null) {
                    return {
                        message: "NOT FOUND: Libro not found",
                        status: 404,
                        content: data
                    };
                }
                return {
                    message: "OK: Libro retrieve",
                    status: 200,
                    content: data
                };
            }).catch(err => {
                return {
                    message: "INTERNAL SERVER ERROR: " + err.name,
                    status: 500,
                    content: err
                };
            });
        });
    }
    update(docId, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return libreria_model_1.Libreria.updateOne({ _id: docId }, { $set: {
                    tituloLibro: payload.tituloLibro,
                    autor: payload.autor,
                    fechaPublicacion: payload.fechaPublicacion,
                    lugarPublicaion: payload.lugarPublicacion,
                    editorial: payload.editorial,
                    numPaginas: payload.numPaginas,
                } }).then(data => {
                return {
                    message: "OK: Libo updated",
                    status: 200,
                    content: data
                };
            }).catch(err => {
                return {
                    message: "INTERNAL SERVER ERROR: Libro not updated",
                    status: 500,
                    content: err
                };
            });
        });
    }
    delete(docId) {
        return __awaiter(this, void 0, void 0, function* () {
            return libreria_model_1.Libreria.deleteOne({ _id: docId }).then(data => {
                if (data.deletedCount == 0) {
                    return {
                        message: "NOT FOUND: Libro not found",
                        status: 404,
                        content: data
                    };
                }
                return {
                    message: "OK: Libro deleted",
                    status: 200,
                    content: data
                };
            }).catch(err => {
                return {
                    message: "INTERNAL SERVER ERROR: " + err.name,
                    status: 500,
                    content: err
                };
            });
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return libreria_model_1.Libreria.find({}).then(data => {
                return {
                    message: "OK: All libros retrieve",
                    status: 200,
                    content: data
                };
            }).catch(err => {
                return { message: "Error on retrieve Libros", status: 500, content: err };
            });
        });
    }
}
