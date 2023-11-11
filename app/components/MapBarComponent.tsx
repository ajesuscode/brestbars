"use client";
import React from "react";
import Map, { Marker } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import { BarTypes } from "../types/types";

interface MapBarComponentProps {
    bars: BarTypes[];
}

export const MapBarComponent = ({ bars }: MapBarComponentProps) => {
    const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
    console.log(mapboxToken);
    return (
        <div>
            <div className="text-zinc-200">MABBOX COMPONENT</div>
            <Map
                mapLib={import("mapbox-gl")}
                mapboxAccessToken={mapboxToken}
                initialViewState={{
                    longitude: -20,
                    latitude: -12,
                    zoom: 14,
                }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
            >
                {bars.map((bar: BarTypes) => {
                    <Marker
                        longitude={bar.location.coordinates[0]}
                        latitude={bar.location.coordinates[1]}
                        anchor="bottom"
                        key={bar.id}
                    >
                        <div>X</div>
                    </Marker>;
                })}
            </Map>
        </div>
    );
};
