import Mock from "mockjs";
// import Mock from "mockjs";
console.log("mock executed");
<<<<<<< HEAD
Mock.mock("/xian/xianProperty", "get", function() {
  let res = [
    {
      drivingRoute: { duration: 1356, distance: 17379 },
      busRoute: { duration: 4879, distance: 18485, walking_distance: 1135 },
      garden: { num: 10 },
      _id: "5e99b84719dab4e1fe8a87b8",
      areaId: "8a901c28707bb13f0170e10d428d0913",
      label: "大华&middot;公园世家3#地块",
      href: "price?id=8a901c28707bb13f0170e10d428d0913",
      time: "2020-04-03",
      buildingNo: "8#",
      floors: "11",
      location: "108.984771,34.177072",
      normType: "精装",
      buildingNum: 15,
      __v: 0,
    },
    {
      drivingRoute: { duration: 1369, distance: 17716 },
      busRoute: { duration: 4658, distance: 23440, walking_distance: 1920 },
      garden: { num: 10 },
      _id: "5e99b84719dab4e1fe8a87b7",
      areaId: "8a901c28707bb13f01713e33fcf32667",
      label: "碧桂园云顶（二期）项目A区",
      href: "price?id=8a901c28707bb13f01713e33fcf32667",
      time: "2020-04-03",
      buildingNo: "6#",
      floors: "10",
      location: "108.978524,34.174281",
      normType: "精装",
      buildingNum: 15,
      __v: 0,
    },
  ];
  return res;
=======
console.log(('/xian/xianProperty').match(/\/xian\/xianProperty/g), 4)
Mock.mock("/xian/xianProperty", 'get', function () {
    return ['1,2', '2,3', '3,3']
    // let res = [
    //     {
    //         label:
    //             "西安土门地区&ldquo;四村&rdquo;连片综合改造项目DK-1-2（富力开远城A-2区）",
    //         href: "price?id=8a901c28707bb13f01713f30ccbb4bde",
    //         time: "2020-04-03",
    //         location: "108.880977,34.258790",
    //         drivingRoute: {
    //             distance: "11432",
    //             duration: "1050",
    //             strategy: "速度最快",
    //             tolls: "0",
    //             toll_distance: "0",
    //             steps: [Array],
    //             restriction: "0",
    //             traffic_lights: "4",
    //         },
    //         busRoute: {
    //             cost: "2.0",
    //             duration: "3508",
    //             nightflag: "0",
    //             walking_distance: "424",
    //             distance: "10360",
    //             missed: "0",
    //             segments: [Array],
    //         },
    //         aroundGarden: [
    //             [Object],
    //             [Object],
    //             [Object]
    //         ],
    //     },
    //     {
    //         label: "紫薇●西棠",
    //         href: "price?id=8a901c28707bb13f017084cacd0514cb",
    //         time: "2020-03-23",
    //         location: "108.829399,34.242786",
    //         drivingRoute: {
    //             distance: "7948",
    //             duration: "653",
    //             strategy: "速度最快",
    //             tolls: "0",
    //             toll_distance: "0",
    //             steps: [Array],
    //             restriction: "0",
    //             traffic_lights: "5",
    //         },
    //         busRoute: {
    //             cost: "2.0",
    //             duration: "3140",
    //             nightflag: "0",
    //             walking_distance: "1764",
    //             distance: "7835",
    //             missed: "0",
    //             segments: [Array],
    //         },
    //         aroundGarden: [[Object], [Object], [Object]],
    //     },
    // ];
    // console.log(res, 64)
    // return res;
>>>>>>> 82f6c8f193ec5b90330ce9915d440408828bc580
});
console.log("mock executed finish", 68);
console.log(Mock._mocked, 69)

