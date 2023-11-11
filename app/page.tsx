"use client";
import { useEffect, useState } from "react";
import { BarTypes } from "./types/types";
import { Sidebar } from "./components/Sidebar";
import { getAllBars } from "./utils/barsFetcher";
import dynamic from "next/dynamic";

const MapBarComponent = dynamic(() => import("./components/MapBarComponent"), {
    loading: () => <p>Loading map...</p>,
    ssr: false, // Disable server-side rendering
});

export default function Home() {
    const [bars, setBars] = useState<BarTypes[]>([]);
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const [selectedBar, setSelectedBar] = useState<BarTypes | null>(null);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        fetchBarPlaces();
    }, []);

    async function fetchBarPlaces() {
        try {
            const res = await getAllBars();
            setBars(res);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="flex flex-row overflow-hidden w-full h-full">
            <Sidebar
                bars={bars}
                selectedBar={selectedBar}
                setSelectedBar={setSelectedBar}
            />
            <MapBarComponent bars={bars} setSelectedBar={setSelectedBar} />
        </main>
    );
}
