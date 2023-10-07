import {Router} from 'express'; //Importamos Router de express para nuestro enrutamiento

import { mostrarProduct } from '../controllers/product.controllers'; //Importamos mostrarProduct

const router = Router();
router.get('/',mostrarProduct)  //Cuando el usuario ingrese a esta ruta se ejecuta mostrarProduct

export default router;