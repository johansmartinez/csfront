import { useContext } from 'react';
import { ViewContext } from '../context/ViewProvider';
import Login from './login/Login';
import {NavPortal} from './nav/NavPortal';

function Portal() {
    const {view} = useContext(ViewContext);
    return ( 
        <>
            <NavPortal/>
            <div className='portal'>
                {view==='LOGIN'&&<Login/>}
            </div>
        </>
    );
}

export {Portal};