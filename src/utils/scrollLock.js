let locks = 0
let restorePage = null

export function lockPageScroll() {
  if (locks === 0) {
    const root = document.documentElement
    const body = document.body
    const x = window.scrollX
    const y = window.scrollY
    const properties = ['position', 'top', 'left', 'width']
    const previous = properties.map(property => [property, body.style.getPropertyValue(property), body.style.getPropertyPriority(property)])
    const overflow = root.style.getPropertyValue('overflow')
    const priority = root.style.getPropertyPriority('overflow')
    root.style.setProperty('overflow', 'hidden')
    body.style.setProperty('position', 'fixed')
    body.style.setProperty('top', `${-y}px`)
    body.style.setProperty('left', `${-x}px`)
    body.style.setProperty('width', '100%')

    restorePage = () => {
      for (const [property, value, savedPriority] of previous) {
        if (value) body.style.setProperty(property, value, savedPriority)
        else body.style.removeProperty(property)
      }
      if (overflow) root.style.setProperty('overflow', overflow, priority)
      else root.style.removeProperty('overflow')
      window.scrollTo(x, y)
    }
  }

  locks += 1
  let released = false

  return () => {
    if (released) return
    released = true
    locks -= 1
    if (locks === 0) {
      restorePage?.()
      restorePage = null
    }
  }
}
