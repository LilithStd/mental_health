'use client'
import { useEffect } from "react"
import { createPortal } from "react-dom"


interface ModalWindowProps {
    openStatusCallBack: boolean
    closeStatusCallBack: () => void
    children?: React.ReactNode
}

export default function ModalWindowMain(props: ModalWindowProps) {
const { openStatusCallBack: isOpen, closeStatusCallBack: onClose, children } = props;

useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // закрытие по ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      window.addEventListener('keydown', handleKey)
    }

    return () => {
      window.removeEventListener('keydown', handleKey)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null
     return createPortal(
    <div
      className="fixed inset-0 z-999 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose} // клик вне окна
    >
      <div
        className="
          relative
          w-full max-w-lg
          p-2
          rounded-large
          bg-primary-color/20
          backdrop-blur-md
          border border-primary-color/30
          shadow-xl
          transition-all duration-300
        "
        onClick={(e) => e.stopPropagation()} // чтобы не закрывалось при клике внутри
      >
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="
            absolute -top-3 -right-3
            w-8 h-8
            flex items-center justify-center
            rounded-full
            text-xl font-bold
            bg-activeElement
            hover:bg-hover
            transition-colors
          "
        >
          ×
        </button>

        {children}
      </div>
    </div>,
    document.body
  )
}
