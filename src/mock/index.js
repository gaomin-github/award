import Mock from "mockjs";
// import Mock from "mockjs";
console.log("mock executed");
Mock.mock("/xian/xianProperty", "get", function() {
  let res = [
    {
      label:
        "西安土门地区&ldquo;四村&rdquo;连片综合改造项目DK-1-2（富力开远城A-2区）",
      href: "price?id=8a901c28707bb13f01713f30ccbb4bde",
      time: "2020-04-03",
      location: "108.880977,34.258790",
      drivingRoute: {
        distance: "11432",
        duration: "1050",
        strategy: "速度最快",
        tolls: "0",
        toll_distance: "0",
        steps: [Array],
        restriction: "0",
        traffic_lights: "4",
      },
      busRoute: {
        cost: "2.0",
        duration: "3508",
        nightflag: "0",
        walking_distance: "424",
        distance: "10360",
        missed: "0",
        segments: [Array],
      },
      aroundGarden: [
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
      ],
    },
    {
      label: "紫薇●西棠",
      href: "price?id=8a901c28707bb13f017084cacd0514cb",
      time: "2020-03-23",
      location: "108.829399,34.242786",
      drivingRoute: {
        distance: "7948",
        duration: "653",
        strategy: "速度最快",
        tolls: "0",
        toll_distance: "0",
        steps: [Array],
        restriction: "0",
        traffic_lights: "5",
      },
      busRoute: {
        cost: "2.0",
        duration: "3140",
        nightflag: "0",
        walking_distance: "1764",
        distance: "7835",
        missed: "0",
        segments: [Array],
      },
      aroundGarden: [[Object], [Object], [Object]],
    },
  ];
  return JSON.stringify(res);
});
