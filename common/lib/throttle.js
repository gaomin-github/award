let lastTime = new Date().getTime();
function throttle(fun, timeout) {
  //   console.log("throttle", new Date().getTime());
  return function() {
    if (new Date().getTime() - lastTime <= timeout) {
      return;
    }
    lastTime = new Date().getTime();
    fun(arguments);
  };
}
function debounce() {}

export { throttle, debounce };
