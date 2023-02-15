import React, {useEffect} from 'react';

interface AppProps {
    newsList: News[];
    children?: React.ReactNode;
}

interface News {
    customTitle: string,
    imgUrl: string,
    intro: string,
    link: string,
    title: string
}

const EpidemicNews = ({newsList}: AppProps) => {
    useEffect(() => {
        console.log(newsList)
    },[])
    return (
        <div id="epidemicNews">
            <i></i>
            <h1 className="mb-2">疫情热点</h1>
            <ul>
                {newsList.map((news: News, index: number) =>
                    <li key={index}>
                        <a href={news.link} target="_blank" className="flex flex-col items-center mb-6 bg-gray-100 rounded-2xl overflow-hidden">
                            <div className="h-48 w-full">
                                <img src={news.imgUrl} alt="pic" className={"object-cover w-full h-full"}/>
                            </div>
                            <p className={"px-2 py-4 text-lg font-bold text-center"}>{news.title}</p>
                        </a>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default EpidemicNews;