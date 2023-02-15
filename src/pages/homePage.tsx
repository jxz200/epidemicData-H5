import React, {useEffect, useState} from 'react';
import {getEpidemicData, getNews} from "../api";
import EpidemicData from "../components/homePage/overallInfo/EpidemicData";
import EpidemicNews from "../components/homePage/overallInfo/epidemicNews";
import EpidemicMap from "../components/homePage/overallInfo/epidemicMap";
import Tab from "../components/homePage/tab";
import TabItem from "../components/homePage/tabItem";

const HomePage = () => {
    const [newsList, setNewsList] = useState<any[]>([]);
    const [epidemicData, setEpidemicData] = useState<any>({});
    const handleTabClick = (to: string) => {
        console.log(to)
    }
    useEffect(() => {
        getNews().then(res => {
            const neededList = res.data.data.components[1].data.map((item: { item: any; }) => item.item.info.interactionInfo.shareInfo)
            setNewsList(neededList);
        });
        getEpidemicData().then(res => setEpidemicData(res.data.results[0]))
    }, [])
    return (
        <div>
            <header className="bg-banner h-36 object-cover bg-cover px-4 py-12 tracking-wide">
                <section className="text-white">
                    <h1 className="text-lg">新型冠状病毒</h1>
                    <h1 className="text-3xl font-bold">疫情实时数据报告</h1>
                </section>
            </header>
            <main className="-mt-3">
                <Tab>
                    <TabItem to="#epidemicNews" title="疫情热点" handleClick={handleTabClick}></TabItem>
                    <TabItem to="#epidemicData" title="疫情数据" handleClick={handleTabClick}></TabItem>
                    <TabItem to="#epidemicMap" title="疫情地图" handleClick={handleTabClick}></TabItem>
                </Tab>
                <section className="px-4">
                    {/*<EpidemicNews newsList={newsList}></EpidemicNews>*/}
                    <EpidemicData epidemicData={epidemicData}></EpidemicData>
                    <EpidemicMap></EpidemicMap>
                </section>


                {/*<Tabs className="text-white">*/}
                {/*    <Tabs.Tab title='水果' key='fruits'/>*/}
                {/*    <Tabs.Tab title='蔬菜' key='vegetables'/>*/}
                {/*    <Tabs.Tab title='动物' key='animals'/>*/}
                {/*</Tabs>*/}
            </main>
        </div>
    );
};

export default HomePage;