import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Dependencies } from '@interfaces/dependencies.interface';

export type DependenciesCreationAttributes = Optional<Dependencies, 'iddependency' | 'dependencyName'>;

export class DependenciesModel extends Model<Dependencies, DependenciesCreationAttributes> implements Dependencies {
    iddependency: number;
    dependencyName: string;
}

export default function (sequelize: Sequelize): typeof DependenciesModel {
    DependenciesModel.init(
        {
            iddependency: {
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            dependencyName: {
                allowNull: false,
                type: DataTypes.STRING(45),
            },
        },
        {
        tableName: 'dependencies',
        sequelize, timestamps:false
        },
    );
    
    return DependenciesModel;
    }
    
