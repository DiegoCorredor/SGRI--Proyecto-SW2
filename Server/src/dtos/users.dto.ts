import { IsString, IsEmail, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  public mailUser: string;

  @IsString()
  public passwordUser: string;

  @IsString()
  public nameUser: string;

  @IsNumber()
  public dniUser: number;

  @IsNumber()
  public phoneUser: number;

  @IsNumber()
  public typeUser: number;

  //importante revisar variables de la base de datos
}
