import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

export const dropDownStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
)
