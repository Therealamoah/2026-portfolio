import { useEffect, useState } from 'react'

export function useTypewriter(text, { typeSpeed = 90, deleteSpeed = 45, pause = 1800 } = {}) {
  const [display, setDisplay] = useState('')

  useEffect(() => {
    let index = 0
    let typing = true
    let timeoutId

    function tick() {
      if (typing) {
        index += 1
        setDisplay(text.slice(0, index))
        if (index >= text.length) {
          typing = false
          timeoutId = setTimeout(tick, pause)
          return
        }
        timeoutId = setTimeout(tick, typeSpeed)
      } else {
        index -= 1
        setDisplay(text.slice(0, index))
        if (index <= 0) {
          typing = true
        }
        timeoutId = setTimeout(tick, deleteSpeed)
      }
    }

    timeoutId = setTimeout(tick, typeSpeed)
    return () => clearTimeout(timeoutId)
  }, [text, typeSpeed, deleteSpeed, pause])

  return display
}
