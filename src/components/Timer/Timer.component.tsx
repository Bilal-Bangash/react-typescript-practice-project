import { useState, useEffect, FC } from 'react'
import Chip from '@material-ui/core/Chip'
import { useInterval } from '../../hooks'
import { TIMER_STARTED, TIMER_STOPPED } from './Timer.constants'

interface TimerProps {}

const Timer: FC<TimerProps> = () => {
  const [secondsRemaining, setSecondsRemaining] = useState(120)
  const [status, setStatus] = useState(TIMER_STOPPED)

  const secondsToDisplay = secondsRemaining % 60
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60
  const minutesToDisplay = minutesRemaining % 60
  const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60

  // testing WIP
  useEffect(() => {
    setStatus(TIMER_STARTED)
  }, [])

  useInterval(
    () => {
      secondsRemaining > 0
        ? setSecondsRemaining(secondsRemaining - 1)
        : setStatus(TIMER_STOPPED)
    },
    status === TIMER_STARTED ? 1000 : null,
    // passing null stops the interval
  )
  const twoDigits = (num: any) => String(num).padStart(2, '0')

  return (
    <div style={{ padding: 20 }}>
      <Chip
        size="medium"
        label={twoDigits(hoursToDisplay)}
        color={secondsToDisplay > 20 ? 'primary' : 'secondary'}
      />{' '}
      <b>:</b>{' '}
      <Chip
        size="medium"
        label={twoDigits(minutesToDisplay)}
        color={secondsToDisplay > 20 ? 'primary' : 'secondary'}
      />{' '}
      <b>:</b>{' '}
      <Chip
        size="medium"
        label={twoDigits(secondsToDisplay)}
        color={secondsToDisplay > 20 ? 'primary' : 'secondary'}
      />
    </div>
  )
}
export default Timer
