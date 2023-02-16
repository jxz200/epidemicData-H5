import React from 'react';
import {Outlet} from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <header className="bg-banner h-36 object-cover bg-cover px-4 py-12 tracking-wide">
                <section className="text-white">
                    <h1 className="text-lg">新型冠状病毒</h1>
                    <h1 className="text-3xl font-bold">疫情实时数据报告</h1>
                </section>
            </header>
            <main >
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default HomePage;
