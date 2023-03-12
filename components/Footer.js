import React from 'react'

const Footer = () => {
    return (
    <footer className='flex items-center justify-center w-screen bg-black'>
    <a href='https://bitcoin.org/' target="_blank">
    <button className="mt-2 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
        <span className="relative px-5 py-3 transition-all duration-75 ease-in bg-white rounded-md dark:bg-gray-900 group-hover:bg-opacity-0">
            View More
        </span>
</button>
</a>
        
    </footer>
)
}

export default Footer
