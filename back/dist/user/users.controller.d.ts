import { UsersService } from './users.service';
import { AddUserDTO } from "./dto/add-user.dto";
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<import("./interfaces/user.interface").User[]>;
    getById(id: string): Promise<import("./interfaces/user.interface").User>;
    add(addUserRequest: AddUserDTO): Promise<import("./dto/user.dto").UserDTO>;
    delete(id: string): Promise<void>;
}
