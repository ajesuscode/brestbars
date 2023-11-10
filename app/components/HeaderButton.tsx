import React from "react";

export const HeaderButton = () => {
    return (
        <div className="flex flex-row justify-center items-center gap-2">
            <button className="bg-violet-600 rounded-md py-2 px-6">
                <span className="text-zinc-200 text-lg font-bold">
                    🙋‍♂️ Faire Demande
                </span>
            </button>
        </div>
    );
};
