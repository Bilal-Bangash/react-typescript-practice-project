import React, { Fragment } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { typingHeaderStyles } from './TypingHeader.styles'
import Timer from '../Timer/Timer.component'

interface TypingHeaderProps {
  level: string
  stop: boolean
  time: number
  handleTimeStop: () => void
}

const TypingHeader: React.FC<TypingHeaderProps> = ({
  level,
  time,
  stop,
  handleTimeStop,
}) => {
  const classes = typingHeaderStyles()
  return (
    <Fragment>
      <Grid item xs={12} md={9} style={{ textAlign: 'left' }}>
        <Typography component="h6" variant="h5">
          Level : <i>{level.toUpperCase()}</i>
        </Typography>
        <Typography component="h6" variant="h5">
          Time Limit : <i>{`${time / 60} minutes`}</i>
        </Typography>
        <br />
        <Typography component="h6" variant="h5">
          Paragraph to type
        </Typography>
      </Grid>
      {/* @ts-ignore */}
      <Grid item xs={12} md={3} align="right">
        <Typography component="h5" variant="h4" className={classes.typography}>
          Timer
        </Typography>
        <Timer time={time} stop={stop} handleTimeStop={handleTimeStop} />
      </Grid>
    </Fragment>
  )
}
export default TypingHeader
