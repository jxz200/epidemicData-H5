import axios from "axios";

const getNews = () => {
    return axios.get("https://interface.sina.cn/app.news/24hours_news.d.json?conf=page&page=1&pageType=kangYiNewsFlash")
}

const getEpidemicData = () => {
    return axios.get("https://lab.isaaclin.cn/nCoV/api/overall")
}

const getProvinceData = () => {
    return axios.get("https://yspm.api.storeapi.net/api/94/219?format=json&appid=13935&sign=3908a8a8e8cbb5def9bbe9995d8bcaa6")
}

export {getNews, getEpidemicData, getProvinceData}