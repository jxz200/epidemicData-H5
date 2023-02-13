import axios from "axios";

const getDataEachProvince = () => {
    return axios.get("https://interface.sina.cn/app.news/24hours_news.d.json?conf=page&page=1&pageType=kangYiNewsFlash")
    //     .then((res: any) => {
    //     console.log(res.data.data.components[1].data.map((item: { item: any; }) => item.item.info.interactionInfo.shareInfo))
    // })
}

export {getDataEachProvince}