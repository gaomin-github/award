//     。。。
//   。。。
// 。。。

// 。。。
//   。。。
//     。。。

function printDiamond(len) {
  for (let i = 0; i < len; i++) {
    let row_len = len + i;
    let print_str = '';
    for (let j = 0; j < row_len; j++) {
      if (i - 1 >= j) {
        print_str += ' '
      } else {
        print_str += '。'
      }
    }
    console.log(print_str)
  }
}
printDiamond(5)