"use client";
import React from "react";

interface DrinkFiltersTypes {
    name: string;
    icon: string;
}

const drinkFilters: DrinkFiltersTypes[] = [
    {
        name: "Bar",
        icon: "🍹",
    },
    {
        name: "Brasserie",
        icon: "🍺",
    },
    {
        name: "Cave",
        icon: "🍷",
    },
];

export const BarFilters = () => {
    const handleBarFilter = (filetr: string) => {
        // implement bar filter with a provided filter name
        console.log("handleBarFilterCall");
    };
    return (
        <div className="flex flex-row justify-center items-center gap-4">
            {drinkFilters.map((filter: DrinkFiltersTypes, index: number) => {
                return (
                    <div
                        className="flex flex-col justify-center items-center cursor-pointer"
                        key={index}
                        onClick={() => handleBarFilter(filter.name)}
                    >
                        <div className="bg-zinc-700 rounded-lg p-8">
                            <div className="text-4xl">{filter.icon}</div>
                        </div>
                        <div className="text-lg text-zinc-200 mt-4">
                            {filter.name}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
