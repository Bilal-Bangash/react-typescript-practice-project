import { Fragment, FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { Container, Paper, Grid, TextField } from '@material-ui/core'
import { Timer, Typography, Result } from '../../components'
import { typingStyles } from './Typing.styles'

interface TypingProps {}

const Typing: FC<TypingProps> = () => {
  const {
    testData: { testInfo: { paragraph = '', level = '', time = 0 } = {} } = {},
    userLogin: { userInfo: { displayName = '' } = {} } = {},
  } = useSelector((state: any) => state)

  const classes = typingStyles()
  const [greenArray, setGreenArray] = useState<Array<number>>([])
  const [redArray, setRedArray] = useState<Array<number>>([])
  const [stop, setStop] = useState<boolean>(false)

  const handleText = ({ target: { value = '' } }) => {
    value === paragraph && setStop(true)
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
  const handleTimeStop = () => setStop(true)
  return (
    <Fragment>
      <Container fixed>
        <Paper elevation={3} className={classes.paper}>
          <Grid className={classes.grid} container spacing={2}>
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
              <Typography
                component="h5"
                variant="h4"
                className={classes.typography}
              >
                Timer
              </Typography>
              <Timer time={time} stop={stop} handleTimeStop={handleTimeStop} />
            </Grid>
            <Grid item xs={12} className={classes.testParagraph}>
              <Typography component="p" variant="h6">
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
                disabled={stop}
                multiline
                onChange={handleText}
              />
            </Grid>
            {/* @ts-ignore */}
            <Grid item xs={12} align="center">
              {!stop ? (
                <Typography
                  component="h5"
                  variant="h4"
                  className={classes.typography}
                >
                  After Test Completion your score will be shown below
                </Typography>
              ) : (
                <>
                  <Typography
                    component="h5"
                    variant="h5"
                    className={classes.typography}
                  >
                    Speed Typing Result
                  </Typography>
                  <br />
                  <Result level={level} user={displayName} time={time} />
                </>
              )}
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Fragment>
  )
}
export default Typing
