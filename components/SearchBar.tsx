'use client';

import React from 'react';

import { useState } from 'react';
import { useParams } from 'next/navigation';

const SearchBar = () => {
    const params = useParams();

    // get initial value from current address
    const [address, setAddress] = useState(params.address);
    return (
        <div className="text-center mb-12 flex justify-center items-center">
            <input
                className="rounded-full w-9/12 h-10 p-4 text-stone-950"
                type="text"
                name="name"
                onChange={(event) => setAddress(event.target.value)}
                value={address}
                placeholder="Enter Your Address..."
            ></input>
            <a href={`../${address}/gallery`}>
                <button className="rounded-full bg-blue-700 p-3 px-8 ml-4">
                    Go!
                </button>
            </a>
        </div>
    );
};

export default SearchBar;
