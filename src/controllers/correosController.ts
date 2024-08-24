import { Request, Response } from 'express';
import pool from '../database';

class CorreosController {
  public async list(req: Request, res: Response): Promise<void> {
    const act = await pool.query('SELECT * FROM correos');
    res.json(act);
  }

  public async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await pool.query('DELETE FROM correos WHERE id = ?', [id]);
    res.json({ message: 'El correo se eliminó' });
  }

  public async create(req: Request, res: Response): Promise<void> {
    const { email } = req.body;
    // Verificar si el correo ya existe
    const existingCorreo = await pool.query('SELECT * FROM correos WHERE email = ?', [email]);

    if (existingCorreo.length > 0) {
      res.status(400).json({ message: 'El correo ya está suscrito' });
    } else {
      await pool.query('INSERT INTO correos SET ?', [req.body]);
      res.json({ message: 'Correo guardado correctamente' });
    }
  }

  // Nuevo método para verificar si el correo existe
 // src/controllers/correosController.ts

public async check(req: Request, res: Response): Promise<void> {
  const { email } = req.query;
  const existingCorreo = await pool.query('SELECT * FROM correos WHERE email = ?', [email]);

  if (existingCorreo.length > 0) {
    res.json(true);
  } else {
    res.json(false);
  }
}

}

export const correosController = new CorreosController();