import { Fragment, FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { Container, Paper, Grid, TextField } from '@material-ui/core'
import { Timer, Typography } from '../../components'
import { typingStyles } from './Typing.styles'

interface TypingProps {}

const Typing: FC<TypingProps> = () => {
  const testData = useSelector((state: any) => state.testData)
  const { paragraph = '', level = '', time = 0 } = testData?.testInfo || ''
  const classes = typingStyles()
  const [greenArray, setGreenArray] = useState<Array<number>>([])
  const [redArray, setRedArray] = useState<Array<number>>([])

  const handleText = ({ target: { value = '' } }) => {
    //while typing inserting each letter that is correct into green array and wrong one in red
    value.charAt(value.length - 1) === paragraph.charAt(value.length - 1)
      ? setGreenArray([...greenArray, value.length - 1])
      : setRedArray([...redArray, value.length - 1])

    // removing letter from input box when user click backspace
    greenArray[greenArray.length - 1] > value.length - 1 &&
      setGreenArray(greenArray.filter((item) => item !== value.length))

    redArray[redArray.length - 1] > value.length - 1 &&
      setRedArray(redArray.filter((item) => item !== value.length))
  }

  return (
    <Fragment>
      <Container fixed>
        <Paper elevation={3} className={classes.paper}>
          <Grid className={classes.grid} container spacing={2}>
            <Grid item xs={12} md={6} style={{ textAlign: 'left' }}>
              <Typography
                component="h6"
                variant="h5"
                className={classes.typography}
              >
                Level : <i>{level.toUpperCase()}</i>
              </Typography>
              <Typography
                component="h6"
                variant="h5"
                className={classes.typography}
              >
                Time Limit : <i>{`${time / 60} minutes`}</i>
              </Typography>
              <br />
              <Typography
                component="h6"
                variant="h5"
                className={classes.typography}
              >
                Paragraph to type
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                component="h5"
                variant="h4"
                className={classes.typography}
              >
                Timer
              </Typography>
              <Timer />
            </Grid>
            <Grid item xs={12} className={classes.testParagraph}>
              <Typography
                component="p"
                variant="h6"
                className={classes.typography}
              >
                {/* @ts-ignore */}
                {paragraph.split('').map((character, index) => (
                  <span
                    style={{
                      background: greenArray.includes(index)
                        ? 'green'
                        : redArray.includes(index)
                        ? 'red'
                        : 'white',
                    }}
                  >
                    {character}
                  </span>
                ))}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Start Typing..."
                name="notes"
                variant="outlined"
                rows={4}
                multiline
                onChange={handleText}
              />
            </Grid>
            <Grid item xs={12}>
              After Test Completion your score will be shown here
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Fragment>
  )
}
export default Typing
