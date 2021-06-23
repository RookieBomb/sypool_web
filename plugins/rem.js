// rem
export default ({ store }) => {
  (function () {
    /* 计算rem */
    function autoRootFontSize () {
      // (当前屏幕宽度，最小宽度为1200)/1920*16px
      const setSize = Math.max(document.documentElement.getBoundingClientRect().width, 750) / 1920 * 16
      // 字体默认最大值为16px
      document.documentElement.style.fontSize = (setSize > 16 ? 16 : setSize) + 'px'
      if (document.documentElement.getBoundingClientRect().width <= 992) {
        store.commit('changScreen', true)
      } else {
        store.commit('changScreen', false)
      }
    }
    window.addEventListener('resize', autoRootFontSize)
    autoRootFontSize()
  })()
}
