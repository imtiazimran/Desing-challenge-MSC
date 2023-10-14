import React from 'react';
import promoteImg1 from "../../assets/Screenshot 2023-10-14 145111.png"
import promoteImg2 from "../../assets/Screenshot 2023-10-14 145125.png"
import promoteImg3 from "../../assets/Screenshot 2023-10-14 145141.png"
import promoteImg4 from "../../assets/Screenshot 2023-10-14 145153.png"
import avatar1 from "../../assets/Screenshot 2023-10-14 151503.png"
import avatar2 from "../../assets/Screenshot 2023-10-14 152219.png"

const Promote = () => {
    return (
        <div className='mt-[132px]'>
            <div className="hero min-h-screen bg-white grid-cols-1">
                <div className="hero-content flex-col-reverse md:flex-row-reverse justify-center items-center">
                    <div className='flex-1 mt-50'>
                        <div>
                            <div>
                                <div className='flex'>
                                    <div>
                                        <div className="chat chat-end">
                                            <div className="chat-bubble text-black text-[14px]  bg-[#EFD9F9]">Hey, check out loreumipsum services. </div>
                                        </div>
                                        <div className="chat chat-end">
                                            <div className="chat-bubble text-black text-[14px]  bg-[#EFD9F9]">I learned from their videos, got my first job</div>
                                        </div>
                                        <div className="chat chat-end">
                                            <div className="chat-bubble text-black text-[14px]  bg-[#EFD9F9]">You won't be disappointed with their services.</div>
                                        </div>

                                    </div>
                                    <div className='md:w-[270px] w-36'>
                                        <img src={avatar2} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col-reverse md:-mt-40'>

                                <div className='md:w-[270px] w-36 md:-mt-12'>
                                    <img src={avatar1} alt="" />
                                </div>
                                <div className='mt-5'>
                                    <div className="chat chat-start">
                                        <div className="chat-bubble text-black text-[14px]  bg-[#DDF3FF]">I got a perfect analysis report from them too</div>
                                    </div>
                                    <div className="chat chat-start w-1/3 mx-auto ml-48">
                                        <div className="chat-bubble text-black text-[14px]  bg-[#DDF3FF]">Oh, that's great.</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='flex-1'>
                        <h1 className="text-[65px] font-bold"><span className='spacialColor'> All-in-One</span> platform<br /> That Makes Easier</h1>
                        <p className="py-6">We are more than a platform; We are your success partner. Discover our services to achieve your business and educational goals</p>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-[32px]'>
                            <div className='flex gap-3'>
                                <div className='items-start flex p-1'><img className='w-[109px]' src={promoteImg1} alt="Movie" /></div>
                                <div className="card-body p-0">
                                    <p className='text-[20px]'> <span className='font-bold'>SEARCH</span> for vital company information </p>

                                </div>
                            </div>
                            <div className='flex gap-3'>
                                <div className='items-start flex p-1'><img className='w-[138px]' src={promoteImg4} alt="Movie" /></div>
                                <div className="card-body p-0">
                                    <p className='text-[20px]'><span className='font-bold'>CONNECT</span>  with the resources to meet your business needs</p>

                                </div>
                            </div>
                            <div className='flex gap-3'>
                                <div className='items-start flex p-1'><img className='w-[143px]' src={promoteImg2} alt="Movie" /></div>
                                <div className="card-body p-0">
                                    <p className='text-[20px]'><span className='font-bold'>RESEARCH</span>  and generate reports that drive growth </p>

                                </div>
                            </div>
                            <div className='flex gap-3'>
                                <div className='items-start flex p-1'><img className='w-[162px]' src={promoteImg3} alt="Movie" /></div>
                                <div className="card-body p-0">
                                    <p className='text-[20px]'><span className='font-bold'>ACADEMY</span>  to give you the skills for success in your career</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promote;