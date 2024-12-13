"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command";
import HighlightPeople from '@/components/ui/highlight-people';

import {
    Mountain,
    Soup,
    Gamepad2,
    TicketsPlane,
} from "lucide-react"

const FindLover = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const openSearchbar = () => {
        setIsOpen((prev) => !prev);
    };

    const inputQuery = (e: React.FormEvent<HTMLInputElement>) => {
        setSearchQuery(e.currentTarget.value);
    };
    const pushQuery = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            console.log("Search Query:", searchQuery);
            router.push(`/find-lover/${searchQuery}`);
        }
    };

    const handleFocus = () => {
        setIsHidden(true);
    };

    const handleBlur = () => {
        setTimeout(() => {
            setIsHidden(false);
        }, 100);
    };
    return (
        <div className="min-h-screen min-w-screen flex items-center justify-center bg-yellowplt">
            <div className="container grid grid-cols-1 p-8 sm:p-4">
                <span className="text-6xl font-semibold text-redplt mb-8 mx-auto ">
                    FindUrLover
                </span>
                <div>

                </div>
                <button onClick={openSearchbar} className="inline-flex justify-center mx-auto max-w-64 mb-8 items-center py-3 px-7 font-bold text-center text-white rounded-full bg-redplt hover:bg-darkredplt focus:ring-4 focus:ring-redplt dark:focus:ring-darkredplt shadow hover:shadow-lg transition transform hover:-translate-y-0.5">
                    Find Lover &#9825;
                </button>

                {isOpen && (
                    <Command className="rounded-xl px-2 py-1 border shadow-lg md:min-w-[300px] max-w-lg text-sm mx-auto">
                        <CommandInput
                            placeholder="Try cewe mirip Maria Theodore di Bandung"
                            value={searchQuery}
                            onInput={inputQuery}
                            onKeyDown={pushQuery}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                        <CommandList className={`${isHidden ? "block" : "hidden"}`}>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup heading="Suggestions">
                                <CommandItem>
                                    <HighlightPeople image="/people/vonzy.jpg" name="Vonny Felicia" />
                                </CommandItem>
                                <CommandItem>
                                    <HighlightPeople image="/people/jefri.jpg" name="Jefri Nichol" />
                                </CommandItem>
                                <CommandItem>
                                    <HighlightPeople image="/people/sze.jpg" name="Sherly Jesslyn" />
                                </CommandItem>
                                <CommandItem>
                                    <HighlightPeople image="/people/dede.jpg" name="Dede Inoen" />
                                </CommandItem>
                            </CommandGroup>
                            <CommandSeparator />
                            <CommandGroup heading="Search by hobby">
                                <CommandItem>
                                    <Soup />
                                    <span>Cooking</span>
                                </CommandItem>
                                <CommandItem>
                                    <Gamepad2 />
                                    <span>Gaming</span>
                                </CommandItem>
                                <CommandItem>
                                    <Mountain />
                                    <span>Hiking</span>
                                </CommandItem>
                                <CommandItem>
                                    <TicketsPlane />
                                    <span>Travelling</span>
                                </CommandItem>
                                <CommandItem disabled>
                                    <span>And many more ...</span>
                                </CommandItem>
                            </CommandGroup>
                        </CommandList>
                    </Command>
                )}
            </div>
        </div>
    );
};

export default FindLover;
