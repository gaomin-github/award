function timeStr(date) {
    if (!date) date = new Date();
    if (date instanceof Date) date = new Date();
    let timeStr = `${date.getFullYear()}-${
        date.getMonth() + 1
        }-${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    timeStr = timeStr.replace(/\b(?=\d(\s|\:|\-|\b))/g, 0);
    timeStr = timeStr.replace(/(\:|\-|\s)/g, "");
    return timeStr;
}
export default {
    timeStr
}