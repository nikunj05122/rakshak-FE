import { Navigation } from "lucide-react";
import { useState } from "react";

type LocationCardProps = {
    text: string;
    distance: string;
    color: string;
};

const LocationCard = ({ text, distance, color }: LocationCardProps) => {
    const [onHover, setOnHover] = useState<boolean>(false);
    return (
        <>
            <div className={`relative w-[290px] bg-white cursor-pointer`}>
                <div
                    className={`flex items-center space-y-1 p-2`}
                    onMouseOver={() => setOnHover(true)}
                    onMouseOut={() => setOnHover(false)}
                    style={
                        onHover
                            ? {
                                  backgroundColor: `${color}0d`,
                              }
                            : {}
                    }
                >
                    <Navigation
                        className={`h-6 w-6 flex items-center opacity-75`}
                        style={
                            onHover
                                ? {
                                      color,
                                  }
                                : {}
                        }
                    />
                    <div className="ml-4">
                        <p
                            className="text-base font-bold leading-none"
                            style={
                                onHover
                                    ? {
                                          color,
                                      }
                                    : {}
                            }
                        >
                            {text}
                        </p>
                        <p className="flex gap-2 font-medium text-xs opacity-75">
                            {distance}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LocationCard;
