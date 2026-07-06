"use client"

import { useState } from "react";

interface Props {
    value?: number;
}


export const CartCounter = ({value = 0}:Props) => {

    const [count, setCount] = useState(value);

    const handleAdd = () => setCount(count + 1);
    const handleSubstract = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <>
            <span className="text-9xl">{count}</span>

            <div className="flex">
                <button
                    onClick={handleAdd}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-25 mr-2"
                >
                    +1
                </button>

                <button
                    onClick={handleSubstract}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-25 mr-2"
                >
                    -1
                </button>
            </div>
        </>
    )
}