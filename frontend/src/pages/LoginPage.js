import React, { useContext } from 'react';
import AuthContext, {AuthProvider, useAuth} from '../context/AuthContext';

const LoginPage = () => {

  let {loginUser} = useAuth();

  return (
    <div>
        <form onSubmit={loginUser}>
            Login Info:
            <input type='text' name='username'></input>
            <input type='password' name='password'></input>
            <input type='submit'></input>
        </form>
    </div>
  )
};

export default LoginPage;
