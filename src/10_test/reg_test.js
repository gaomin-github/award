let url1='http://api.video.n.duokanbox.com/api/a3/activity/20201201/info?_locale=zh_CN&_res=hd1080&_devid=65b3aa673a3f975a58ac7a428d3d7113&_device=tucana&_miuiver=20.1.15&_model=MI+CC9+Pro&_andver=28&_nonce=-495368788&_appver=2020111990&_ts=1605859067&_ver=v2020111990(MiVideo-UN)&_devtype=1&_cam=0f607264fc6318a92b9e13c65db7cd3c&_diordna=56eae95f3f6f44fe41343ead657d7331&_cpu=64&_cpuabi=arm64-v8a&_appabi=32&_android=7c31191d11dc58fd&_miui=V11&_version=dev&_plyver=20201104&_nettype=1&_uspace=0&_eset=YWJfYWQyNjo5OSxhYl9hZDI3Ojk5LGFiX2VsZGVybW9kZTI6OTksYWI5OTowMixhYjEwMTowMixhYjkwOjAzLGFiOTQ6MDMsYWI5ODo5OSxhYjkxOjAzLGFiOTc6MDI%3D&_app_coop=com.miui.video&is_premium=0&_width=1080&_height=2340&_session=KRVCks2TzQz5_IS-u7rRzLOyqsweVi9LP5DdR8Ma-PoV7l0w4IoktPISkFU1lU-cy732Uobp5NKDT6QzXUkDkQ%3D%3D&_eid=ab44:2,ab75:02,ab_feed3:2,ab108:04,ab_ad27:9,ab101:01,ab90:02,ab94:03,ab91:02,ab97:01,ab_ad25:0,ab66:9,ab_ad24:9,ab96:03,ab80:03,ab71:03,ab49:0:0%7C71102,71081,12802,73548,38990,60062,50811,12879,73609,73632,56146%7C**mivideo_device_middle_high&_andid=56eae95f-3f6f-34fe-8134-3ead657d7331&_oaid=2b0da514225cc702&_vaid=d11c473641d9fc8d&_aaid=184d179d-c131-46f8-8bd8-9be61c7d1242&_ref2=com.miui.video&ref=intent&_noimei=&_androidver=9&_is_local=1&_appchannel=un&contentmode=1&clientchoice=0'
let cParamVals = url1.match(/(\w=)[\w\-_=:,.\+\-]+(\b|&)/g)
let cParamKeys = url1.match(/(\?|&)\w+\=/g)
let baseParam={};
// console.log(cParamKeys,5)
for (let i in cParamKeys) {
    let key = cParamKeys[i]
    let val = cParamVals[i]
    key = key.substring(1, key.length - 1)
    if (key === '_session') {
        val = val.substring(2, val.length - 1)
    } else {
        // console.log(val, '000000000')
        val = val&&val.substring(2, val.length)||''
    }
    baseParam[key] = val
}
console.log('--------------18----------------------')
console.log(baseParam,17)
// console.log(cParamKeys,4)
// console.log(cParamVals,5)
