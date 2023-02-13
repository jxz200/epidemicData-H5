import React, {useEffect, useState} from 'react';

interface AppProp {
    to: string,
    title: string,
    children?: React.ReactNode
}

const TabItem = ({to, title}: AppProp) => {
    const [active, setActive] = useState(false);
    return (
        <a href={to} className={`h-full flex-1 flex justify-around items-center ${active}`} onClick={() => setActive(true)}>{title}</a>
    );
};

export default TabItem;