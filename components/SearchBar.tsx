'use client';

import React from 'react';
import { FormEvent } from 'react';
import { useState } from 'react';

const SearchBar = () => {
    const [address, setAddress] = useState('');
    return (
        <div>
            <input
                type="text"
                name="name"
                onChange={(event) => setAddress(event.target.value)}
            ></input>
            <a href={`../${address}/gallery`}>
                <button> Go</button>
            </a>
        </div>
    );
};

export default SearchBar;
