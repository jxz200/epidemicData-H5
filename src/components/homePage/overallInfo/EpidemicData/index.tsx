import React from 'react';
import {Data} from "./data";
import {formatDate} from "../../../../utils/formatDate";

interface EpidemicData {
    confirmedCount: number,
    curedCount: number,

    currentConfirmedCount: number,

    deadCount: number,
    seriousCount: number,
    suspectedCount: number,
    updateTime: number
}

interface AppProps {
    epidemicData: EpidemicData,
    children?: React.ReactNode
}

const EpidemicData = ({epidemicData}: AppProps) => {
    return (
        <div id="epidemicData">
            <h1 className="mb-1">疫情数据</h1>
            <div className="flex items-center">
                <div className="inline-block w-3 h-3 bg-teal-500 rounded-full border-solid border-2 border-gray-200 mr-2"></div>
                <span className="mb-2 text-gray-400 text-sm">最近更新时间: { formatDate(epidemicData.updateTime) }</span>
            </div>
            <ul className="flex mb-2">
                <Data confirmedCount={epidemicData.confirmedCount} title="累计确诊"/>
                <Data confirmedCount={epidemicData.curedCount} title="累计治愈"/>
                <Data confirmedCount={epidemicData.currentConfirmedCount} title="现存确诊"/>
            </ul>
            <ul className="flex">
                <Data confirmedCount={epidemicData.deadCount} title="累计死亡"/>
                <Data confirmedCount={epidemicData.seriousCount} title="重症人数"/>
                <Data confirmedCount={epidemicData.suspectedCount} title="疑似病例"/>
            </ul>
        </div>
    );
};

export default EpidemicData;