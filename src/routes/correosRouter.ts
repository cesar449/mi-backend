import { Router } from "express";
import { correosController } from "../controllers/correosController";
class RolUserRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }
    
    config(){
        this.router.get('/',correosController.list);
        this.router.delete('/:id', correosController.delete);
        this.router.post('/', correosController.create);
        this.router.get('/correo/check', correosController.check);
    }
    
}

const rolUserRoutes = new RolUserRoutes();
export default rolUserRoutes.router;