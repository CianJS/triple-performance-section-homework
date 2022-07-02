import { ReactElement } from 'react'
import './AutoCounter.scss'

interface AutoCounterProps {
  maxCount: number
  description: string
  isStrong?: boolean
}

const AutoCounter = (props: AutoCounterProps): ReactElement => {
  const { maxCount, description, isStrong } = props
  const content = `${maxCount}${description}`

  return (
    <span className="auto-counter-text">
      {isStrong ? <strong className="bold">{content}</strong> : content}
    </span>
  )
}

export default AutoCounter
