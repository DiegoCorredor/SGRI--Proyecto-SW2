import { hash } from 'bcrypt';
import DB from '@databases';
import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { User } from '@interfaces/users.interface';
import { isEmpty } from '@utils/util';

class UserService {
  public users = DB.Users;

  public async findAllUser(): Promise<User[]> {
    const allUser: User[] = await this.users.findAll();
    return allUser;
  }

  public async findUserById(userId: number): Promise<User> {
    if (isEmpty(userId)) throw new HttpException(400, "UserId is empty");

    const findUser: User = await this.users.findByPk(userId);
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    return findUser;
  }

  public async createUser(userData: CreateUserDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "userData is empty");

    const findUser: User = await this.users.findOne({ where: { mailUser: userData.mailUser } });
    if (findUser) throw new HttpException(409, `This email ${userData.mailUser} already exists`);

    const hashedPassword = await hash(userData.passwordUser, 10);
    const createUserData: User = await this.users.create({ ...userData, passwordUser: hashedPassword });
    return createUserData;
  }

  public async updateUser(userId: number, userData: CreateUserDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "userData is empty");

    const findUser: User = await this.users.findByPk(userId);
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    const hashedPassword = await hash(userData.passwordUser, 10);
    await this.users.update({ ...userData, passwordUser: hashedPassword }, { where: { iduser: userId } });

    const updateUser: User = await this.users.findByPk(userId);
    return updateUser;
  }

  public async deleteUser(userId: number): Promise<User> {
    if (isEmpty(userId)) throw new HttpException(400, "User doesn't existId");

    const findUser: User = await this.users.findByPk(userId);
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    await this.users.destroy({ where: { iduser: userId } });

    return findUser;
  }
}

export default UserService;
