import { CarouselItem } from "@/components/ui/carousel"
import React from "react";
import Link from "next/link"
import Image from "next/image";
interface DiyRecomendedPeopleProps {
    nama?: string;
    username?: string;
    deskSingkat?: string;
    foto: string;
    ig?: string;
    tt?: string;
    line?: string;
    namad?: string;
    usernamed?: string;
    deskSingkatd?: string;
    fotod: string;
    igd?: string;
    ttd?: string;
    lined?: string;
}

const DiyRecomendedPeople = ({
    nama,
    username,
    deskSingkat,
    foto,
    ig,
    tt,
    line,
    namad,
    usernamed,
    deskSingkatd,
    fotod,
    igd,
    ttd,
    lined,
}: DiyRecomendedPeopleProps) => {
    return (
        <CarouselItem>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="relative overflow-hidden rounded-3xl group">
                    <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                        <span className="sr-only">View Product</span>
                    </Link>
                    <Image
                        src={foto}
                        alt={`${nama || "User"}'s profile`}
                        width={600}
                        height={400}
                        className="object-cover w-full h-60 md:h-full"
                        style={{ aspectRatio: "600/400", objectFit: "cover" }}
                    />
                    {/* Overlay Text and Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                        <div className="absolute bottom-0 left-0 p-8 text-white">
                            <h3 className="text-lg font-semibold md:text-xl">{nama}</h3>
                            <p className="text-sm text-gray-200">{username}</p>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-3xl group">
                    <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                        <span className="sr-only">View Product</span>
                    </Link>
                    <Image
                        src={fotod}
                        alt={`${namad || "User"}'s profile`}
                        width={600}
                        height={400}
                        className="object-cover w-full h-60 md:h-full"
                        style={{ aspectRatio: "600/400", objectFit: "cover" }}
                    />
                    {/* Overlay Text and Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                        <div className="absolute bottom-0 left-0 p-8 text-white">
                            <h3 className="text-lg font-semibold md:text-xl">{namad}</h3>
                            <p className="text-sm text-gray-200">{usernamed}</p>
                        </div>
                    </div>
                </div>
            </div>
        </CarouselItem>

    );
};

export default DiyRecomendedPeople;
