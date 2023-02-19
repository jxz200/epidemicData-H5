import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {getProvinceData} from "../api";
import {provinceData, setProvinceData} from "../store/provinceData/provinceDataCounter";
import {useDispatch} from "react-redux";

const HomePage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [provinceName, setProvinceName] = useState<string>('选择省份')
    const dispatch = useDispatch();
    useEffect(() => {
        const decodedProvinceName = decodeURIComponent(location.pathname.split("/province/")[1]);
        setProvinceName(location.pathname === "/" ? '选择省份' : decodedProvinceName)
        getProvinceData().then(res => {
            const provinceDataList = res.data.retdata
            dispatch(setProvinceData(provinceDataList))
        })
    }, [location]);
    return (
        <div className="relative">
            <header className="bg-banner h-48 object-cover bg-cover pl-4 pt-12 tracking-wide text-white">
                <div
                    className="absolute top-4 right-4 w-24 h-8 flex items-center justify-center border-solid border border-transparent rounded-full bg-teal-100 hover:cursor-pointer"
                    onClick={() => navigate("/selectProvince")}>
                    <span className="mr-1 text-gray-600 text-sm tracking-wide">{provinceName}</span>
                    <i className="iconfont icon-down text-gray-600"></i>
                </div>
                <section className="mb-2">
                    <div className="flex items-center">
                        <i className="iconfont icon-virus text-4xl mr-1"></i>
                        <span className="text-xl">新型冠状病毒</span>
                    </div>
                    <h1 className="text-3xl font-bold">疫情实时数据报告</h1>
                </section>
                {provinceName !== "选择省份" &&
                    <div
                        className="flex items-center justify-center w-32 h-8 border-solid border border-transparent rounded-full bg-theme hover:cursor-pointer"
                        onClick={() => navigate("/")}>
                        <i className="iconfont icon-virus icon-home mr-1"></i>
                        <p>回到首页</p>
                    </div>
                }
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default HomePage;
