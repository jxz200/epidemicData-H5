import React from "react";

export function Title({title}: { title: string }) {
    return <div className="flex items-center mb-2">
        <div className="w-2 h-6 bg-theme mr-2"></div>
        <h1 className="text-xl font-bold">{title}</h1>
    </div>;
}