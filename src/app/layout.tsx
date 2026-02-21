import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.scss';
import {Analytics} from '@vercel/analytics/next';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: 'Synapse LABS S.R.L.',
    description: 'We are a software development company providing IT consulting and robust software solutions for your needs.',
    icons: {
        icon: '/favicon.ico'
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        {children}
        </body>
        <Analytics/>
        </html>
    );
}
