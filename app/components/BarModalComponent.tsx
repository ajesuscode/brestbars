import React from "react";
import { BarTypes } from "../types/types";
interface BarModalProps {
    bar: BarTypes;
    closeModal: () => void;
}

export const BarModalComponent = ({ bar, closeModal }: BarModalProps) => {
    console.log(bar);
    return (
        <div className="relative  bg-violet-300 w-96 h-96 rounded-lg flex flex-col justify-start items-start p-6">
            <button
                className="absolute right-2 top-2 rounded-full bg-violet-800 p-4"
                onClick={closeModal}
            ></button>
            <div>{bar.name}</div>
            <div>{bar.address}</div>
        </div>
    );
};
