'use client';
import React from 'react';
import { useState, useEffect } from 'react';

interface Props {
    description: string;
}

const HoverDesc = (props: Props) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    // effect hook to get mouse position constantly
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePos({ x: event.pageX, y: event.pageY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    if (props.description == null) {
        return <div></div>;
    } else {
        return (
            <div
                // attach div to mousePos
                className="rounded-xl absolute z-10 w-1/4 p-5 bg-stone-200 opacity-80 text-slate-800"
                style={{
                    left: `${mousePos.x + 10}px`,
                    top: `${mousePos.y + 10}px`,
                }}
            >
                {/* quick fix to escape null state initally */}
                {props.description.length < 100
                    ? props.description
                    : props.description.substring(0, 100) + '...'}
            </div>
        );
    }
};

export default HoverDesc;
