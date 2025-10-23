import { DataTypes } from 'sequelize';
import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from './user.entity';

@Table({ tableName: 'emails' })
export class Email extends Model<Email> {
  @Column({ primaryKey: true, autoIncrement: true, type: DataTypes.UUIDV4 })
  declare id: number;

  @Column({ allowNull: false, unique: true, type: DataTypes.STRING })
  declare email: string;

  @ForeignKey(() => User)
  @Column({ type: DataTypes.UUIDV4 })
  declare userId: string;

  @BelongsTo(() => User)
  user: User;
}
