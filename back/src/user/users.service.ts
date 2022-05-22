import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from './entities/user.entity';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) { }

    public async getAll() {
        const users: User[] = await this.userRepository.find();

        return users;
    }
}
