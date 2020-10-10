// 1.特点
// 1）数据结构
// let Node = {
//   data: '',
//   next: 'obj'
// }
// 最后一个node的next==null
// 头结点中不存储数据

function singleNode(val) {
  return {
    val,
    next: null,
  };
}
function singleLinkList() {
  this.head = {
    next: null,
    val: null,
  };
}
singleLinkList.prototype.insert = function (val) {
  let curNode = this.head;
  while (curNode.next) {
    curNode = curNode.next;
  }
  curNode.next = new singleNode(val);
};
singleLinkList.prototype.remove = function (val) {
  let curNode = this.head;
  while (curNode.next) {
    let preNode = curNode;
    curNode = curNode.next;
    // 引用类型比较，需要再改进
    if (curNode.val === val) {
      preNode.next = curNode.next;
      return;
    }
  }
};
singleLinkList.prototype.print = function () {
  let curNode = this.head;
  while (curNode.next) {
    curNode = curNode.next;
    console.log(curNode.val);
  }
};
let list1 = new singleLinkList();
function addLink() {
  list1.insert(1);
  list1.insert(2);
  list1.insert(3);
  list1.insert(4);
}
// addLink();
// // list1.print()
// list1.remove(4);
// console.log("remove-----------");
// list1.print()

function DoubleNode(val) {
  return {
    val,
    pre: null,
    next: null,
  };
}

function DoubleList() {
  this.head = {
    val: null,
    pre: null,
    next: null,
  };
}
DoubleList.prototype.init = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    this.insert(arr[i])
  }
}
DoubleList.prototype.insert = function (val) {
  let curNode = this.head;
  while (curNode.next) {
    curNode = curNode.next;
  }
  let newNode = new DoubleNode(val);
  newNode.pre = curNode;
  curNode.next = newNode;
};
// 链表插入，指定插入位置
DoubleList.prototype.insertIndex = function (val, index) { };
DoubleList.prototype.print = function () {
  let curNode = this.head;
  while (curNode.next) {
    curNode = curNode.next;
    console.log(curNode.val);
  }
};
DoubleList.prototype.remove = function (val) {
  let curNode = this.head;
  while (curNode.next) {
    let preNode = curNode;
    curNode = curNode.next;
    // 引用类型比较，需要再改进
    if (curNode.val === val) {
      preNode.next = curNode.next;
      if (curNode.next) {
        curNode.next.pre = preNode;
      }
      return;
    }
  }
};
// let list2 = new DoubleList();
// list2.insert(1);
// list2.insert(2);
// list2.insert(3);
// list2.insert(4);
// // list2.print();
// console.log("double remove----");
// list2.remove(4);
// // list2.print();

function CycleDoubleList() {
  // DoubleList.apply(this)
  this.head = {
    val: null,
    pre: null,
    next: null,
  };
  this.head.next = this.head
}
CycleDoubleList.prototype = DoubleList.prototype
CycleDoubleList.prototype.constructor = CycleDoubleList;
CycleDoubleList.prototype.insert = function (val) {
  let curNode = this.head;
  while (curNode.next && curNode.next.val !== null) {
    curNode = curNode.next;
  }
  let newNode = new DoubleNode(val);
  newNode.pre = curNode;
  curNode.next = newNode;
  newNode.next = this.head;
  this.head.pre = newNode;
}

CycleDoubleList.prototype.print = function () {
  let curNode = this.head;
  // console.log(curNode, 139)
  while (curNode.next && curNode.next.val !== null) {
    curNode = curNode.next;
    console.log(curNode.val);
  }
};

CycleDoubleList.prototype.remove = function (val) {
  let curNode = this.head;
  while (curNode.next && curNode.next.val !== null) {
    let preNode = curNode;
    curNode = curNode.next;
    // 引用类型比较，需要再改进
    if (curNode.val === val) {
      preNode.next = curNode.next;
      if (curNode.next) {
        curNode.next.pre = preNode;
      }
      return;
    }
  }
};

let list3 = new CycleDoubleList()
list3.init([1, 2, 3, 4, 5])
// console.log('CycleDoubleList remove---------')

// list3.remove(4)
// list3.print()

function OrderLinkedList() {
  CycleDoubleList.apply(this)
}
OrderLinkedList.prototype = CycleDoubleList.prototype;
OrderLinkedList.prototype.constructor = OrderLinkedList;
OrderLinkedList.prototype.insert = function (val) {
  let curNode = this.head;
  let newNode = new singleNode(val)
  while (curNode.next && curNode.next.val !== null) {
    let preNode = curNode;
    curNode = curNode.next;
    if (val < curNode.val) {
      newNode.next = curNode;
      curNode.pre = newNode;
      newNode.pre = preNode
      preNode.next = newNode;
      return;
    }
  }

  newNode.pre = curNode;
  newNode.next = curNode.next;
  newNode.next.pre = curNode;
  curNode.next = newNode;
}

let orderList1 = new OrderLinkedList()
orderList1.init([3, 5, 10, 9, 21, 14, 0])
orderList1.print()
