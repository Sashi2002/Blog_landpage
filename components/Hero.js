import React from 'react'
import {SiHiveBlockchain} from 'react-icons/Si';
import {useRef} from 'react'
import {FiSearch} from 'react-icons/fi';
import Image from 'next/image';

const Hero = () => {
    return (
        <main>
            <div className='flex items-center justify-between'>
                <div className='flex-col items-center justify-center mx-6'>
                <SiHiveBlockchain className='mx-10 my-2'/><p>DECENTRALIES</p>
                </div>
                <div className='flex items-center justify-center gap-4 border-b-2 border-black border-solid '>
                <div className='disable'><FiSearch/></div>
                    <input className='text-gray-600 outline-0' placeholder='Search ...' type-text ></input>
                </div>
                <div className='flex items-center justify-center gap-4 mx-6'>
                    <button className='bg-[#0c1e45] text-gray-400 font-bold py-2 px-4 rounded'>Subscribe</button>
                    <button className='bg-[#0c1e45] text-gray-400 font-bold py-2 px-4 rounded'>Join</button>
                </div>
            </div>


            <div className='flex justify-evenly'>
            <div className="flex mt-20 mb-16 ml-4 gap-28 ">
                <div className="flex items-center justify-center w-[600px] h-[600px] duration-500 bg-[#0c1e45] rounded-lg hover:items-start hover:pt-10 hover:h-[500px] hover:w-[800px]">
                <div className="relative inline-block transition duration-500 ease-in-out group delay-10 hover:-translate-y-2 hover:scale-110"> 
                <div className="h-[320px] w-[700px] pb-10 flex justify-center">
                <img className="object-cover h-full" src="/image/bitcoin.jpeg" alt="image" />
                </div>

                <div className="absolute hidden text-white mt text-m group-hover:block">
                <div className="font-semibold">   
                <span>Bitcoin is an innovative payment network and and a new kind of money</span></div>
                <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                </div>
            </div>
            </div>


            <div className='flex flex-col'>
                <div className="flex mt-4 mb-8 ml-4 gap-28 ">
                    <div className="flex items-center justify-center w-[600px] h-96 duration-500 bg-[#0c1e45] rounded-lg hover:items-start hover:pt-10 hover:h-[500px] hover:w-[800px]">
                    <div className="relative inline-block transition duration-500 ease-in-out group delay-10 hover:-translate-y-2 hover:scale-110"> 
                    <div className="h-[320px] w-[600px] pb-10 flex justify-center">
                    <img className="object-cover h-full" src="/image/chain.jpg" alt="image" />
                    </div>

                    <div className="absolute hidden text-white mt text-m group-hover:block">
                    <div className="font-semibold">   
                    <span>Has blockchain found a use beyond crypto trading ?</span></div>
                    <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    </div>
                </div>
                </div>

                <div className="flex mt-4 mb-8 ml-4 gap-28 ">
                    <div className="flex items-center justify-center w-[600px] h-96 duration-500 bg-[#0c1e45] rounded-lg hover:items-start hover:pt-10 hover:h-[500px] hover:w-[800px]">
                    <div className="relative inline-block transition duration-500 ease-in-out group delay-10 hover:-translate-y-2 hover:scale-110"> 
                    <div className="h-[320px] w-[600px] pb-10 flex justify-center">
                    <img className="object-cover h-full" src="/image/nft.jpg" alt="image" />
                    </div>

                    <div className="absolute hidden text-white mt text-m group-hover:block">
                    <div className="font-semibold">   
                    <span>OpeaSea sees Explosive demand for 'Vitalik' NFT collection</span></div>
                    <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    </div>
                </div>
                </div>

            </div>
            </div>

            
                
                    {/*<img className="object-cover h-96" src="/image/bitcoin.jpeg" alt="image" />*/}
                


            <div>
                

            </div>
    </main>

    
);
};

export default Hero
