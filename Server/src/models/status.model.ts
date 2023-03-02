import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Status } from '@interfaces/status.interface';

export type StatusCreationAttributes = Optional<Status, 'idstatus' | 'status'>;

export class StatusModel extends Model<Status, StatusCreationAttributes> implements Status {
    idstatus: number;
    status: string;
}

export default function (sequelize: Sequelize): typeof StatusModel {
    StatusModel.init(
        {
            idstatus: {
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            status: {
                allowNull: false,
                type: DataTypes.STRING(45),
            },
        },
        {
        tableName: 'statuses',
        sequelize, timestamps:false
        },
    );
    
    return StatusModel;
    }
    