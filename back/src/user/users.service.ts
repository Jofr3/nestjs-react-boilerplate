import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

import {AddUserDTO} from './dto/add-user.dto';
import {UserEntity} from './entities/user.entity';
import {UserDTO} from './dto/user.dto';
import {User} from './interfaces/user.interface';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {
    }

    public async getAll() {
        const users: User[] = await this.userRepository.find();
        return users;
    }

    public async getById(id: string) {
        const user: User = await this.userRepository.findOneOrFail(id);
        return user;
    }

    public async add(addUserRequest: AddUserDTO) {
        const user: UserEntity = new UserEntity();
        user.name = addUserRequest.name;
        user.surname = addUserRequest.surname;

        await this.userRepository.save(user);
        return UsersService.entityToDTO(user);
    }

    public async delete(id: string): Promise<void> {
        const user: User = await this.userRepository.findOneOrFail(id);
        await this.userRepository.delete(user);
    }

    private static entityToDTO(user: User): UserDTO {
        const userDTO = new UserDTO();
        userDTO.id = user.id;
        userDTO.name = user.name;
        userDTO.surname = user.surname;

        return userDTO;
    }

}
