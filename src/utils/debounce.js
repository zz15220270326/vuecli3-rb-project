/**
 * 函数防抖
 */
export function debounce(fn, settingDelay) {
  // 记录上一次的延时器
  let timer = null;
  let delay = settingDelay || 350;
  return function() {
   let args = arguments;
   let that = this;
   // 清除上一次延时器
   clearTimeout(timer)
   timer = setTimeout(function() {
     fn.apply(that,args)
   }, delay);
  }
 }