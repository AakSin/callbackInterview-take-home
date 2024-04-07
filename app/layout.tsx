import React from 'react';
import './globals.css';
import SearchBar from '@/components/SearchBar';
import Image from 'next/image';
import Logo from '../public/images/icons/callback-logo.png';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="font-baloo bg-primary py-8 px-40">
                <header className="flex w-full text-center items-center justify-center">
                    <Image
                        src={Logo}
                        alt="Callback Logo"
                        height={0}
                        width={0}
                        className="w-1/6 py-4"
                    />
                    <h1 className="text-8xl h-fit">Callback</h1>
                </header>

                <SearchBar />

                {children}
            </body>
        </html>
    );
}
