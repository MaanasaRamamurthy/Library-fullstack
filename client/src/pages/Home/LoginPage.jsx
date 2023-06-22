import React, {useEffect} from 'react';
import Login from '../../components/LoginSignup/Login';

const LoginPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
        <Login />
    </main>
  )
}

export default LoginPage