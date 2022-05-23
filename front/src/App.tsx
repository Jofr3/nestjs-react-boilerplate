import React, {useEffect, useState} from 'react';
import './App.scss';
import {UserApi} from "./api/user.api";
import {UserDTO} from "./api/dto/user.dto";

function App() {
    const [users, setUsers] = useState<UserDTO[]>([])

    useEffect(() => {
        async function fetchAll() {
            const resp = await UserApi.getAll();

            setUsers(resp);
        }

        fetchAll();
    }, []);


    return (
        <div className="App">
            <ul>
                {
                    users.map(user => {
                        return <li key={user.id}>{user.name}</li>
                    })
                }
            </ul>

        </div>
    );
}

export default App;
