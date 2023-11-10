import React from "react";
import Link from "next/link";

export const BrestBarLogo = () => {
    return (
        <>
            <Link href="/">
                <div className="flex flex-row justify-center items-center gap-2">
                    <span className="text-4xl">🍻</span>
                    <span className="text-zinc-200 text-2xl">Brest</span>
                    <span className="text-2xl text-purple-800 font-bold">
                        Bar
                    </span>
                </div>
            </Link>
        </>
    );
};
