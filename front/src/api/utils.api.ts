import {User} from "./models/user.model";

const url = 'http://localhost:3000'

const headers = (): any => {
    return {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
    };
}

export const get = async (route: string) => {
    return await fetch(url + route, {
        method: "get",
        headers: headers(),
    });
};

export const del = async (route: string) => {
    return await fetch(url + route, {
        method: "delete",
        headers: headers(),
    });
};

export const post = async (route: string, object: any) => {
    return await fetch(url + route, {
        method: "post",
        headers: headers(),
        body: JSON.stringify(object)
    });
};