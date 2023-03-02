import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { TypeElement } from '@interfaces/typeElements.interface';

export type TypeElementCreationAttributes = Optional<TypeElement, 'idtypeElement' | 'typeElement'>;

export class TypeElementModel extends Model<TypeElement, TypeElementCreationAttributes> implements TypeElement {
    idtypeElement: number;
    typeElement: string;
}

export default function (sequelize: Sequelize): typeof TypeElementModel {
    TypeElementModel.init(
        {
            idtypeElement: {
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            typeElement: {
                allowNull: false,
                type: DataTypes.STRING(45),
            },
        },
        {
        tableName: 'type_elements',
        sequelize, timestamps:false
        },
    );
    
    return TypeElementModel;
    }

