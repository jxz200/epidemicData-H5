import React from "react";

export function Data(props: { confirmedCount: number, title: string }) {
    return <li className="flex-1 flex flex-col items-center justify-center text-lg">
        <p className="text-green-500 font-bold mb-2 ">{props.title}</p>
        <span>{props.confirmedCount}</span>
    </li>;
}