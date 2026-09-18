import { useEffect, useId, useRef } from 'react'

export function Modal({ title, content, onClose, children, className = '' }) {
  const dialogRef = useRef(null)
  const titleRef = useRef(null)
  const titleId = useId()
  const backdropPress = useRef(false)

  useEffect(() => {
    const dialog = dialogRef.current
    const trigger = document.activeElement
    const root = document.documentElement
    const previousOverflow = root.style.overflow
    root.style.overflow = 'hidden'
    dialog.showModal()
    titleRef.current?.focus({ preventScroll: true })

    return () => {
      dialog.close()
      root.style.overflow = previousOverflow
      if (trigger?.isConnected) trigger.focus({ preventScroll: true })
    }
  }, [])

  function isBackdrop(event) {
    if (event.target !== event.currentTarget) return false
    const rect = event.currentTarget.getBoundingClientRect()
    return event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom
  }

  return (
    <dialog ref={dialogRef} className={`project-modal ${className}`} aria-labelledby={titleId} onCancel={event => {
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
