function clone(obj) {
  //   console.log(obj);
  if (typeof obj === "function") return obj;
  if (obj === null || obj === undefined) return null;

  if (typeof obj !== "object") {
    return obj;
  }
  let keys = Object.keys(obj);
  let newobj = {};
  //   问题：一些继承而来的属性也会被克隆到
  //   for (let i in obj) {
  //     newobj[i] = clone(obj[i]);
  //   }
  // 解决方案：
  for (let i in obj) {
    if (Object.hasOwnProperty.call(obj, i)) {
      newobj[i] = clone(obj[i]);
    }
  }
  return newobj;
}
let a = {
  name: "a",
  id: "a_id",
  data: {
    time: 2020,
    label: "test",
    owner: {
      number: "001",
      print() {
        console.log("print func");
      },
    },
  },
};
let b = clone(a);

b.data.owner.number = "002";
// console.log("a", a.data.owner);
// console.log("b", b.data.owner);
function compare(a, b) {
  if ((a === null || a === "undefined") && (a === null || a === "undefined"))
    return true;
  if (a === null || a === "undefined" || a === null || a === "undefined")
    return false;
  if (typeof a === "function" || typeof b === "function") return false;
  if (typeof a !== "object" && typeof b !== "object") return a === b;
  if (!(typeof a === "object" && typeof b === "object")) return false;
  if (
    Object.keys(a)
      .sort()
      .join("") !==
    Object.keys(b)
      .sort()
      .join("")
  )
    return false;
  for (let i in a) {
    if (a[i] && b[i]) {
      let bol = compare(a[i], b[i]);
      if (bol) {
        continue;
      }
      return false;
    }
  }
  return true;
}
console.log(
  compare(
    {
      id: 1,
      name: 2,
      data: {
        id: 1,
        num: {
          label: "aa",
        },
      },
    },
    {
      name: 2,
      id: 1,
      data: {
        id: 1,
        num: {
          label: "aa",
        },
      },
    }
  )
);
