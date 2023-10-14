import React, { useState, useEffect } from 'react';
import axios from 'axios';
import headerImg1 from './../../assets/Screenshot_2.png';
import headerImg2 from './../../assets/Screenshot 2023-10-13 223519.png';
import headerImg3 from './../../assets/Screenshot 2023-10-13 223552.png';
import { Link } from 'react-router-dom';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    // Function to handle search
    const handleSearch = async (query) => {
        try {
            const response = await axios.get(`http://localhost:5000/search?query=${query}`);
            if (response.status === 200) {
                const data = response.data;
                setSearchResults(data);
                console.log(data);
            } else {
                // Handle errors here
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    // Use useEffect to listen for changes in searchQuery
    useEffect(() => {
        handleSearch(searchQuery); // Trigger search function on input change
    }, [searchQuery]);

    return (
        <div>
            <div className="hero min-h-screen my-[126px]">
                <div className="hero-content flex-row-reverse">
                    <div className='w-1/2'>
                        <div className='flex gap-[16px]'>
                            <div className='w-1/3 mt-[83px]'>
                                <img src={headerImg1} className="max-w-sm rounded-[20px] shadow-2xl w-full" alt="Header 1" />
                            </div>
                            <div className='w-1/3'>
                                <img src={headerImg2} className="max-w-sm rounded-[20px] shadow-2xl w-full" alt="Header 2" />
                            </div>
                            <div className='w-1/3 mt-[83px] '>
                                <img src={headerImg3} className="max-w-sm rounded-[20px] shadow-2xl w-full" alt="Header 3" />
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <h1 className="text-6xl font-bold">Find <span className='spacialColor'>Partners</span>  (CAs) <br /> available online</h1>
                        <p className="py-6"> <span className='font-bold'>CONNECT</span> with us where your services are listed and visible to a myriad <br /> of businesses seeking CA’s for compliance support</p>
                        <div>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered rounded-sm w-full max-w-xs"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button
                                className='bg-blue-600 p-3 text-white'
                                onClick={() => handleSearch(searchQuery)}
                            >Search</button>
                        </div>
                        <ul>
                            {searchResults.map(result => (
                                <li key={result._id}>
                                    <Link to={`/accountant/${result._id}`}>{result.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
