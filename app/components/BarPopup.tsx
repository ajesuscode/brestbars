"use client";
import React from "react";
import { Popup } from "react-leaflet";
import { BarTypes } from "@/app/types/types";

interface BarPopupProps {
    bar: BarTypes;
}

const BarPopup = ({ bar }: BarPopupProps) => {
    return (
        <Popup>
            <div className=" rounded-lg">
                <h2 className="font-bold text-lg">{bar.name}</h2>
                <p className="text-gray-600">{bar.address}</p>
                <div className="mt-2">
                    <a
                        href={bar.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        Visit website
                    </a>
                </div>
                <div className="mt-2">
                    <a
                        href={`tel:${bar.international_phone_number}`}
                        className="text-blue-500 hover:underline"
                    >
                        {bar.formatted_phone_number}
                    </a>
                </div>
                <div className="mt-2">
                    <a
                        href={bar.maps_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        View on Google Maps
                    </a>
                </div>
            </div>
        </Popup>
    );
};

export default BarPopup;
