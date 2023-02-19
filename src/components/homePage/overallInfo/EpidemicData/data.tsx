import React from "react";

export function Data(props: { confirmedCount: number, title: string }) {
    return <li className="flex-1 flex flex-col items-center justify-center text-xl">
        <p className="text-theme font-bold mb-2 ">{props.title}</p>
        <span className="font-bold">{props.confirmedCount}</span>
    </li>;
}