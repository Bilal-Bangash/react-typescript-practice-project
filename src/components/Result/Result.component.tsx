import { Grid } from '@material-ui/core'
import React from 'react'

interface ResultProps {
  level: string
  user: string
  time: number
}

const Result: React.FC<ResultProps> = ({ level, user, time }) => {
  return (
    // @ts-ignore
    <Grid container spacing={2} align="center">
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
