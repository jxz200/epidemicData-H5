import React, {useEffect} from 'react';
import { IndexBar, List } from 'antd-mobile'
import {useNavigate} from "react-router-dom";

const groups = [
    {
        title: "A",
        items: ["安徽"],
    },
    {
        title: "B",
        items: ["北京"],
    },
    {
        title: "C",
        items: ["重庆"],
    },

    {
        title: "F",
        items: ["福建"],
    },
    {
        title: "G",
        items: ["甘肃", "广东", "广西", "贵州"],
    },
    {
        title: "H",
        items: ["海南", "河北", "河南", "黑龙江", "湖北", "湖南"],
    },
    {
        title: "J",
        items: ["吉林", "江苏", "江西"],
    },
    {
        title: "L",
        items: ["辽宁"],
    },
    {
        title: "N",
        items: ["内蒙古", "宁夏"],
    },
    {
        title: "Q",
        items: ["青海"],
    },
    {
        title: "S",
        items: ["山东", "山西", "陕西", "上海", "四川"],
    },
    {
        title: "T",
        items: ["天津"],
    },
    {
        title: "X",
        items: ["西藏", "新疆"],
    },
    {
        title: "Y",
        items: ["云南"],
    },
    {
        title: "z",
        items: ["浙江"],
    },
]
const SelectProvince = () => {
    const navigate = useNavigate();
    return (
        <div style={{ height: window.innerHeight }}>
            <IndexBar>
                {groups.map(group => {
                    const { title, items } = group
                    return (
                        <IndexBar.Panel
                            index={title}
                            title={`标题${title}`}
                            key={`标题${title}`}
                        >
                            <List>
                                {items.map((item, index) => (
                                    <List.Item key={index} onClick={() => navigate(`/province/${item}`)}>{item}</List.Item>
                                ))}
                            </List>
                        </IndexBar.Panel>
                    )
                })}
            </IndexBar>
        </div>
    );
};

export default SelectProvince;