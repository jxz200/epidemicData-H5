import React, {useEffect, useState} from 'react';

interface AppProp {
    to: string,
    title: string,
    active?: boolean,
    handleClick: Function,
    children?: React.ReactNode
}

const TabItem = ({to, title, active = false, handleClick}: AppProp) => {
    return (
        <a href={to}
           className={`h-full flex-1 flex justify-around items-center font-bold ${active ? "text-green-600" : ""}`}
           onClick={ () => handleClick(to)}
        >{title}</a>
    );
};

export default TabItem;