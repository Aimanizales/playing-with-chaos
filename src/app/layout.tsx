import type { Metadata } from 'next';

import { MainNav } from './components/MainNav';
// import './globals.css';

export const metadata: Metadata = {
    title: 'Aiman',
    description: '...',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
            </head>
            <body>
                <header>
                    <h1>Aiman</h1>
                    <MainNav />
                </header>
                <main>{children}</main>
                <footer>2024</footer>
            </body>
        </html>
    );
}