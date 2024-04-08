import React from 'react';
import './globals.css';
import SearchBar from '@/components/SearchBar';
import Image from 'next/image';
import Logo from '../public/images/icons/callback-logo.png';

export const metadata = {
    title: 'Callback',
    description: 'Access NFTs for your addresss',
    icons: {
        icon: '../public/favicon.ico',
    },
};

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
                        className="w-36 py-4 pr-2"
                    />
                    <h1 className="text-8xl h-fit">CALLBACK</h1>
                </header>

                <SearchBar />

                {children}
            </body>
        </html>
    );
}
