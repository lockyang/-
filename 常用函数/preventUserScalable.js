// 阻止IOS10以上缩放
window.onload = () => {
  document.addEventListener('touchstart', (event) => {
    if (event.touches.length > 1) {
      event.preventDefault()
    }
  })
  let lastTouchEnd = 0
  document.addEventListener('touchend', (event) => {
    let now = (new Date()).getTime()
    if (now - lastTouchEnd <= 300) {
      event.preventDefault()
    }
    lastTouchEnd = now
  })
}