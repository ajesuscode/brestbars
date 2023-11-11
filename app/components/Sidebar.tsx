import React from "react";
import { BarFilters } from "./BarFilters";
import { BarExplorer } from "./BarExplorer";
import { BarTypes } from "@/app/types/types";
import SelectedBarDetails from "./SelectedBarDetails";

interface SidebarProps {
    bars: BarTypes[];
    selectedBar: BarTypes | null;
    setSelectedBar: (bar: BarTypes | null) => void;
}

export const Sidebar = ({
    bars,
    selectedBar,
    setSelectedBar,
}: SidebarProps) => {
    const handleGoBack = (): void => {
        setSelectedBar(null);
    };
    return (
        <div className="w-96 bg-zinc-800/90 h-full flex flex-col justify-start items-start p-4">
            {selectedBar ? (
                <div className="flex flex-col flex-grow overflow-y-auto min-h-screen">
                    <div className="w-full flex flex-row justify-start items-start pb-4">
                        <button
                            className="px-2 py-1 rounded-xl bg-zinc-600 hover:bg-zinc-400"
                            onClick={handleGoBack}
                        >
                            <span className="text-zinc-900 font-bold text-xs">
                                BACK
                            </span>
                        </button>
                    </div>

                    <SelectedBarDetails bar={selectedBar} />
                </div>
            ) : (
                <>
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
                </>
            )}
        </div>
    );
};
