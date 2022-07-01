"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const libreria_controller_1 = require("./controller/libreria.controller");
const router = (app) => {
    app.post("/librerias", libreria_controller_1.createLibreria);
    app.get("/librerias/:id", libreria_controller_1.retrieveLibreria);
    app.put("/librerias/:id", libreria_controller_1.updateLibreria);
    app.delete("/librerias/:id", libreria_controller_1.deleteLibreria);
    app.get("/librerias", libreria_controller_1.listLibreria);
};
exports.router = router;
