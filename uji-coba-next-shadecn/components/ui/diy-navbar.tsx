import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DialogTitle } from "@/components/ui/dialog"
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { JSX, SVGProps } from "react";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@/components/ui/tabs"

const DiyNavbar = () => {
    return (
        <header className="flex h-20 w-full shrink-0 sticky top-0 z-10 items-center px-4 md:px-40 bg-white">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="lg:hidden">
                        <MenuIcon className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <VisuallyHidden>
                        <DialogTitle>Navigation Menu</DialogTitle>
                    </VisuallyHidden>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-redplt">
                        FindUrLover
                    </span>
                    <div className="grid gap-2 py-6">
                        <Link href="/" className="flex w-full items-center py-2 text-lg font-semibold hover:text-redplt transition-transform duration-300 ease-in-out hover:scale-105" prefetch={false}>
                            Home
                        </Link>
                        <Link href="find-lover" className="flex w-full items-center py-2 text-lg font-semibold hover:text-redplt transition-transform duration-300 ease-in-out hover:scale-105" prefetch={false}>
                            Find Lover
                        </Link>
                        <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold hover:text-redplt transition-transform duration-300 ease-in-out hover:scale-105" prefetch={false}>
                            Account
                        </Link>
                    </div>
                </SheetContent>
            </Sheet>
            <Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-redplt">
                    FindUrLover
                </span>
            </Link>
            <nav className="mx-auto hidden lg:flex items-center justify-between gap-6">
                <Link
                    href="/"
                    className="group inline-flex h-9 w-max items-center font-semibold justify-center px-4 py-2 hover:text-redplt transition-transform duration-300 ease-in-out hover:scale-105"
                    prefetch={false}
                >
                    Home
                </Link>
                <Link
                    href="/find-lover"
                    className="group inline-flex h-9 w-max items-center font-semibold justify-center px-4 py-2 hover:text-redplt transition-transform duration-300 ease-in-out hover:scale-105"
                    prefetch={false}
                >
                    Find Lover
                </Link>
                <Link
                    href="#"
                    className="group inline-flex h-9 w-max items-center font-semibold justify-center px-4 py-2 hover:text-redplt transition-transform duration-300 ease-in-out hover:scale-105"
                    prefetch={false}
                >
                    Account
                </Link>
            </nav>
            <Link href="/" className="ml-5 felx lg:hidden" prefetch={false}>
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-redplt">
                    FindUrLover
                </span>
            </Link>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button type="button" className="ml-auto lg:ml-0 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2 me-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        Sign In
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[410px]">
                    <Tabs defaultValue="sign-in" className="w-[400px]">
                        <TabsList className="grid ml-5 mr-5 grid-cols-2 mt-8">
                            <TabsTrigger value="sign-in">Sign In</TabsTrigger>
                            <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
                        </TabsList>
                        <TabsContent value="sign-in">
                            <div className="flex items-center justify-center">
                                <div className="p-8 w-full max-w-md">
                                    <h2 className="text-2xl font-semibold text-gray-800">
                                        Sign In
                                    </h2>
                                    <p className="mb-6 mt-1 text-sm text-gray-500">Welcome!, or click Sign Up to create a new account</p>
                                    <form>
                                        <div className="space-y-4">
                                            <div className="space-y-1">
                                                <Label htmlFor="current">Username</Label>
                                                <Input id="current" />
                                            </div>
                                            <div className="space-y-1">
                                                <Label htmlFor="new">Password</Label>
                                                <Input id="new" type="password" />
                                            </div>
                                            <button type="submit" className="w-full py-2 px-4 font-bold text-white rounded-full bg-redplt hover:bg-darkredplt focus:ring-4 focus:ring-redplt dark:focus:ring-darkredplt shadow hover:shadow-lg transition transform hover:-translate-y-0.5">
                                                Sign In
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="sign-up">
                            <div className="flex items-center justify-center">
                                <div className="p-8 w-full max-w-md">
                                    <h2 className="text-2xl font-semibold text-gray-800">
                                        Sign Up
                                    </h2>
                                    <p className="mb-6 mt-1 text-sm text-gray-500">Welcome!, let&apos;s created a new account</p>
                                    <form>
                                        <div className="space-y-4">
                                            <div className="space-y-1">
                                                <Label htmlFor="current">Username</Label>
                                                <Input id="current" />
                                            </div>
                                            <div className="space-y-1">
                                                <Label htmlFor="new">Password</Label>
                                                <Input id="new" type="password" />
                                            </div>
                                            <button type="submit" className="w-full py-2 px-4 font-bold text-white rounded-full bg-redplt hover:bg-darkredplt focus:ring-4 focus:ring-redplt dark:focus:ring-darkredplt shadow hover:shadow-lg transition transform hover:-translate-y-0.5">
                                                Sign Up
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </DropdownMenuContent>
            </DropdownMenu>

        </header>
    )
}

export default DiyNavbar;

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}