import React from 'react';

import headerImg1 from './../../assets/Screenshot_2.png'
import headerImg2 from './../../assets/Screenshot 2023-10-13 223519.png'
import headerImg3 from './../../assets/Screenshot 2023-10-13 223552.png'

const Header = () => {
    return (
        <div>
            <div className="hero min-h-screen my-[126px]">
                <div className="hero-content flex-row-reverse">
                    <div className='w-1/2'>
                        <div className='flex gap-[16px]'>
                            <div className='w-1/3 mt-[83px]'>
                                <img src={headerImg1} className="max-w-sm rounded-[20px] shadow-2xl w-full" />
                            </div>
                            <div className='w-1/3'>
                                <img src={headerImg2} className="max-w-sm rounded-[20px] shadow-2xl w-full" />
                            </div>
                            <div className='w-1/3 mt-[83px] '>
                                <img src={headerImg3} className="max-w-sm rounded-[20px] shadow-2xl w-full" />
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <h1 className="text-6xl font-bold">Find <span className='spacialColor'>Partners</span>  (CAs) <br /> available online</h1>
                        <p className="py-6"> <span className='font-bold'>CONNECT</span> with us where your services are listed and visible to a myriad <br /> of businesses seeking CA’s for compliance support</p>
                        <div>
                            <input type="text" placeholder="Type here" className="input input-bordered rounded-sm w-full max-w-xs" />
                            <button className='bg-blue-600 p-3 text-white' >Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;