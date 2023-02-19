import React, {useEffect} from 'react';
import * as echarts from "echarts";
import "echarts/map/js/china.js";
import {getProvinceData} from "../../../../api";
import {useDispatch, useSelector} from "react-redux";
import {provinceData, setProvinceData} from "../../../../store/provinceData/provinceDataCounter";
import {Title} from "../../../title";
import {RootState} from "../../../../store";

const getData = (array: { xArea: string, confirm: string, curConfirm: string }[], name: "confirm" | "curConfirm") => {
    return array.map((item) => {
        return ({name: item.xArea, value: item[name]});
    });
}

const getMap = (id: string, dataArr: { name: string, value: string }[]) => {
    // @ts-ignore
    let myChart = echarts.init(document.getElementById(id));
    // 绘制图表
    const option = {
        tooltip: {
            triggerOn: "click",
            enterable: true,
            formatter(data: { name: string, value: string }) {
                return `<a style="color:white" href="/#/province/${data.name}">&nbsp; ${data.name}: ${data.value} &nbsp; | &nbsp; 查看详情 > </a> `;
            },
        },
        visualMap: {
            //地图图例
            orient: "colomn", //水平排布
            show: true,
            left: 24,
            bottom: 15,
            showLabel: true,
            pieces: [
                //根据数据大小，各省显示不同颜色
                {
                    gte: 10000,
                    label: ">= 10000",
                    color: "#b80909",
                },
                {
                    gte: 1000,
                    lt: 9999,
                    label: "1000 - 9999",
                    color: "#e64546",
                },
                {
                    gte: 100,
                    lt: 999,
                    label: "100 - 999",
                    color: "#f57567",
                },
                {
                    gte: 10,
                    lt: 99,
                    label: "10 - 99",
                    color: "#ff9985",
                },
                {
                    gte: 1,
                    lt: 10,
                    label: "1-9",
                    color: "#ffe5db",
                },
            ],
        },
        geo: {
            //中国地图设置
            map: "china",
            scaleLimit: {
                min: 1,
                max: 3,
            },

            y: 20,
            label: {
                normal: {
                    show: true, //是否显示文字
                    fontSize: "8", //文字大小
                    color: "rgba(0,0,0,0.7)",
                },
            },
            itemStyle: {
                normal: {
                    areaColor: "#ffffff",
                    borderColor: "rgba(0, 0, 0, 0.2)",
                },
                emphasis: {
                    areaColor: "rgba(255,100,0,0.8)",
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: "rgba(0,0,0,0.5)",
                    borderWidth: 0,
                    shadowBlur: 20,
                },
            },
        },
        series: [
            {
                name: "中国",
                type: "map", //配置图表类型
                map: "china",
                roam: "是否允许自动缩放",
                geoIndex: 0,
                data: dataArr,
            },
        ],
    };
    // @ts-ignore
    myChart.setOption(option);
}

const EpidemicMap = () => {
    const allProvinceData = useSelector((state: RootState) => state.counter.value);
    useEffect(() => {
        getMap("confirmedMap", getData(allProvinceData, "confirm"))
        getMap("curConfirmedMap", getData(allProvinceData, "curConfirm"))
    }, [allProvinceData])
    return (
        <div id="epidemicMap" className="h-[56rem]">
            <Title title="疫情地图"/>
            <span
                className="inline-block w-3 h-3 bg-theme rounded-full border-solid border-2 border-gray-200 mr-2"></span>
            <span className="font-bold">累计确诊</span>
            <div id="confirmedMap" className="h-[25rem]"></div>
            <span
                className="inline-block w-3 h-3 bg-theme rounded-full border-solid border-2 border-gray-200 mr-2"></span>
            <span className="font-bold">现存确诊</span>
            <div id="curConfirmedMap" className="h-[25rem]"></div>
        </div>
    );
};

export default EpidemicMap;
