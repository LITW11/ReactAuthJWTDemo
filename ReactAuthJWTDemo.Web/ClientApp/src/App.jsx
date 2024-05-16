import React from 'react';
import { Route, Routes } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { AuthContextComponent } from './AuthContext';
import Secret from './pages/Secret';
import PrivateRoute from './components/PrivateRoute';
import Logout from './pages/Logout';


const App = () => {
    return (
        <AuthContextComponent>
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/signup' element={<Signup />} />
                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='/secret' element={
                        <PrivateRoute>
                            <Secret />
                        </PrivateRoute>
                    } />
                     <Route exact path='/logout' element={
                        <PrivateRoute>
                            <Logout />
                        </PrivateRoute>
                    } />
                </Routes>
            </Layout>
        </AuthContextComponent>
    );
}

export default App;