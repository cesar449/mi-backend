import { Router } from 'express';
import { juegosController } from '../controllers/juegosController'; // Asegúrate de que la ruta sea correcta

class JuegosRoutes {

  public router: Router;

  constructor() {
    this.router = Router();
    this.config();
  }

  private config(): void {
    this.router.get('/', juegosController.list); // Asegúrate de que el método y la ruta sean correctos
    this.router.get('/:id', juegosController.getOne);
    this.router.post('/', juegosController.create);
    this.router.put('/:id', juegosController.update);
    this.router.delete('/:id', juegosController.delete);
  }
}

const juegosRoutes = new JuegosRoutes();
export default juegosRoutes.router;
