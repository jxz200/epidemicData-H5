import React from "react";

export function Data(props: { confirmedCount: number, title: string }) {
    return <li className="flex-1 flex flex-col items-center justify-center text-lg">
        <p className="text-teal-500 font-bold mb-1 ">{props.title}</p>
        <span>{props.confirmedCount}</span>
    </li>;
}