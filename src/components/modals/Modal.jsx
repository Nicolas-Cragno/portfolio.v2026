import { useEffect, useId, useRef } from 'react'
import { lockPageScroll } from '../../utils/scrollLock.js'

export function Modal({ title, content, onClose, children, className = '' }) {
  const dialogRef = useRef(null)
  const titleRef = useRef(null)
  const titleId = useId()
  const backdropPress = useRef(false)

  useEffect(() => {
    const dialog = dialogRef.current
    const trigger = document.activeElement
    const unlockPage = lockPageScroll()
    dialog.showModal()
    titleRef.current?.focus({ preventScroll: true })

    return () => {
      dialog.close()
      unlockPage()
      if (trigger?.isConnected) trigger.focus({ preventScroll: true })
    }
  }, [])

  function isBackdrop(event) {
    if (event.target !== event.currentTarget) return false
    const rect = event.currentTarget.getBoundingClientRect()
    return event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom
  }

  function keepFocusInside(event) {
    if (event.key !== 'Tab') return
    const controls = [...event.currentTarget.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')]
      .filter(element => element.getClientRects().length && getComputedStyle(element).visibility !== 'hidden')
    const first = controls[0]
    const last = controls.at(-1)
    const active = document.activeElement
    if (!first) {
      event.preventDefault()
      titleRef.current?.focus()
    } else if (!controls.includes(active) || (event.shiftKey && active === first) || (!event.shiftKey && active === last)) {
      event.preventDefault()
      ;(event.shiftKey ? last : first).focus()
    }
  }

  return (
    <dialog ref={dialogRef} className={`project-modal ${className}`} aria-labelledby={titleId} onKeyDown={keepFocusInside} onCancel={event => {
      event.preventDefault()
      onClose()
    }} onPointerDown={event => { backdropPress.current = isBackdrop(event) }} onClick={event => {
      if (backdropPress.current && isBackdrop(event)) onClose()
      backdropPress.current = false
    }}>
      <div className="modal-toolbar">
        <h2 id={titleId} ref={titleRef} tabIndex={-1}>{title}</h2>
        <button type="button" className="modal-close" onClick={onClose}>
          <span className="modal-back-label">← {content.back}</span>
          <span className="modal-close-label">{content.close} <span aria-hidden="true">×</span></span>
        </button>
      </div>
      <div className="modal-body">{children}</div>
    </dialog>
  )
}
