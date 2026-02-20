import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Menu from '@/app/components/menu/menu';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Synapse LABS S.R.L.",
    description: "We are a software development company providing IT consulting and robust software solutions for your needs.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Menu/>
        {children}
        </body>
        </html>
    );
}
