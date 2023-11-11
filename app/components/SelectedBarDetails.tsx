import React from "react";
import { BarTypes } from "@/app/types/types";

interface SelectedBarDetailsProps {
    bar: BarTypes;
}

const SelectedBarDetails = ({ bar }: SelectedBarDetailsProps) => {
    return (
        <div className="flex flex-col h-full p-4 bg-zinc-800 text-white">
            <h2 className="text-2xl font-bold mb-2">{bar.name}</h2>
            <p className="text-md mb-4">{bar.address}</p>
            <a
                href={`tel:${bar.international_phone_number}`}
                className="mb-2 hover:text-blue-300"
            >
                {bar.formatted_phone_number}
            </a>
            <a
                href={bar.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 hover:text-blue-300"
            >
                Visit Website
            </a>
            <div className="mb-4">
                <span className="font-semibold">Rating:</span> {bar.rating} (
                {bar.user_ratings_total} reviews)
            </div>
            <a
                href={bar.maps_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
            >
                View on Google Maps
            </a>
        </div>
    );
};

export default SelectedBarDetails;
