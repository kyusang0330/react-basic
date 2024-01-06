import React, {useEffect, useState} from 'react';
import axios from 'axios';
import UserList from '../components/UserList';
import Spinner from '../components/Spinner.js'

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUsers[response.data];
                setLoading(false);
            });
    }, []);

    return (
        <>
            <h1>Users1</h1>
            {loading ? <Spinner /> :
            <UserList users={users} />}
        </>
        );
};

export default Users;