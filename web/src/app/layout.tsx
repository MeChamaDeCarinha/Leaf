import type { Metadata } from "next";
import { Open_Sans } from 'next/font/google'
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Sakura",
    description: "Sakura",
    icons: { apple: "/logo-512x512.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={"w-[100dvw] h-[100dvh] bg-black overflow-hidden" + openSans.className}>{children}</body>
        </html>
    );
}
