(() => {
  function init() {
    const controls = Array.from(document.querySelectorAll('[data-auto-hide-nav]'))
    if (!controls.length) return

    const threshold = 10
    const minDelta = 4
    let lastY = window.scrollY || 0
    let ticking = false

    function isPinned(y) {
      return (
        y <= threshold ||
        controls.some(el => el.matches(':hover') || el.contains(document.activeElement))
      )
    }

    function setHidden(hidden) {
      controls.forEach(el => el.classList.toggle('nav-hidden', hidden))
    }

    function update() {
      const y = Math.max(window.scrollY || 0, 0)
      const delta = y - lastY
      controls.forEach(el => el.classList.toggle('scrolled', y > threshold))

      if (isPinned(y)) {
        setHidden(false)
      } else if (Math.abs(delta) >= minDelta) {
        setHidden(delta > 0 && y > 72)
      }

      lastY = y
      ticking = false
    }

    window.addEventListener(
      'scroll',
      () => {
        if (ticking) return
        ticking = true
        window.requestAnimationFrame(update)
      },
      { passive: true },
    )

    controls.forEach(el => {
      el.addEventListener('mouseenter', () => setHidden(false))
      el.addEventListener('focusin', () => setHidden(false))
    })
    update()
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
  } else {
    init()
  }
})()
