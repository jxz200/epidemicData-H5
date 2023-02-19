import React, {useEffect, useState} from "react";
import {getEpidemicData, getNews} from "../../../api";
import EpidemicData from "./EpidemicData";
import EpidemicMap from "./epidemicMap";
import {Tabs} from "antd-mobile";
import EpidemicNews from "./epidemicNews";
import "./index.css"

const OverallInfo = () => {
    const [newsList, setNewsList] = useState<any[]>([]);
    const [epidemicData, setEpidemicData] = useState<any>({});
    const [activeKey, setActiveKey] = useState<string>("epidemicData")
    useEffect(() => {
        getNews().then(res => {
            const neededList = res.data.data.components[1].data.map((item: { item: any; }) => item.item.info.interactionInfo.shareInfo)
            setNewsList(neededList);
        });
        getEpidemicData().then(res => setEpidemicData(res.data.results[0]))
        const nodeList = document.querySelectorAll("article");
        const io = new IntersectionObserver(entries => {
            entries.forEach(item => {
                if (item.isIntersecting) {
                    setActiveKey(item.target.id)
                }
            })
        })
        nodeList.forEach(component => io.observe(component))
    }, [])

    const handleTabsChange = (key: string) => {
        document.querySelector("#" + key)?.scrollIntoView()
        setActiveKey(key)
    }

    return <div className="-mt-3">
        <Tabs activeKey={activeKey}
              className="flex justify-center h-12 sticky top-0 bg-white overflow-hidden rounded-2xl z-10 mb-4 w-full p-0"
              onChange={handleTabsChange}>
            <Tabs.Tab title='疫情数据' key='epidemicData' className="flex-1"/>
            <Tabs.Tab title='疫情地图' key='epidemicMap' className="flex-1"/>
            <Tabs.Tab title='疫情热点' key='epidemicNews' className="flex-1"/>
        </Tabs>

        <section className="px-4">
            <article id="epidemicData">
                <EpidemicData epidemicData={epidemicData}></EpidemicData>
            </article>
            <article id="epidemicMap">
                <EpidemicMap></EpidemicMap>
            </article>
            <article id="epidemicNews">
                <EpidemicNews newsList={newsList}></EpidemicNews>
            </article>
        </section>
    </div>;
}

export default OverallInfo;