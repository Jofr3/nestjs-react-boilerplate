import React, {useEffect, useState} from 'react';
import './index.scss';
import {add, getAll, remove} from "./api/user.api";
import {User} from "./api/models/user.model";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <App/>
);

function App() {
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        async function fetchAll() {
            setUsers(await getAll());
        }

        fetchAll();
    }, []);

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')

    const addUserArr = (user: User) => {
        setUsers([...users, user]);
    }

    const addUser = async () => {
        addUserArr(await add(name, surname));
    }

    const delUser = async (id: number) => {
        await remove(id);
        setUsers(users.filter((x) => x.id !== id));
    }

    return (
        <div className="App backdrop-blur-lg">

            <div className="columns-2 w-screen h-screen p-4">

                <div className="bg-gray-100 shadow w-full h-full rounded flex justify-center p-40">

                    <div className="bg-white rounded drop-shadow-xl h-full w-full flex justify-center">

                        <div className="flex flex-col justify-center">
                            <h1 className="text-3xl mb-10 antialiased">Add user</h1>
                            <label htmlFor="name">Name</label>
                            <input className="bg-gray-200 mb-4 shadow" id="name" type="text"
                                   onChange={(e) => setName(e.target.value)}/>
                            <label htmlFor="surname">Surname</label>
                            <input className="bg-gray-200 mb-4 shadow" id="surname" type="text"
                                   onChange={(e) => setSurname(e.target.value)}/>
                            <button onClick={addUser}
                                    className="w-10 align-middle p-2 mt-10 bg-blue-600 text-white rounded drop-shadow-xl hover:bg-blue-700 active:bg-blue-500">Ok
                            </button>
                        </div>

                    </div>

                </div>
                <div className="bg-gray-100 shadow w-full h-full rounded">
                    <div className="flex justify-center h-full">
                        <ul className="m-auto">
                            {
                                users.map(user => {
                                    return <li key={user.id} className="flex justify-between h-full">
                                        <div
                                            className="bg-white m-4 p-2 w-40 rounded-lg flex justify-center drop-shadow-xl">
                                            {user.name}
                                        </div>

                                        <button onClick={() => delUser(user.id)}
                                                className="align-middle p-2 m-4 ml-0 bg-red-600 text-white rounded h-10 drop-shadow-xl hover:bg-red-700 active:bg-red-500">del
                                        </button>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;
