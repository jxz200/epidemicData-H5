import React from 'react';

interface AppProp {
    children: React.ReactNode
}
const Tab = ({children}:AppProp) => {
    return (
        <nav className="flex justify-around items-center h-12 sticky top-0 bg-white overflow-hidden rounded-2xl">
            {children}
        </nav>
    );
};

export default Tab;