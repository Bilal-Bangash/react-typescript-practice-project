import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { resultStyles } from './Result.styles'

interface ResultProps {
  level: string
  user: string
  time: number
}

const Result: React.FC<ResultProps> = ({ level, user, time }) => {
  const classes = resultStyles()
  return (
    // @ts-ignore
    <Grid container spacing={2} align="center" justifyContent="center">
      <br />
      <Typography component="h5" variant="h5" className={classes.typography}>
        Speed Typing Result
      </Typography>
      <br />
      <Grid item xs={12}>
        Name: {user}
      </Grid>
      <Grid item xs={12}>
        Level : {level}
      </Grid>
      <Grid item xs={12}>
        Accuracy: 91%
      </Grid>
      <Grid item xs={12}>
        Time Spent : {time} Seconds
      </Grid>
    </Grid>
  )
}
export default Result
