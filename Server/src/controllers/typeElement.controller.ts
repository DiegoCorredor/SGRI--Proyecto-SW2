import { NextFunction, Request, Response } from 'express';
import { TypeElement } from '@interfaces/typeElements.interface';
import DropdownService from '@services/typeElement.service';
import { Status } from '@/interfaces/status.interface';
import { Dependencies } from '@/interfaces/dependencies.interface';

class DropdownController {
    public DropdownService = new DropdownService();
    
    public getTypeElement = async (req: Request, res: Response, next: NextFunction) => {
        try {
        const findAllTypeElementData: TypeElement[] = await this.DropdownService.findAllTypeElement();
    
        res.status(200).json({ data: findAllTypeElementData, message: 'findAll type elements' });
        } catch (error) {
        next(error);
        }
    };

    public getStatus = async (req: Request, res: Response, next: NextFunction)=>{
        try{
            const findAllStatuses: Status[] = await this.DropdownService.findAllStatuses();
            res.status(200).json({ data: findAllStatuses, message: 'findAll statuses' });
        }catch(error){
            next(error);
        }
    };

    public getDependencies = async (req: Request, res: Response, next: NextFunction)=>{
        try{
            const findAllDependencies: Dependencies[] = await this.DropdownService.findAllDependencies();
            res.status(200).json({ data: findAllDependencies, message: 'findAll dependencies' });
        }catch(error){
            next(error);
        }
    }

}

export default DropdownController;
