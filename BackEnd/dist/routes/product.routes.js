"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //Importamos Router de express para nuestro enrutamiento
const product_controllers_1 = require("../controllers/product.controllers"); //Importamos mostrarProduct
const router = (0, express_1.Router)();
router.get('/', product_controllers_1.mostrarProduct); //Cuando el usuario ingrese a esta ruta se ejecuta mostrarProduct
exports.default = router;
