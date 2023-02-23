import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { User } from '@interfaces/users.interface';

export type UserCreationAttributes = Optional<User, 'iduser' | 'mailUser' | 'passwordUser' | 'nameUser' | 'typeUser' | 'phoneUser' | 'dniUser'>;

export class UserModel extends Model<User, UserCreationAttributes> implements User {
  public dniUser: number;
  public typeUser: number;
  public nameUser: string;
  public phoneUser: number;
  public iduser: number;
  public mailUser: string;
  public passwordUser: string;
}

export default function (sequelize: Sequelize): typeof UserModel {
  UserModel.init(
    {
      iduser: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      mailUser: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      passwordUser: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      dniUser:{
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      phoneUser:{
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      typeUser:{
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      nameUser: {
        allowNull: false,
        type: DataTypes.STRING(45),
      }
    },
    {
      tableName: 'users',
      sequelize, timestamps:false
    },
  );

  return UserModel;
}
