import React from 'react';
import {Authenticated} from './Authenticated';

const Login = () => {
    return(
        <div>
            <div>
                Login to your Stock Explorer account:
            </div>
            <Authenticated>
            </Authenticated>
        </div>
        
    )
}

export default Login;