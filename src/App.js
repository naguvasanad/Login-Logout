import React from 'react';
import Login from './Login';
import Logout from './Logout';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';



function App() {
  const user= useSelector(selectUser);
   return (
    <div>
    {user ? <Logout/> : <Login/>}
    </div>
     );
}

export default App;
