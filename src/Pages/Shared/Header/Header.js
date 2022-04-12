import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const {user, handleSignOut} = useFirebase();
    return (
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/checkbook'}>CheckBook</Link>
            <Link to={'/about'}>About</Link>
            {
                user?.uid ?
                <>
                <p className='text-white mx-2'>{user.displayName}</p>
                <button onClick={handleSignOut}>Sign Out</button>
                </> 
                
                :
                <Link to={"/login"}>Login</Link>
            }
            
        </nav>
    );
};

export default Header;