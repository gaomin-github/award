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
    next: null
  }
}
function singleLinkList() {
  this.head = {
    next: null,
    val: null
  }
}
singleLinkList.prototype.insert = function (val) {
  let curNode = this.head;
  while (curNode.next) {
    curNode = curNode.next;
  }
  curNode.next = new singleNode(val)
}
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
  curNode.next = new singleNode(val)

}
singleLinkList.prototype.print = function () {
  let curNode = this.head;
  while (curNode.next) {
    curNode = curNode.next;
    console.log(curNode.val)
  }
}
let list1 = new singleLinkList()
function addLink() {
  list1.insert(1)
  list1.insert(2)
  list1.insert(3)
  list1.insert(4)
}
addLink()
// list1.print()

list1.remove(4)
console.log('remove-----------')
// list1.print()

function DoubleNode(val) {
  return {
    val,
    pre: null,
    next: null
  }
}

function doubleList() {
  // this.head
}