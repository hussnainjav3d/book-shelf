import { DataTypes } from 'sequelize';
import {
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from './users.entity';

@Table({ tableName: 'departments' })
export class Department extends Model<Department> {
  @Column({ primaryKey: true, autoIncrement: true, type: DataTypes.UUIDV4 })
  declare id: number;

  @Column({ allowNull: false, unique: true, type: DataTypes.STRING })
  declare name: string;

  @HasMany(() => User)
  declare users: User[];

  @ForeignKey(() => User)
  @Column({ type: DataTypes.UUIDV4 })
  declare userId: string;

  @BelongsTo(() => User)
  user: User;
}
