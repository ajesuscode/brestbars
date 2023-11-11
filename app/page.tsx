"use client";
import { useEffect, useState } from "react";
import { MapBarComponent } from "./components/MapBarComponent";
import { BarTypes } from "./types/types";
import { Sidebar } from "./components/Sidebar";
import { getAllBars } from "./utils/barsFetcher";
import { get } from "http";

export default function Home() {
    const [bars, setBars] = useState<BarTypes[]>([]);
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
    console.log("NEW BARS", bars);
    return (
        <main className="flex flex-row overflow-hidden min-h-screen">
            <Sidebar bars={bars} />
            <div className=""></div>
            <MapBarComponent bars={bars} />
        </main>
    );
}
