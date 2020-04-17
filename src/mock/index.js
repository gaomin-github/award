import Mock from "mockjs";
// import Mock from "mockjs";
console.log("mock executed");
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
});
