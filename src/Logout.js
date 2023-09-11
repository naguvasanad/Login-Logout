import React from 'react'
import "./Logout.css"
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';

const Logout = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
const HandleLogout = (e) =>{
e.preventDefault();


dispatch(logout());
}


  return (
    <div className='logout'>
      <h1>welcome<span className='user_name'>{user.name}</span></h1>
      <button className='logout_btn' onClick={(e) =>HandleLogout(e)}>Logout</button>
    </div>
  )
}

export default Logout;
