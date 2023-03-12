import React from 'react'
import {RxCross1} from 'react-icons/rx';

const header = () => {
    return (
    <header className='bg-[#0c1e45] top-0 flex items-center justify-between px-4'>
        <div ></div>
        <div className='text-white p-4'>
            <p>Blog is about ....</p>
        </div>
        
        <div className='text-white justify-end'>
            <RxCross1 className='h-4'/>   
        </div>
        
        
    </header>
)
}

export default header;
