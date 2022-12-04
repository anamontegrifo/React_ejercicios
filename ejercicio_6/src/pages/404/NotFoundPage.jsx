import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const Notfoundpage = () => {

    

    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <Button variant="outlined"><Link to='/'>Home</Link></Button>
        </div>
    );
}

export default Notfoundpage;
