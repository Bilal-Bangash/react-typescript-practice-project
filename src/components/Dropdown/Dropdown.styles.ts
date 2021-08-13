import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

export const dropDownStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      minWidth: 150,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
)
