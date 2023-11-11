"use client";
import L from "leaflet";
import { MapContainer, Marker, TileLayer, Tooltip, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "react-leaflet-markercluster/dist/styles.min.css";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import React, { useEffect, useRef, useCallback, useMemo } from "react";
import { BarTypes } from "../types/types";
import BarPopup from "./BarPopup";

interface MapBarComponentProps {
    bars: BarTypes[];
    setSelectedBar: (bar: BarTypes | null) => void;
}

const MapBarComponent = ({ bars, setSelectedBar }: MapBarComponentProps) => {
    const centerPosition: L.LatLngTuple = [48.38, -4.486076];

    const mapRef = useRef<L.Map | null>(null);

    const zoomToMarker = useCallback((coordinates: L.LatLngTuple) => {
        mapRef.current?.flyTo(coordinates, 17);
    }, []);

    return (
        <div className="w-full flex-1">
            <MapContainer
                center={centerPosition}
                zoom={13}
                style={{ height: "100%", width: "100%" }}
                ref={mapRef}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    maxZoom={19}
                    attribution="© OpenStreetMap contributors"
                />
                <MarkerClusterGroup
                    showCoverageOnHover={false}
                    maxClusterRadius={50}
                    chunkedLoading={true}
                >
                    {bars.map((bar) => (
                        <Marker
                            key={bar.id}
                            position={[
                                bar.location.coordinates[1],
                                bar.location.coordinates[0],
                            ]}
                            eventHandlers={{
                                click: () => {
                                    zoomToMarker([
                                        bar.location.coordinates[1],
                                        bar.location.coordinates[0],
                                    ] as L.LatLngTuple);
                                    setSelectedBar(bar);
                                },
                            }}
                        >
                            <BarPopup bar={bar} />
                        </Marker>
                    ))}
                </MarkerClusterGroup>
            </MapContainer>
        </div>
    );
};

export default MapBarComponent;
