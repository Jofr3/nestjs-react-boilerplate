"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var UsersService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const user_dto_1 = require("./dto/user.dto");
let UsersService = UsersService_1 = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getAll() {
        const users = await this.userRepository.find();
        return users;
    }
    async getById(id) {
        const user = await this.userRepository.findOneOrFail(id);
        return user;
    }
    async add(addUserRequest) {
        const user = new user_entity_1.UserEntity();
        user.name = addUserRequest.name;
        user.surname = addUserRequest.surname;
        await this.userRepository.save(user);
        return UsersService_1.entityToDTO(user);
    }
    async delete(id) {
        const user = await this.userRepository.findOneOrFail(id);
        await this.userRepository.delete(user);
    }
    static entityToDTO(user) {
        const userDTO = new user_dto_1.UserDTO();
        userDTO.id = user.id;
        userDTO.name = user.name;
        userDTO.surname = user.surname;
        return userDTO;
    }
};
UsersService = UsersService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map