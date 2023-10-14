import React from 'react';

const WantToJoin = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <h1 className='text-6xl font-bold text-center title mt-10'>Want to <span className='spacialColor'>Join</span> Us?</h1>
            <p className='subtitle text-center font-bold py-4'>Invested shareholders must confirm payment and office address </p>

            <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center gap-9 my-20'>
                <div className="card w-96 shadow-xl bg-white relative">
                    <div className="absolute -top-3 -left-3 badge spacialBackGround text-white text-2xl py-5 font-bold rounded-md">1<sup>st</sup></div>
                    <div className="card-body">
                        <h2 className="card-title">
                            Commencement of business
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className='flex bg-[#F4F4F4] p-2 gap-2'>
                            <div className='w-28'>
                                <h1 className='text-blue-600 text-xl font-bold'>Due Date</h1>
                                <p>Within 180 days</p>
                            </div>
                            <div>
                                <h1 className='text-[#FF6666] text-xl font-bold'>Penalty fees</h1>
                                <p><span className='font-bold'>₹50,000</span> for the company</p>
                                <p><span className='font-bold'>₹1,000/</span>day for directors</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="card relative w-96 shadow-xl bg-white">
                    <div className="absolute -top-3 -left-3 badge spacialBackGround text-white text-2xl py-5 font-bold rounded-md">2<sup>nd</sup></div>
                    <div className="card-body">
                        <h2 className="card-title">
                        Auditor Appointment
                        </h2>
                        <p>Company informs new auditor and submits ADT.1 form to ROC.</p>
                        <div className='flex bg-[#F4F4F4] p-2 gap-8'>
                            <div className='w-28'>
                                <h1 className='text-blue-600 text-xl font-bold'>Due Date</h1>
                                <p>Within 30 days</p>
                            </div>
                            <div>
                                <h1 className='text-[#FF6666] text-xl font-bold'>Penalty fees</h1>
                                <p><span className='font-bold'>₹300</span> per month</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="card relative w-96 shadow-xl bg-white">
                    <div className="absolute -top-3 -left-3 badge spacialBackGround text-white text-2xl py-5 font-bold rounded-md">3<sup>rd</sup></div>
                    <div className="card-body">
                        <h2 className="card-title">
                        DIN eKYC
                        </h2>
                        <p>Directors share personal information for identification & verification</p>
                        <div className='flex bg-[#F4F4F4] p-2 gap-8'>
                            <div className='w-28'>
                                <h1 className='text-blue-600 text-xl font-bold'>Due Date</h1>
                                <p>Every Year</p>
                            </div>
                            <div>
                                <h1 className='text-[#FF6666] text-xl font-bold'>Penalty fees</h1>
                                <p><span className='font-bold'>₹5000</span> one time</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="card relative w-96 shadow-xl bg-white">
                    <div className="absolute -top-3 -left-3 badge spacialBackGround text-white text-2xl py-5 font-bold rounded-md">4<sup>th</sup></div>
                    <div className="card-body">
                        <h2 className="card-title">
                            DPT-3
                        </h2>
                        <p>Companies report money taken from people to ROC; auditors confirm details.</p>
                        <div className='flex bg-[#F4F4F4] p-2 gap-8'>
                            <div className='w-28'>
                                <h1 className='text-blue-600 text-xl font-bold'>Due Date</h1>
                                <p>Every Year</p>
                            </div>
                            <div>
                                <h1 className='text-[#FF6666] text-xl font-bold'>Penalty fees</h1>
                                <p><span className='font-bold'>₹300</span> per month</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="card relative w-96 shadow-xl bg-white">
                    <div className="absolute -top-3 -left-3 badge spacialBackGround text-white text-2xl py-5 font-bold rounded-md">5<sup>th</sup></div>
                    <div className="card-body">
                        <h2 className="card-title">
                        MCA Form AOC-4
                        </h2>
                        <p>It's like an official report card for a company's documents</p>
                        <div className='flex bg-[#F4F4F4] p-2 gap-8'>
                            <div className='w-28'>
                                <h1 className='text-blue-600 text-xl font-bold'>Due Date</h1>
                                <p>On or Before 30th November </p>
                            </div>
                            <div className=''>
                                <h1 className='text-[#FF6666] text-xl font-bold'>Penalty fees</h1>
                                <p><span className='font-bold'>₹200</span>  per day (No upper limit)*</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="card relative w-96 shadow-xl bg-white">
                    <div className="absolute -top-3 -left-3 badge spacialBackGround text-white text-2xl py-5 font-bold rounded-md">6<sup>th</sup></div>
                    <div className="card-body">
                        <h2 className="card-title">
                        MCA Form MGT-7
                        </h2>
                        <p>Companies must annually report activities and finances to the registrar.</p>
                        <div className='flex bg-[#F4F4F4] p-2 gap-8'>
                            <div className='w-28'>
                                <h1 className='text-blue-600 text-xl font-bold'>Due Date</h1>
                                <p>On or Before 31st December</p>
                            </div>
                            <div>
                                <h1 className='text-[#FF6666] text-xl font-bold'>Penalty fees</h1>
                                <p><span className='font-bold'>₹200</span>  per day (No upper limit)*</p>
                            </div>

                        </div>
                    </div>
                </div>
               

            </div>
            <p className='text-[17px]'>* For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 <span className='font-bold'>every day</span>  until you file the form . There is no maximum penalty amount. So, if you don't file the form for a year, you will owe ₹73,000 per form</p>
        </div>
    );
};

export default WantToJoin;