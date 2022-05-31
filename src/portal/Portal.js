import { useContext, useState } from 'react';
import { ViewContext } from '../context/ViewProvider';
import { UserContext } from '../context/UserProvider';
import { useResolution } from '../resolution/useResolution';


import {Login} from './login/Login';
import {Singup} from './signup/Singup';
import {NavPortal} from './nav/NavPortal';
import {Menu} from './nav/Menu';
import { Profile } from './profile/Profile';

function Portal() {
    const {view} = useContext(ViewContext);
    const {validateUser} = useContext(UserContext);
    const [menuItem, setMenuItem] = useState('');

    const resolution=useResolution();

    return ( 
        <>
            <NavPortal item={menuItem} setItem={m=>setMenuItem(m)}/>
            <div className='portal'>
                {view==='LOGIN'&&<Login/>}
                {view==='SINGUP'&&<Singup/>}
                {
                validateUser&&
                <div className='portal-container'>
                    {resolution!=='MOBILE'&&<Menu item={menuItem} setItem={m=>setMenuItem(m)} />}
                    <div className='portal-select'>
                        {menuItem==='PERFIL'&&<Profile/>}
                    </div>
                </div>
                }
            </div>
        </>
    );
}

export {Portal};