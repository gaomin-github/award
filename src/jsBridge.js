let id = 0,
  wsStatus = false,
  methods = [],
  ws = new WebSocket("ws://localhost:3003");
ws.onopen = function(e) {
  wsStatus = true;
};
ws.onmessage = (e) => {
  let res = JSON.parse(e.data);
  console.log(res, 10);
  methods[res.callbackId](res.param);
};

let bridge = {
  postMessage(methodName, param) {
    return new Promise((resolve, reject) => {
      ws.send(JSON.stringify({ methodName, param, callbackId: id }));
      methods[id] = resolve;
      id++;
    });
  },
  // recieveMessage(response) {
  //   // callbackId
  //   // param
  //   let res = JSON.parse(response);
  //   this.methods[res.callbackId](res.param);
  // },
};
export default bridge;

// 情景
// 1.同步请求
// 2.异步请求
// 3.有回调
// 4.无回调
// 3.长期监听会重复调用的请求
