"use client";
import React, { useState } from 'react';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import HighlightPeople from '@/components/ui/highlight-people';


const Page = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCommand = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center bg-yellowplt">
            {/* Logo */}
            <span className="text-6xl font-semibold text-redplt mb-8">
                FindUrLover
            </span>

            {/* Button to toggle Command */}
            <button
                onClick={toggleCommand}
                className="inline-flex justify-center items-center py-3 px-7 font-bold text-center text-white rounded-full bg-redplt hover:bg-darkredplt focus:ring-4 focus:ring-redplt dark:focus:ring-darkredplt shadow hover:shadow-lg transition transform hover:-translate-y-0.5"
            >
                {isOpen ? "Find Lover" : "Find Lover"}
            </button>

            {/* Command */}
            {isOpen && (
                <Command className="rounded-md px-2 py-1 border shadow-sm md:min-w-[300px] text-sm">
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
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
                    </CommandList>
                </Command>
            )}
        </div>
    );
};

export default Page;
