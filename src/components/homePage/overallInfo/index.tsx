import React, {useEffect, useState} from "react";
import {getEpidemicData, getNews, getProvinceData} from "../../../api";
import EpidemicData from "./EpidemicData";
import EpidemicMap from "./epidemicMap";
import {Tabs} from "antd-mobile";
import EpidemicNews from "./epidemicNews";
import "./index.css"
import { useThrottleFn } from 'ahooks'
import {provinceData, setProvinceData} from "../../../store/provinceData/provinceDataCounter";
import {useDispatch} from "react-redux";

const tabItems = [
    {key: "epidemicData"},
    {key: "epidemicMap"},
    {key: "epidemicNews"}
]

const tabHeight = 42

const OverallInfo = () => {
    const [newsList, setNewsList] = useState<any[]>([]);
    const [epidemicData, setEpidemicData] = useState<any>({});
    const [activeKey, setActiveKey] = useState<string>("epidemicData")
    const { run: handleScroll } = useThrottleFn(
        () => {
            let currentKey = tabItems[0].key
            for (const item of tabItems) {
                const element = document.querySelector( "#" + item.key)
                if (!element) continue
                const rect = element.getBoundingClientRect()
                if (rect.top <= tabHeight) {
                    currentKey = item.key
                } else {
                    break
                }
            }
            setActiveKey(currentKey)
        },
        {
            leading: true,
            trailing: true,
            wait: 100,
        }
    )

    useEffect(() => {
        getNews().then(res => {
            const neededList = res.data.data.components[1].data.map((item: { item: any; }) => item.item.info.interactionInfo.shareInfo)
            setNewsList(neededList);
        });
        getEpidemicData().then(res => setEpidemicData(res.data.results[0]))

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return <div className="-mt-3">
        <Tabs activeKey={activeKey}
              className="flex justify-center h-12 sticky top-0 bg-white overflow-hidden rounded-2xl z-10 mb-4 w-full p-0"
              onChange={(key) => document.querySelector("#" + key)?.scrollIntoView()}>
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