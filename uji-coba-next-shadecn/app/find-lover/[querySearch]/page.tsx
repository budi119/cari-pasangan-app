"use client";
import React, { useState } from 'react';
import { use } from "react";
import { useRouter } from 'next/navigation';
import {
    Card,
    CardContent,
    CardDescription,
    // CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command";


import {
    Mountain,
    Soup,
    Gamepad2,
    TicketsPlane,
} from "lucide-react"

import HighlightPeople from '@/components/ui/highlight-people';
import QueryResultCard from '@/components/ui/diy-query-result-card';

const SearchPage = ({
    params,
}: {
    params: Promise<{ querySearch: string }>
}) => {
    const router = useRouter();
    const { querySearch } = use(params);
    const [isHidden, setIsHidden] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');



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
        }, 100); // Tunggu sedikit untuk memungkinkan klik pada item sebelum menutup
    };

    return (
        // <div>SearchPage{params.searchQuery}</div>
        <div className="min-h-screen min-w-screen flex items-center justify-center bg-yellowplt">
            <div className="container grid grid-cols-1 p-8 sm:p-4">
                <section className="bg-yellowplt p-0 m-0">
                    <div className="container mx-auto sm:p-0 md:p-5 lg:p-10 xl:p-20">
                        <Card className="p-5">
                            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[1fr_4fr] mb-10 mt-5 p-5'>
                                <div className='flex justify-center items-center mb-5 md:mb-0 lg:mb-0'>
                                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-redplt">
                                        FindUrLover
                                    </span>
                                </div>
                                <div className='felx justify-center items-start'>
                                    <Command className="rounded-xl px-2 py-1  border shadow-md text-sm mx-auto">
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
                                </div>
                            </div>
                            <hr />
                            <CardHeader className='mt-5'>
                                <CardTitle >Search result for {decodeURIComponent(querySearch)}</CardTitle>
                                <CardDescription>We are recomended this people base on your search</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5'>
                                    <QueryResultCard nama="Lora" username="@lauraziphoraa" deskSingkat='Hobi memasak dan Tertarik dengan Budi Setyawan' foto='/talent/lora.jpg' />
                                    <QueryResultCard nama="Chelsea" username="@cesiann" deskSingkat='Hobi memasak dan Tertarik dengan Budi Setyawan' foto='/talent/cesian.jpg' />
                                    <QueryResultCard nama="Anin" username="@anin.dhitaa" deskSingkat='Hobi memasak dan Tertarik dengan Budi Setyawan' foto='/talent/anin.jpg' />
                                    <QueryResultCard nama="Cila" username="@kynchllaalexa" deskSingkat='Hobi memasak dan Tertarik dengan Budi Setyawan' foto='/talent/cila.jpg' />
                                    <QueryResultCard nama="Aldean" username="@aldean.tg" deskSingkat='Hobi balapan dan tertarik untuk balap dengan Budi Setyawan' foto='/talent/dean.jpg' />
                                    <QueryResultCard nama="Kevin" username="@kevinsusanto" deskSingkat='Hobi balapan dan tertarik untuk balap dengan Budi Setyawan' foto='/talent/kevin.jpg' />
                                    <QueryResultCard nama="L" username="@luthfihalimawan" deskSingkat='Hobi balapan dan tertarik untuk balap dengan Budi Setyawan' foto='/talent/L.png' />
                                    <QueryResultCard nama="Kairi" username="@kairirds" deskSingkat='Hobi balapan dan tertarik untuk balap dengan Budi Setyawan' foto='/talent/kairi.jpg' />
                                    <QueryResultCard nama="Lora" username="@lauraziphoraa" deskSingkat='Hobi memasak dan Tertarik dengan Budi Setyawan' foto='/talent/lora.jpg' />
                                    <QueryResultCard nama="Chelsea" username="@cesiann" deskSingkat='Hobi memasak dan Tertarik dengan Budi Setyawan' foto='/talent/cesian.jpg' />
                                    <QueryResultCard nama="Anin" username="@anin.dhitaa" deskSingkat='Hobi memasak dan Tertarik dengan Budi Setyawan' foto='/talent/anin.jpg' />
                                    <QueryResultCard nama="Cila" username="@kynchllaalexa" deskSingkat='Hobi memasak dan Tertarik dengan Budi Setyawan' foto='/talent/cila.jpg' />
                                    <QueryResultCard nama="Aldean" username="@aldean.tg" deskSingkat='Hobi balapan dan tertarik untuk balap dengan Budi Setyawan' foto='/talent/dean.jpg' />
                                    <QueryResultCard nama="Kevin" username="@kevinsusanto" deskSingkat='Hobi balapan dan tertarik untuk balap dengan Budi Setyawan' foto='/talent/kevin.jpg' />
                                    <QueryResultCard nama="L" username="@luthfihalimawan" deskSingkat='Hobi balapan dan tertarik untuk balap dengan Budi Setyawan' foto='/talent/L.png' />
                                    <QueryResultCard nama="Kairi" username="@kairirds" deskSingkat='Hobi balapan dan tertarik untuk balap dengan Budi Setyawan' foto='/talent/kairi.jpg' />
                                </div>

                            </CardContent>
                        </Card>
                    </div>
                </section>
            </div >
        </div >
    )
}

export default SearchPage