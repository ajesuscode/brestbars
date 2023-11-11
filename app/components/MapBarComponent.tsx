"use client";
import { MapContainer, Marker, TileLayer, Tooltip, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import React, { useEffect } from "react";
import { BarTypes } from "../types/types";

interface MapBarComponentProps {
    bars: BarTypes[];
}

const MapBarComponent = ({ bars }: MapBarComponentProps) => {
    return (
        <div className="w-full flex-1">
            <MapContainer
                center={[48.38, -4.486076]}
                zoom={13}
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    maxZoom={19}
                    attribution="© OpenStreetMap contributors"
                />
                <Marker position={[48.38, -4.486076]}>
                    <Popup>Test Marker</Popup>
                </Marker>
                {bars.map((bar, index) => (
                    <Marker
                        key={index}
                        position={[
                            bar.location.coordinates[1],
                            bar.location.coordinates[0],
                        ]}
                    >
                        <Popup>{bar.name}</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default MapBarComponent;
