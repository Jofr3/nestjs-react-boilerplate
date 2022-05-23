import {UserDTO} from "./dto/user.dto";

export class UserApi {
    public static async getAll(): Promise<UserDTO[]>{
        const resp = await fetch('http://localhost:3000/users',{
            method: 'GET'
        })

        return await resp.json();
    }

}