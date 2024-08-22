"use client";
import React, { useEffect, useState } from "react";
import Map, {
    FullscreenControl,
    GeolocateControl,
    Marker,
    NavigationControl,
    ScaleControl,
} from "react-map-gl";
import Image from "next/image";
import "mapbox-gl/dist/mapbox-gl.css";
import { Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import LocationCard from "@/components/commonComponents/dashboard/locationCard";
import {
    getOrganizationSelector,
    searchOrganizationAsync,
} from "@/redux/slice/organisation";
import { AppDispatch } from "@/redux/store";

const Map_Box_Token = process.env.NEXT_PUBLIC_MAP_BOX_TOKEN;

export default function DashboardPage() {
    const dispatch = useDispatch<AppDispatch>();
    const organization = useSelector(getOrganizationSelector);

    const [viewport, setViewport] = useState<{
        latitude: number;
        longitude: number;
        zoom: number;
    } | null>(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            setViewport({
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude,
                zoom: 5,
            });
        });
    }, []);

    const handleSearch = (name: string) => {
        if (name !== "") dispatch(searchOrganizationAsync({ name }));
    };

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
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                        mapStyle="mapbox://styles/mapbox/streets-v12"
                    >
                        <div className="p-4 w-[290px] max-h-[300px]">
                            <form>
                                <div className="relative w-[290px]">
                                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        type="search"
                                        placeholder="Search Location..."
                                        className="w-[290px] appearance-none bg-background pl-8 shadow-none"
                                        onChange={(e) =>
                                            handleSearch(e.target.value)
                                        }
                                    />
                                </div>
                            </form>
                            <div className="mt-1.5 rounded overflow-auto w-[306px]  h-[270px]">
                                <LocationCard
                                    text="Puna Police Station"
                                    distance="2.5 Km"
                                    color={"#ED5338"}
                                />
                                <LocationCard
                                    text="Puna Police Station"
                                    distance="2.5 Km"
                                    color={"#F6BE00"}
                                />
                                <LocationCard
                                    text="Puna Police Station"
                                    distance="2.5 Km"
                                    color={"#3E998F"}
                                />
                                <LocationCard
                                    text="Puna Police Station"
                                    distance="2.5 Km"
                                    color={"#3E998F"}
                                />
                                <LocationCard
                                    text="Puna Police Station"
                                    distance="2.5 Km"
                                    color={"#3E998F"}
                                />
                                <LocationCard
                                    text="Puna Police Station"
                                    distance="2.5 Km"
                                    color={"#3E998F"}
                                />
                                <LocationCard
                                    text="Puna Police Station"
                                    distance="2.5 Km"
                                    color={"#3E998F"}
                                />
                            </div>
                        </div>
                        <ScaleControl />
                        <GeolocateControl />
                        <NavigationControl showCompass />
                        <FullscreenControl />
                        <Marker longitude={72.0038272} latitude={21.7153536}>
                            <Image
                                src="/img/hospital-icon.svg"
                                className=""
                                width={70}
                                height={70}
                                alt="hospital icon"
                            />
                        </Marker>
                        <Marker longitude={73.968415156} latitude={21.7153536}>
                            <Image
                                src="/img/fire-icon.svg"
                                className=""
                                width={70}
                                height={70}
                                alt="hospital icon"
                            />
                        </Marker>
                        <Marker
                            longitude={73.968415156}
                            latitude={20.0007153536}
                        >
                            <Image
                                src="/img/police-icon.svg"
                                className=""
                                width={70}
                                height={70}
                                alt="hospital icon"
                            />
                        </Marker>
                    </Map>
                </div>
            ) : (
                <Skeleton className="h-full w-full rounded-xl" />
            )}
        </>
    );
}
