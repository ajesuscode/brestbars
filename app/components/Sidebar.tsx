import React from "react";
import { BarFilters } from "./BarFilters";
import { BarExplorer } from "./BarExplorer";
import { BarTypes } from "@/app/types/types";

interface SidebarProps {
    bars: BarTypes[];
}

export const Sidebar = ({ bars }: SidebarProps) => {
    return (
        <div className="w-96 bg-zinc-800/90 h-full flex flex-col jutify-start items-start p-4">
            <div className="text-zinc-200 text-4xl py-8 overflow-y-auto">
                Trouvez le bar qu'il vous faut selon votre humeur
            </div>
            <div className="flex flex-col justify-start items-start gap-4  py-8">
                <span className="text-zinc-200 text-2xl font-medium">
                    Ou boire a Brest ?
                </span>
                <BarFilters />
            </div>
            <div className="overflow-y-auto">
                <BarExplorer />
            </div>
        </div>
    );
};
