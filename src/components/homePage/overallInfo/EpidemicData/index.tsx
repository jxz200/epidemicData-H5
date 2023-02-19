import React from 'react';
import {Data} from "./data";
import {formatDate} from "../../../../utils/formatDate";
import {Title} from "../../../title";

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
        <div className="mb-4">
            <Title title="疫情数据"/>
            <div className="flex items-center mb-4">
                <div
                    className="inline-block w-3 h-3 bg-theme rounded-full border-solid border-2 border-gray-200 mr-2"></div>
                <span className="text-gray-400 text-sm">最近更新时间: {formatDate(epidemicData.updateTime)}</span>
            </div>
            <div className="shadow h-48 rounded-2xl flex flex-col justify-evenly">
                <ul className="flex">
                    <Data confirmedCount={epidemicData.confirmedCount} title="累计确诊"/>
                    <Data confirmedCount={epidemicData.curedCount} title="累计治愈"/>
                    <Data confirmedCount={epidemicData.currentConfirmedCount} title="现存确诊"/>
                </ul>
                <ul className="flex">
                    <Data confirmedCount={epidemicData.deadCount} title="累计死亡"/>
                    <Data confirmedCount={epidemicData.seriousCount} title="重症人数"/>
                    <Data confirmedCount={epidemicData.suspectedCount} title="疑似病例"/>`
                </ul>
            </div>
        </div>
    );
};

export default EpidemicData;