import { ReactElement, useEffect, useState } from 'react'
import './AutoCounter.scss'

interface AutoCounterProps {
  maxNumber: number // count될 최종 숫자
  description: string // count될 숫자 뒤에 붙을 문자열
  isStrong?: boolean
  duration?: number
}

const AutoCounter = (props: AutoCounterProps): ReactElement => {
  const { maxNumber, description, isStrong, duration = 2000 } = props
  const [showNumber, setShowNumber] = useState(0)
  const content = `${showNumber}${description}`

  useEffect(() => {
    if (showNumber === maxNumber) {
      return
    }
    const delay = ((duration * 2) / Math.pow(maxNumber, 2)) * showNumber
    setTimeout(() => setShowNumber(showNumber + 1), delay)
  }, [duration, maxNumber, showNumber])

  return (
    <span className="auto-counter-text">
      {isStrong ? <strong className="bold">{content}</strong> : content}
    </span>
  )
}

export default AutoCounter
