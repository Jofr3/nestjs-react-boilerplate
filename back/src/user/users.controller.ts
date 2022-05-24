import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post} from '@nestjs/common';
import {UsersService} from './users.service';
import {AddUserDTO} from "./dto/add-user.dto";

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {
    }

    @Get()
    async findAll() {
        return await this.usersService.getAll();
    }

    @Get('/:id')
    public async getById(@Param() id: string) {
        return await this.usersService.getById(id);
    }

    @Post()
    public async add(@Body() addUserRequest: AddUserDTO) {
        return await this.usersService.add(addUserRequest);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    public async delete(@Param() id: string) {
        return await this.usersService.delete(id);
    }

}
