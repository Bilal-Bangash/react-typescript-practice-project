import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { loaderStyles } from './Loader.styles'

export default function CircularIndeterminate() {
  const classes = loaderStyles()

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  )
}
