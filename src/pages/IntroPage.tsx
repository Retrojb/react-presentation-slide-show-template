import React from 'react';

const IntroPage = (props) => {

    return (
        <>
            <div className='grid'>
                <div className='col'>
                    <h1 className='text-center p-3'>Hello World</h1>
                </div>
                <div className='col'>
                    <h1 className='text-left p-2'>Hello World</h1>
                </div>
                <div className='col'>
                    <h1>Hello World</h1>
                </div>
            </div>
        </>
    )
};

export default IntroPage;