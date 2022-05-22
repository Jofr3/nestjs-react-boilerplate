import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { User } from '../interfaces/user.interface';

@Entity("user")
export class UserEntity implements User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    surname: string;
}