import { Router } from 'express';
import DropdownController from '@controllers/typeElement.controller';
import { Routes } from '@interfaces/routes.interface';

class DropdownRoute implements Routes {
    public path = '/getDropdowns';
    public router = Router();
    public TypeElementController = new DropdownController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}/typeElement`, this.TypeElementController.getTypeElement);
        this.router.get(`${this.path}/statuses`, this.TypeElementController.getTypeElement);
        this.router.get(`${this.path}/dependencies`, this.TypeElementController.getTypeElement);
    }
}

export default DropdownRoute;