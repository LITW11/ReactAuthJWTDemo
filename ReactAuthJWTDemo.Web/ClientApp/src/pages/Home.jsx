import React from 'react';
import { useAuth } from '../AuthContext';

const Home = () => {

    const { user } = useAuth();

    return (
        <>
            {user && <h1>Hello {user.firstName} {user.lastName}</h1>}
            <h1>Home Page</h1>
        </>)
}

export default Home;