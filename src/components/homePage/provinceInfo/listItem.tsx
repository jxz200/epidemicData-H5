import React from "react";

interface AppProps {
    title?: string;
    className?: string;
}

export function ListItem({title, className}: AppProps) {
    return <span className={`h-8 flex flex-1 justify-center mr-1 items-center ${className? className : ""}`}>{title}</span>;
}