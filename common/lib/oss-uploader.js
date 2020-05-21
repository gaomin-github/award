import OSS from 'ali-oss';
import { timeStr } from './timeFormat.js'
let client = new OSS({
    region: "oss-cn-beijing",
    accessKeyId: "LTAI4G9kK1ushnFaG7mFaYfv",
    accessKeySecret: "nXAUePx7qdHcZcD0ehft0NkbRkO5iN",
    bucket: "gx-estate-20200514",
});

async function upload(path, name, obj) {
    try {
        let a = `${path}/${timeStr()}-${name}`;
        console.log(obj, 13);

        let res = await client.put(a, obj);
        console.log(res, 16);
        return res;
    } catch (e) {
        console.error("error", e);
    }
}

async function batchUpload(fileList) {
    let taskList = [];
    fileList.map((file) => {
        let task = new Promise(async (resolve, reject) => {
            let res = await upload(file.path, file.name, file.data);
            return resolve(res);
        });
        taskList.push(task);
    });
    let res = await Promise.all(taskList);
    if (res && res.length > 0) {
        let pathList = [];
        console.log(res, 33);
        res.map((o) => {
            console.log(o.url, 35);
            pathList.push(o.url);
        });
        return pathList;
    }
    return null;
}

export default {
    ossUploader: upload,
    ossBatchUploader: batchUpload,
};
