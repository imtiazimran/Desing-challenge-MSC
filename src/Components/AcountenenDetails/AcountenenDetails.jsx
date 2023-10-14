import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const AccountantDetails = () => {
    const { Id } = useParams()
    const loaderData = useLoaderData()


    const targetedData = loaderData.find(item => item._id === Id)

    return (
        <div className="flex flex-col md:flex-row md:w-4/5 mx-auto">
            {/*-------------------------------- Left-side content------------------------------------ */}
            <div className="md:w-1/2 p-4">
                <div className="bg-white rounded shadow p-4">
                    <h2 className="text-2xl font-semibold">{targetedData.name}</h2>
                    <p className="text-gray-600 mt-2">{targetedData.intro}</p>
                    <div className="rating">
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#0076CE] mx-4" checked />
                        <span>{targetedData.rating} ({targetedData.reviewCount})</span>
                    </div>
                </div>

                {/* taskComplexity */}
                <div className="bg-white rounded shadow p-4 mt-4">
                    {/* taskComplexity content */}
                    <div>
                        <div className='flex flex-col md:flex-row justify-between'>
                            <p>{targetedData.taskComplexity}</p>
                            <p className='font-bold'>{targetedData.price}</p>
                        </div>
                        <p className='flex my-3'> <img className='w-7' src="https://logowik.com/content/uploads/images/calendar9737.jpg" alt="" />{targetedData.deliveryTime}</p>
                        <div className='flex flex-col md:flex-row gap-5 font-bold text-xl justify-center'>
                            <button className="btn rounded-md btn-active bg-[#0076CE] text-white hover:bg-blue-800">Requist Proposel</button>
                            <button className="btn rounded-md btn-outline border-[#0076CE] hover:bg-[#0076CE]">Chat With me</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded shadow p-4 mt-4">
                    {/* Testimonial content */}
                    <h1 className='font-bold text-xl text-center py-5'>What People Say About me ?</h1>
                    <div>
                        <p className='font-bold text-center my-3'>{targetedData.testimonial.author}</p>
                        <p>{targetedData.testimonial.text}</p>
                    </div>
                </div>
            </div>


            {/*----------------------------- Right-side content----------------------------------------- */}

            <div className="md:w-1/2 p-4">
                <img src={targetedData.image} alt={targetedData.name} className="rounded shadow" />
                {/* About */}
                <div className="bg-white rounded shadow p-4 mt-4">
                    <h2 className="text-[35px] py-[22px] font-semibold text-center">About {targetedData.name}</h2>
                    <div className='flex flex-col md:flex-row justify-between text-center'>
                        <div>
                            <p className="text-[#999999] text-[16px] font-bold mt-2">From</p>
                            <p>{targetedData.about.from}</p>
                        </div>
                        <div>
                            <p className="text-[#999999] text-[16px] font-bold  mt-2">Partnar Since</p>
                            <p>{targetedData.about.partnerSince}</p>
                        </div>
                        <div>
                            <p className="text-[#999999] text-[16px] font-bold  mt-2">AVERAGE RESPONSE TIME</p>
                            <p>{targetedData.about.averageResponseTime}</p>
                        </div>
                    </div>
                    <p className="text-[#999999] text-[16px] font-bold mt-4">About</p>
                    <p>{targetedData.about.description}</p>
                </div>

                {/* Services and Why Me */}
                <div className="bg-white rounded shadow p-4 mt-4 flex flex-col- md:flex-row justify-between">
                    <div>
                        <h2 className="text-[#999999] text-[16px] font-bold">Services I Offer</h2>
                        {
                            targetedData.about.services.map(item => (
                                <li>{item}</li>
                            ))
                        }
                    </div>
                    <div>
                        <h2 className="text-[#999999] text-[16px] font-bold">Why Me ?</h2>
                        {
                            targetedData.about.benefits.map(item => (
                                <li>{item}</li>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AccountantDetails;
