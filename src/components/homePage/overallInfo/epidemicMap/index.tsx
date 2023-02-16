import React, {useEffect} from 'react';
import * as echarts from "echarts";
import "echarts/map/js/china.js";
import {getProvinceData} from "../../../../api";

const getData = (array: {xArea: string,confirm: string,curConfirm: string}[], name: "confirm" | "curConfirm") => {
    return array.map((item) => {
        return ({name: item.xArea, value: item[name]});
    });
}

const getMap = (id: string, dataArr: {name: string, value: string}[]) => {
    console.log(document.getElementById(id));
    // @ts-ignore
    let myChart = echarts.init(document.getElementById(id));
    console.log(myChart)
    // 绘制图表
    const option = {
        tooltip: {
            triggerOn: "click",
            enterable: true,
            formatter(data: {name: string, value: string}) {
                return `<a style="color:white" href="/province/${data.name}">&nbsp; ${data.name}: ${data.value} &nbsp; | &nbsp; 查看详情 > </a> `;
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
    useEffect(() => {
        getProvinceData().then(res => {
            getMap("confirmedMap", getData(res.data.retdata, "confirm"))
            getMap("curConfirmedMap", getData(res.data.retdata, "curConfirm"))
        })
    }, [])
    return (
        <div id="epidemicMap" className="h-96">
            <h1>疫情地图</h1>
            <h1>累计确诊</h1>
            <div id="confirmedMap" className="h-full"></div>
            <h1>现存确诊</h1>
            <div id="curConfirmedMap" className="h-full"></div>
        </div>
    );
};

export default EpidemicMap;
