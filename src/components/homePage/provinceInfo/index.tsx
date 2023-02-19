import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../../store";
import {TitleItem} from "./titleItem";
import {ListItem} from "./listItem";

const ProvinceInfo = () => {
    const {provinceName} = useParams();
    const allProvinceData = useSelector((state: RootState) => state.counter.value);
    const cityData = allProvinceData.find(item => item.xArea === provinceName);
    return (
        <div className="px-2 pt-2 text-sm">
            <div className="flex justify-around h-6 mb-3">
                <TitleItem title="地区" className="flex-1.5"/>
                <TitleItem title="无症状"/>
                <TitleItem title="现有"/>
                <TitleItem title="累计"/>
                <TitleItem title="治愈"/>
                <TitleItem title="死亡" className="mr-0"/>
            </div>
            <div className="flex justify-around h-6 mb-3">
                <TitleItem title={provinceName} className="flex-1.5 bg-theme text-white"/>
                <TitleItem title={cityData?.asymptomatic}/>
                <TitleItem title={cityData?.curConfirm}/>
                <TitleItem title={cityData?.confirm}/>
                <TitleItem title={cityData?.heal}/>
                <TitleItem title={cityData?.died} className="mr-0"/>
            </div>
            {cityData?.subList.map((cityData, index) =>
                <div className="flex justify-around h-6 mb-3" key={index}>
                    <div className="h-8 flex-1.5 flex items-center text-theme">
                        <ListItem title={cityData.city} className="mr-1"></ListItem>
                        <i className="iconfont icon-right"></i>
                    </div>
                    <ListItem title={cityData?.asymptomatic}></ListItem>
                    <ListItem title={cityData?.curConfirm}></ListItem>
                    <ListItem title={cityData?.confirm}></ListItem>
                    <ListItem title={cityData?.heal}></ListItem>
                    <ListItem title={cityData?.died} className="mr-0"></ListItem>
                </div>)
            }
        </div>
    );
};

export default ProvinceInfo;
