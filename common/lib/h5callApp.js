// h5调起app

export function CallApp(androidOption, iosOption, delay) {
    this.androidOption = androidOption
    this.iosOption = iosOption
    this.delay = delay

    let isIos = !!navigator.userAgent.match(/i[^;]+;( U;)? CPU.+Mac OS X/)
    let iPad = navigator.userAgent.indexOf('iPad') > -1
    let iPhone = navigator.userAgent.indexOf('iPhone') > -1
    this.isIos = isIos || iPad || iPhone
    if (this.isIos) {
        this.openLink = this.iosOption && this.iosOption.openLink
    } else {
        this.openLink = this.androidOption && this.androidOption.openLink
    }
    if (!this.openLink) {
        throw new Error('empty openLink can not execute correctly')
    }
}

// 下载app
CallApp.prototype.download = function(downLinkMap) {
    if (this.isIos) {
        window.location.href = downLinkMap['ios']
        return
    }
    let u = navigator.userAgent
    let curDownLink = Object.keys(downLinkMap).find(o => {
        return u.indexOf(o) >= 0
    })
    if (!curDownLink) {
        curDownLink = downLinkMap['default']
    } else {
        curDownLink = downLinkMap[curDownLink]
    }
    let formEl = document.createElement('form')
    formEl.action = curDownLink
    formEl.style = 'width:0;height:0;overflow:hidden;opacity:0;'
    document.body.appendChild(formEl)
    formEl.submit()
    document.body.removeChild(formEl)
}
// 调起app
CallApp.prototype.open = function() {
    return new Promise((resolve, reject) => {
            let timerTask = setTimeout(() => {
                reject(false)
            }, this.delay)
            window.addEventListener(
                'visibilitychange',
                e => {
                    if (document.visibilityState === 'hidden') {
                        clearTimeout(timerTask)
                        timerTask = null
                        resolve(true)
                    }
                },
                true
            )
            window.addEventListener(
                'pagehide',
                () => {
                    clearTimeout(timerTask)
                    timerTask = null
                    resolve(true)
                },
                true
            )
            window.location.href = this.openLink
        if (window.top) {
            window.top.location.href = this.openLink
        }
    })
}
