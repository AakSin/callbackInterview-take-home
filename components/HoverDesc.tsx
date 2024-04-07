'use client';
import React from 'react';
import { useState, useEffect } from 'react';
const HoverDesc = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePos({ x: event.pageX, y: event.pageY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return (
        <div
            className="absolute z-10"
            style={{
                left: `${mousePos.x + 10}px`,
                top: `${mousePos.y + 10}px`,
            }}
        >
            HoverDesc
        </div>
    );
};

export default HoverDesc;
