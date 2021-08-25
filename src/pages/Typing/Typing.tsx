import { Fragment, FC, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Paper, Grid, TextField } from '@material-ui/core'
import { TypingHeader, Typography, Result, Loader } from '../../components'
import { typingStyles } from './Typing.styles'
import { saveTestResult } from '../../redux'

interface TypingProps {}

const Typing: FC<TypingProps> = () => {
  const {
    testData: { testInfo: { paragraph = '', level = '', time = 0 } = {} } = {},
    userLogin: { userInfo: { displayName = '', photoURL = '' } = {} } = {},
  } = useSelector((state: any) => state)
  // const [wordsArray, setWordsArray] = useState<any>([])
  const dispatch = useDispatch()
  const classes = typingStyles()

  const [correctEntries, setCorrectEntries] = useState<number>(0)
  const [inCorrectEntries, setInCorrectEntries] = useState<number>(0)
  const [greenArray, setGreenArray] = useState<Array<number>>([])
  const [redArray, setRedArray] = useState<Array<number>>([])
  const [stop, setStop] = useState<boolean>(false)
  const [result, setResult] = useState({
    accuracy: 0,
    netWPM: 0,
  })

  // useEffect(() => {
  //   const wordArr = paragraph.split(' ')
  //   setWordsArray(wordArr)
  // }, [paragraph])
  // console.log('wordArr', wordsArray)
  const handleText = ({ target: { value = '' } }) => {
    value === paragraph && handleTimeStop()
    //while typing inserting each letter that is correct into green array and wrong one in red
    value.charAt(value.length - 1) === paragraph.charAt(value.length - 1)
      ? setCorrectEntries(correctEntries + 1)
      : setInCorrectEntries(inCorrectEntries + 1)

    value.charAt(value.length - 1) === paragraph.charAt(value.length - 1)
      ? setGreenArray([...greenArray, value.length - 1])
      : setRedArray([...redArray, value.length - 1])

    // removing letter from input box when user click backspace
    greenArray[greenArray.length - 1] > value.length - 1 &&
      setGreenArray(greenArray.filter((item) => item !== value.length))

    redArray[redArray.length - 1] > value.length - 1 &&
      setRedArray(redArray.filter((item) => item !== value.length))
  }

  const handleTimeStop = () => {
    setStop(true)
    // @ts-ignore
    const timeSpent = (time - parseInt(localStorage.getItem('time-remaining'))) / 60;
    const grossWPM = correctEntries / 5 / timeSpent
    const netWPM = grossWPM - inCorrectEntries / timeSpent
    const accuracy = (correctEntries / paragraph.length) * 100
    setResult({ accuracy, netWPM })
    dispatch(saveTestResult(displayName, photoURL, accuracy, netWPM))
  }
  return (
    <Fragment>
      {!paragraph && !displayName ? (
        <Loader />
      ) : (
        <Container fixed>
          <Paper elevation={3} className={classes.paper}>
            <Grid className={classes.grid} container spacing={2}>
              <TypingHeader
                stop={stop}
                time={time}
                level={level}
                handleTimeStop={handleTimeStop}
              />
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
                  <Result level={level} user={displayName} time={time} result={result}/>
                )}
              </Grid>
            </Grid>
          </Paper>
        </Container>
      )}
    </Fragment>
  )
}
export default Typing
