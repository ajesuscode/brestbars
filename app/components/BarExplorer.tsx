"use client";
import React, { useState, useEffect } from "react";
import { BarCard } from "./BarCard";
import { BarTypes } from "@/app/types/types";
import { getAllBars } from "../utils/barsFetcher";

export const BarExplorer = () => {
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
    return (
        <div className="flex flex-col justify-center items-center gap-4 w-full">
            <div className="flex flex-row justify-between items-center p-4 w-full gap-28">
                <span className="text-zinc-200 text-xl font-bold">
                    Explorer
                </span>
                <button className="bg-violet-600 rounded-md py-2 px-6">
                    <span className="text-zinc-200 text-lg font-medium">
                        Filter ✍️
                    </span>
                </button>
            </div>
            <div
                className="overflow-y-auto w-full"
                style={{ height: "calc(100vh - 200px)" }}
            >
                {bars.map((bar: BarTypes) => (
                    <div key={bar.id} className="pb-4">
                        <BarCard bar={bar} />
                    </div>
                ))}
            </div>
        </div>
    );
};
