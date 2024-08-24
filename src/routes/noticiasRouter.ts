import { Router } from 'express';
import { noticiasController } from '../controllers/noticiasController'; // Asegúrate de que la ruta sea correcta

class NoticiasRoutes {

  public router: Router;

  constructor() {
    this.router = Router();
    this.config();
  }

  private config(): void {
    this.router.get('/', noticiasController.list); // Asegúrate de que el método y la ruta sean correctos
    this.router.get('/:id', noticiasController.getOne);
    this.router.post('/', noticiasController.create);
    this.router.put('/:id', noticiasController.update);
    this.router.delete('/:id', noticiasController.delete);
  }
}

const noticiasRoutes = new NoticiasRoutes();
export default noticiasRoutes.router;
