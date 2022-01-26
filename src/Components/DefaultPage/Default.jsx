import React from 'react'

export default function Default({ location }) {
    console.log(location);
    return (
        <div className='container py-5'>
            <div className='row'>
                <div className='col-10 col-sm-8 mx-auto text-center text-title'>
                    <h2 className='h1 display-3 mb-2'>404</h2>
                    <h2 className='mb-3'>error</h2>
                    <h2 className='mb-3'>page not found</h2>
                    <h5>the requested url <span className='text-danger'>{ location.pathname}</span>is not found</h5>
                </div>
            </div>
        </div>
    )
}
