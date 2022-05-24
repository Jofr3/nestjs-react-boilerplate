import { Repository } from 'typeorm';
import { AddUserDTO } from './dto/add-user.dto';
import { UserEntity } from './entities/user.entity';
import { UserDTO } from './dto/user.dto';
import { User } from './interfaces/user.interface';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    getAll(): Promise<User[]>;
    getById(id: string): Promise<User>;
    add(addUserRequest: AddUserDTO): Promise<UserDTO>;
    delete(id: string): Promise<void>;
    private static entityToDTO;
}
