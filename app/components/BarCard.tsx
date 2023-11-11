"use client";
import React, { useState } from "react";
import { BarModalComponent } from "./BarModalComponent";
import { BarTypes } from "../types/types";
import { useClickAway } from "@uidotdev/usehooks";

interface BarCardProps {
    bar: BarTypes;
}

export const BarCard = ({ bar }: BarCardProps) => {
    return (
        <div className="bg-zinc-700 rounded-lg p-4 w-full">
            <div className="flex flex-row justify-center items-center gap-2">
                <div className="flex flex-col justify-start items-start">
                    <div className="text-violet-400 text-sm font-bold">
                        Bar Type
                    </div>
                    <div className="text-2xl font-bold text-zinc-200">
                        {bar.name}
                    </div>
                    <div className="text-violet-400 text-sm fotn-medium">
                        {bar.address}
                    </div>
                </div>
                <button className="rounded-full bg-violet-800 p-4">
                    <span className="text-4xl">👁</span>
                </button>
            </div>
        </div>
    );
};
