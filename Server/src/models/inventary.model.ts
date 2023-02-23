import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Inventary } from '@interfaces/inventary.interface';

export type InventaryCreationAttributes = Optional<Inventary, 'idinventary' | 'nameElement' | 'typeElement' | 'countElement' | 'stateElement' | 'valueElement' | 'dependencyElement' | 'dateStart'| 'descriptionElement'>;

export class InventaryModel extends Model<Inventary, InventaryCreationAttributes> implements Inventary {
    idinventary: number;
    nameElement: string;
    typeElement: number;
    countElement: number;
    stateElement: number;
    valueElement: string;
    dependencyElement: number;
    dateStart: Date;
    descriptionElement: string;

}

export default function (sequelize: Sequelize): typeof InventaryModel {
  InventaryModel.init(
    {
        idinventary: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        nameElement: {
            allowNull: false,
            type: DataTypes.STRING(45),
        },
        typeElement: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        countElement: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        stateElement: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        valueElement: {
            allowNull: false,
            type: DataTypes.STRING(45),
        },
        dependencyElement: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        dateStart: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        descriptionElement: {
            allowNull: false,
            type: DataTypes.STRING(45)
        }
    },
    {
      tableName: 'Inventary',
      sequelize, timestamps:false
    },
  );

  return InventaryModel;
}
