import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.scss';
import {Analytics} from '@vercel/analytics/next';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: 'Synapse LABS S.R.L. | Software Development & IT Consulting',
    description: 'Synapse LABS is a premier software development company specializing in robust solutions, IT consulting, and high-performance digital products. Based in Brașov, Romania.',
    keywords: ['Software Development', 'IT Consulting', 'Web Development', 'Next.js', 'React', 'Synapse Labs', 'Andy Radulescu', 'Brașov IT'],
    authors: [{ name: 'Andy Rădulescu', url: 'https://github.com/AndyRadulescu/' }],
    creator: 'Andy Rădulescu',
    publisher: 'Synapse LABS S.R.L.',
    metadataBase: new URL('https://synapselabs.org'),
    alternates: {
        canonical: '/',
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/logo-1.png',
        other: {
            rel: 'apple-touch-icon-precomposed',
            url: '/logo-1.png',
        },
    },
    openGraph: {
        title: 'Synapse LABS S.R.L. | Software Development & IT Consulting',
        description: 'Forging digital excellence with robust software solutions and expert IT consulting.',
        url: 'https://synapselabs.org',
        siteName: 'Synapse LABS',
        images: [
            {
                url: '/logo-1.png',
                width: 800,
                height: 800,
                alt: 'Synapse LABS Logo',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Synapse LABS S.R.L. | Software Development & IT Consulting',
        description: 'Forging digital excellence with robust software solutions and expert IT consulting.',
        creator: 'andyradulescu@synapselabs.org',
        images: ['/logo-1.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
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
