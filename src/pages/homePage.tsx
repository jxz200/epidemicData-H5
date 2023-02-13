import React, {useEffect, useState} from 'react';
import {getDataEachProvince} from "../api";
import EpidemicData from "../components/homePage/overallInfo/EpidemicData";
import EpidemicNews from "../components/homePage/overallInfo/epidemicNews";
import EpidemicMap from "../components/homePage/overallInfo/epidemicMap";

const HomePage = () => {
    const [newsList, setNewsList] = useState<any[]>([]);

    useEffect(() => {
        // getDataEachProvince().then(res => {
        //     const neededList = res.data.data.components[1].data.map((item: { item: any; }) => item.item.info.interactionInfo.shareInfo)
        //     setNewsList(neededList);
        // });
    },[])
    return (
        <div>
            <header className="bg-banner h-40 object-cover bg-cover">
                <h1 className="">新型冠状病毒</h1>
                <h1 className="">疫情实时数据报告</h1>
            </header>
            <main>
                <EpidemicNews></EpidemicNews>
                <EpidemicData></EpidemicData>
                <EpidemicMap></EpidemicMap>
            </main>
            <ul>
                {newsList.map((news, index) => <li key={index}> {news.title} </li>)}
            </ul>
        </div>
    );
};

export default HomePage;