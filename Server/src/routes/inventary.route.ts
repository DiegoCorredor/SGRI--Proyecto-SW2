import { Router } from 'express';
import InventaryController from '@controllers/inventary.controller';
import { CreateInventaryDto } from '@dtos/inventary.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class InventaryRoute implements Routes {
  public path = '/Inventary';
  public router = Router();
  public InventaryController = new InventaryController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.InventaryController.getInventary);
    this.router.get(`${this.path}/:id(\\d+)`, this.InventaryController.getInventaryById);
    this.router.post(`${this.path}`, validationMiddleware(CreateInventaryDto, 'body'), this.InventaryController.createInventary);
    this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateInventaryDto, 'body', true), this.InventaryController.updateInventary);
    this.router.delete(`${this.path}/:id(\\d+)`, this.InventaryController.deleteInventary);
  }
}

export default InventaryRoute;
