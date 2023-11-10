"use client";
import { useEffect, useState } from "react";
import { MapBarComponent } from "./components/MapBarComponent";
import { BarTypes } from "./types/types";
import { Sidebar } from "./components/Sidebar";

export default function Home() {
    const [bars, setBars] = useState<BarTypes[]>([]);
    useEffect(() => {
        fetchBarPlaces();
    }, []);

    async function fetchBarPlaces() {
        try {
            const response = await fetch("https://api.brest.bar/items/bars");
            const barsData = await response.json();
            setBars(barsData.data);
        } catch (error) {
            console.log(error);
        }
    }
    console.log(bars);
    return (
        <main className="flex flex-row overflow-hidden min-h-screen">
            <Sidebar bars={bars} />
            <div className=""></div>
            {/* <MapBarComponent bars={bars} /> */}
        </main>
    );
}
