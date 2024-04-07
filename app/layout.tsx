import React from 'react';
import './globals.css';
import SearchBar from '@/components/SearchBar';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="font-baloo bg-primary py-16 px-40">
                <SearchBar></SearchBar>
                {children}
            </body>
        </html>
    );
}
