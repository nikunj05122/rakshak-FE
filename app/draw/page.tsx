"use client";
import React, { useEffect, useState, useCallback } from "react";
import Map, {
    FullscreenControl,
    NavigationControl,
    MapRef,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Skeleton } from "@/components/ui/skeleton";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import MapboxDraw from "@mapbox/mapbox-gl-draw";

const Map_Box_Token = process.env.NEXT_PUBLIC_MAP_BOX_TOKEN;

export default function DrawPage() {
    const [viewport, setViewport] = useState<{
        latitude: number;
        longitude: number;
        zoom: number;
    } | null>(null);

    const [map, setMap] = useState<MapRef | null>(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            setViewport({
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude,
                zoom: 5,
            });
        });
    }, []);

    const onMapLoad = useCallback((event: any) => {
        setMap(event.target);
    }, []);

    useEffect(() => {
        if (!map) return;

        const draw = new MapboxDraw({
            displayControlsDefault: false,
            controls: {
                polygon: true,
                line_string: true,
                point: true,
                trash: true,
                combine_features: true,
                uncombine_features: true,
            },
        });

        map.addControl(draw);

        map.on("draw.create", updateArea);
        map.on("draw.delete", updateArea);
        map.on("draw.update", updateArea);

        function updateArea(e: any) {
            const data = draw.getAll();
            console.log("Polygon data:", data);
            // You can perform additional actions with the polygon data here
        }

        return () => {
            map.removeControl(draw);
        };
    }, [map]);

    return (
        <>
            {viewport && viewport.latitude && viewport.longitude ? (
                <div
                    className="rounded-xl flex-grow "
                    style={{
                        width: "-webkit-fill-available",
                        height: "100%",
                        position: "relative",
                    }}
                >
                    <Map
                        mapboxAccessToken={Map_Box_Token}
                        initialViewState={viewport}
                        onLoad={onMapLoad}
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                        mapStyle="mapbox://styles/mapbox/streets-v12"
                    >
                        <NavigationControl showCompass />
                        <FullscreenControl />
                    </Map>
                </div>
            ) : (
                <Skeleton className="h-full w-full rounded-xl" />
            )}
        </>
    );
}
