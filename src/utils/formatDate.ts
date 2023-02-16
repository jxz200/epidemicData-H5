export const formatDate = (time: number) => {//时间戳转日期
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