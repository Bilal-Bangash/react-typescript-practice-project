import { useState, useEffect, FC } from 'react'
import Chip from '@material-ui/core/Chip'
import { useInterval } from '../../hooks'
import { TIMER_STARTED, TIMER_STOPPED } from './Timer.constants'

interface TimerProps {
  time: number
  stop: boolean
  handleTimeStop: () => void
}

const Timer: FC<TimerProps> = ({ time, stop, handleTimeStop }) => {
  const [secondsRemaining, setSecondsRemaining] = useState(time)
  const [status, setStatus] = useState(TIMER_STOPPED)

  const secondsToDisplay = secondsRemaining % 60
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60
  const minutesToDisplay = minutesRemaining % 60
  const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60

  // testing WIP
  useEffect(() => {
    setStatus(stop ? TIMER_STOPPED : TIMER_STARTED)
  }, [stop])

  useInterval(
    () => {
      secondsRemaining > 0
        ? setSecondsRemaining(secondsRemaining - 1)
        : setStatus(TIMER_STOPPED)
      localStorage.setItem('time-remaining', secondsRemaining.toString())
      secondsRemaining === 0 && handleTimeStop()
    },
    status === TIMER_STARTED ? 1000 : null
    // passing null stops the interval
  )
  const twoDigits = (num: any) => String(num).padStart(2, '0')

  return (
    <div style={{ padding: 20 }}>
      <Chip
        size="medium"
        label={twoDigits(hoursToDisplay)}
        color={
          minutesToDisplay > 0 && secondsToDisplay < 20
            ? 'secondary'
            : 'primary'
        }
      />{' '}
      <b>:</b>{' '}
      <Chip
        size="medium"
        label={twoDigits(minutesToDisplay)}
        color={
          minutesToDisplay > 0 && secondsToDisplay < 20
            ? 'secondary'
            : 'primary'
        }
      />{' '}
      <b>:</b>{' '}
      <Chip
        size="medium"
        label={twoDigits(secondsToDisplay)}
        color={
          minutesToDisplay > 0 && secondsToDisplay < 20
            ? 'secondary'
            : 'primary'
        }
      />
    </div>
  )
}
export default Timer
