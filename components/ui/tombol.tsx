'use client';
import { useState } from "react";
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from 'axios';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@/components/ui/tabs";

const Tombol = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");  // Menyimpan username
    const [error, setError] = useState("");
    const [signUpError, setSignUpError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    // Handle Sign In
    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        const username = (document.getElementById("username") as HTMLInputElement).value;
        const password = (document.getElementById("password") as HTMLInputElement).value;

        try {
            const response = await axios.post("/api/login", { username, password });
            if (response.data.success) {
                setUserName(response.data.user.username);  // Menyimpan username dari database
                setIsLoggedIn(true);  // Mark as logged in
                setSuccessMessage("Login successful!");
            } else {
                setError(response.data.message);
            }
        } catch (err) {
            setError("Login failed. Please try again.");
        }
    };

    // Handle Sign Up
    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
    
        const username = (document.getElementById("signup-username") as HTMLInputElement).value;
        const password = (document.getElementById("signup-password") as HTMLInputElement).value;
    
        try {
            const response = await axios.post("/api/signup", { username, password });
    
            if (response.data.success) {
                alert(`User created successfully. User ID: ${response.data.userId}`);
                setUserName(username);  // Set username setelah registrasi berhasil
                setIsLoggedIn(true);
            } else {
                alert(response.data.message || "Sign Up failed.");
            }
        } catch (error) {
            console.error("Sign Up Error:", error);
            alert("An error occurred during Sign Up.");
        }
    };

    // Handle Logout
    const handleLogout = async () => {
        try {
            const response = await axios.post("/api/logout");
    
            if (response.data.success) {
                setUserName("");  // Clear the username
                setIsLoggedIn(false);  // Mark as logged out
                alert("Successfully logged out.");
            } else {
                alert(response.data.message || "Logout failed.");
            }
        } catch (error) {
            console.error("Logout Error:", error);
            alert("An error occurred while logging out.");
        }
    };

    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button
                        type="button"
                        className="ml-auto text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2 me-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    >
                        {isLoggedIn ? userName : "Sign In"}
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[410px]">
                    {isLoggedIn ? (
                        <div className="p-4">
                            <p className="text-gray-800 font-medium">
                                Welcome, <span className="font-bold">{userName}</span>!
                            </p>
                            {successMessage && (
                                <p className="text-green-500 text-sm">{successMessage}</p>
                            )}
                            <button
                                onClick={handleLogout}
                                className="w-full mt-4 py-2 px-4 font-bold text-white rounded-full bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-500 dark:focus:ring-red-600 shadow hover:shadow-lg transition transform hover:-translate-y-0.5"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
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
                                        {error && (
                                            <p className="text-red-500 text-sm">{error}</p>
                                        )}
                                        <form onSubmit={handleSignIn}>
                                            <div className="space-y-4">
                                                <div className="space-y-1">
                                                    <Label htmlFor="username">Username</Label>
                                                    <Input id="username" />
                                                </div>
                                                <div className="space-y-1">
                                                    <Label htmlFor="password">Password</Label>
                                                    <Input id="password" type="password" />
                                                </div>
                                                <button
                                                    type="submit"
                                                    className="w-full py-2 px-4 font-bold text-white rounded-full bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-500 dark:focus:ring-red-600 shadow hover:shadow-lg transition transform hover:-translate-y-0.5"
                                                >
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
                                        {signUpError && (
                                            <p className="text-red-500 text-sm">{signUpError}</p>
                                        )}
                                        <form onSubmit={handleSignUp}>
                                            <div className="space-y-4">
                                                <div className="space-y-1">
                                                    <Label htmlFor="signup-username">Username</Label>
                                                    <Input id="signup-username" />
                                                </div>
                                                <div className="space-y-1">
                                                    <Label htmlFor="signup-password">Password</Label>
                                                    <Input id="signup-password" type="password" />
                                                </div>
                                                <button
                                                    type="submit"
                                                    className="w-full py-2 px-4 font-bold text-white rounded-full bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-500 dark:focus:ring-red-600 shadow hover:shadow-lg transition transform hover:-translate-y-0.5"
                                                >
                                                    Sign Up
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    )}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default Tombol