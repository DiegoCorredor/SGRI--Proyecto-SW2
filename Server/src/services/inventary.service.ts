import DB from '@databases';
import { CreateInventaryDto } from '@dtos/inventary.dto';
import { HttpException } from '@exceptions/HttpException';
import { Inventary } from '@interfaces/inventary.interface';
import { isEmpty } from '@utils/util';

class InventaryService {
  public Inventarys = DB.Inventary;

  public async findAllInventary(): Promise<Inventary[]> {
    const allInventary: Inventary[] = await this.Inventarys.findAll();
    return allInventary;
  }

  public async findInventaryById(InventaryId: number): Promise<Inventary> {
    if (isEmpty(InventaryId)) throw new HttpException(400, "InventaryId is empty");

    const findInventary: Inventary = await this.Inventarys.findByPk(InventaryId);
    if (!findInventary) throw new HttpException(409, "Inventary doesn't exist");

    return findInventary;
  }

  public async createInventary(InventaryData: CreateInventaryDto): Promise<Inventary> {
    if (isEmpty(InventaryData)) throw new HttpException(400, "InventaryData is empty");

    const findInventary: Inventary = await this.Inventarys.findOne({ where: { nameElement: InventaryData.nameElement } });
    if (findInventary) throw new HttpException(409, `This email ${InventaryData.nameElement} already exists`);

    
    const createInventaryData: Inventary = await this.Inventarys.create({ ...InventaryData});
    return createInventaryData;
  }

  public async updateInventary(InventaryId: number, InventaryData: CreateInventaryDto): Promise<Inventary> {
    if (isEmpty(InventaryData)) throw new HttpException(400, "InventaryData is empty");

    const findInventary: Inventary = await this.Inventarys.findByPk(InventaryId);
    if (!findInventary) throw new HttpException(409, "Inventary doesn't exist");

    await this.Inventarys.update({ ...InventaryData }, { where: { idinventary: InventaryId } });

    const updateInventary: Inventary = await this.Inventarys.findByPk(InventaryId);
    return updateInventary;
  }

  public async deleteInventary(InventaryId: number): Promise<Inventary> {
    if (isEmpty(InventaryId)) throw new HttpException(400, "Inventary doesn't existId");

    const findInventary: Inventary = await this.Inventarys.findByPk(InventaryId);
    if (!findInventary) throw new HttpException(409, "Inventary doesn't exist");

    await this.Inventarys.destroy({ where: { idinventary: InventaryId } });

    return findInventary;
  }
}

export default InventaryService;
