import React, {useEffect} from 'react';
import {Data} from "./data";

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
    useEffect(() => {
        console.log(epidemicData)
    }, [])
    const formatDate = (time: number) => {//时间戳转日期
        const date = new Date(time);
        const y = date.getFullYear();
        let MM: string | number = date.getMonth() + 1;
        MM = MM < 10 ? ('0' + MM) : MM;
        let d: string | number = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        let h: string | number = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        let m: string | number = date.getMinutes();
        m = m < 10 ? ('0' + m) : m;
        let s: string | number = date.getSeconds();
        s = s < 10 ? ('0' + s) : s;
        return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
    }
    return (
        <div id="epidemicData">
            <h1 className="mb-1">疫情数据</h1>
            <div className="inline-block w-3 h-3 bg-teal-500 rounded-full border-solid border-2 border-gray-200 mr-2"></div>
            <span className="mb-2 text-gray-400 text-sm">最近更新时间: { formatDate(epidemicData.updateTime) }</span>
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