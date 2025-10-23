import { DataTypes } from 'sequelize';
import {
  Column,
  Model,
  Table,
  HasMany,
  ForeignKey,
} from 'sequelize-typescript';
import { Department, Phone } from './department.entity';
import { Email } from './emails.entity';

@Table
export class User extends Model {
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

  @ForeignKey(() => Department)
  @Column({ type: DataTypes.UUIDV4 })
  declare departmentId: string;
}
