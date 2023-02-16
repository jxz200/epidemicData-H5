import React, {useEffect, useState} from "react";
import {getEpidemicData, getNews} from "../../../api";
import Tab from "../tab";
import TabItem from "../tabItem";
import EpidemicData from "./EpidemicData";
import EpidemicMap from "./epidemicMap";

function handleClick() {

}

const OverallInfo = () => {
    const [, setNewsList] = useState<any[]>([]);
    const [epidemicData, setEpidemicData] = useState<any>({});
    useEffect(() => {
        getNews().then(res => {
            const neededList = res.data.data.components[1].data.map((item: { item: any; }) => item.item.info.interactionInfo.shareInfo)
            setNewsList(neededList);
        });
        getEpidemicData().then(res => setEpidemicData(res.data.results[0]))
    }, [])
    return <div className="-mt-3">
        <Tab>
            <TabItem to="#epidemicNews" title="疫情热点" handleClick={handleClick}></TabItem>
            <TabItem to="#epidemicData" title="疫情数据" handleClick={handleClick}></TabItem>
            <TabItem to="#epidemicMap" title="疫情地图" handleClick={handleClick}></TabItem>
        </Tab>
        <section className="px-4">
            {/*<EpidemicNews newsList={newsList}></EpidemicNews>*/}
            <EpidemicData epidemicData={epidemicData}></EpidemicData>
            <EpidemicMap></EpidemicMap>
        </section>
    </div>;
}

export default OverallInfo;