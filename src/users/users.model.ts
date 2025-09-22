import { DataTypes } from 'sequelize';
import { Column, Model, Table, HasMany } from 'sequelize-typescript';
import { Department, Email, Phone } from './other.model';

@Table
export class User extends Model<User> {
  @Column({ primaryKey: true, autoIncrement: true, type: DataTypes.UUIDV4 })
  declare id: number;

  @Column({ allowNull: false, unique: true, type: DataTypes.STRING })
  declare username: string;

  @Column({ allowNull: false, type: DataTypes.STRING })
  declare password: string;

  @Column({ allowNull: false, type: DataTypes.STRING })
  declare name: string;

  @HasMany(() => Phone)
  declare phones: Phone[];

  @HasMany(() => Email)
  declare emails: Email[];

  @HasMany(() => Department)
  declare departments: Department[];
}
