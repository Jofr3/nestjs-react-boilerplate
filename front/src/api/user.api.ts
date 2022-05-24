import {User} from "./models/user.model";
import {del, get, post} from "./utils.api";

export const getAll = async (): Promise<User[]> => {
    const res = await get(`/users`);
    return await res.json();
};

export const add = async (name: string, surname: string): Promise<User> => {
    const res = await post(`/users`, {name, surname});
    return await res.json();
};

export const remove = async (id: number): Promise<void> => {
    await del(`/users/${id}`);
};
