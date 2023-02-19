import React, {FC} from "react";

interface AppProps {
    title?: string;
    className?: string;
    // onClick?: Function;
}

export function TitleItem({title, className}: AppProps) {
    return <span
        className={`h-8 flex bg-gray-100 flex-1 justify-center mr-1 items-center ${className ? className : ""}`}>{title ? title : ""}</span>;
}