import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "./components/Navbar";
import "./globals.css";
import "mapbox-gl/dist/mapbox-gl.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Brest Bars",
    description: "Best Brest Bars selection",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-zinc-900 min-h-screen w-full overflow-hidden">
                <Navbar />
                {children}
            </body>
        </html>
    );
}
