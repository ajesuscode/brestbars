"use client";

import React from "react";
import { BrestBarLogo } from "./BrestBarLogo";
import { HeaderButton } from "./HeaderButton";

export const Navbar = () => {
    return (
        <div className="w-full flex justify-between items-center px-4 bg-zinc-800 shadow-md py-4">
            <BrestBarLogo />
            <HeaderButton />
        </div>
    );
};
