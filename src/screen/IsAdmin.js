import React from 'react';
import { Link } from 'react-router-dom';

const IsAdmin = () => {
    return (
        <div className='justify-content-center'>
            <h2 className='text-4 text-danger'>You have no permission on this page...</h2>
            <Link to='/'><button className='btn btn-success mt-5'>Go Back Home</button></Link>
        </div>
    );
};

export default IsAdmin;