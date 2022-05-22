import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { User } from './interfaces/user.interface';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    getAll(): Promise<User[]>;
}
