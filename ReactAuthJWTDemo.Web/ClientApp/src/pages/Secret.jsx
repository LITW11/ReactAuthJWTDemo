import React, {useEffect, useState} from 'react';
import getAxios from '../AuthAxios';
import { useAuth } from '../AuthContext';

const Secret = () => {
    const [secretValue, setSecretValue] = useState();
    const { user } = useAuth();

    useEffect(() => {
        const getSecretValue = async () => {
            const { data } = await getAxios().get('/api/secret/getdata');
            setSecretValue(data.message);
        }

        getSecretValue();
    }, []);

    return <div>
        <h1>Welcome {`${user.firstName} ${user.lastName}`}!</h1>
        <h1>The secret value is: {secretValue}</h1>
    </div>
}

export default Secret;