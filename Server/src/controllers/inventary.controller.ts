import { NextFunction, Request, Response } from 'express';
import { CreateInventaryDto } from '@dtos/inventary.dto';
import { Inventary } from '@interfaces/inventary.interface';
import InventaryService from '@services/inventary.service';

class InventarysController {
  public InventaryService = new InventaryService();

  public getInventary = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllInventaryData: Inventary[] = await this.InventaryService.findAllInventary();

      res.status(200).json({ data: findAllInventaryData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getInventaryById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const InventaryId = Number(req.params.id);
      const findOneInventaryData: Inventary = await this.InventaryService.findInventaryById(InventaryId);

      res.status(200).json({ data: findOneInventaryData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createInventary = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const InventaryData: CreateInventaryDto = req.body;
      const createInventaryData: Inventary = await this.InventaryService.createInventary(InventaryData);

      res.status(201).json({ data: createInventaryData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateInventary = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const InventaryId = Number(req.params.id);
      const InventaryData: CreateInventaryDto = req.body;
      const updateInventaryData: Inventary = await this.InventaryService.updateInventary(InventaryId, InventaryData);

      res.status(200).json({ data: updateInventaryData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteInventary = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const InventaryId = Number(req.params.id);
      const deleteInventaryData: Inventary = await this.InventaryService.deleteInventary(InventaryId);

      res.status(200).json({ data: deleteInventaryData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default InventarysController;
