import { Router } from 'express';
import { eventosController } from '../controllers/eventosController'; 

class EventosRoutes {

  public router: Router;

  constructor() {
    this.router = Router();
    this.config();
  }

  private config(): void {
    this.router.get('/', eventosController.list); 
    this.router.get('/:id', eventosController.getOne);
    this.router.post('/', eventosController.create);
    this.router.put('/:id', eventosController.update);
    this.router.delete('/:id', eventosController.delete);
  }
}

const eventosRoutes = new EventosRoutes();
export default eventosRoutes.router;
