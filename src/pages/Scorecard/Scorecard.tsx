import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ScorecardTable, Loader } from '../../components'
import { scorecard } from '../../redux'

interface ScorecardProps {}

const Scorecard: React.FC<ScorecardProps> = () => {
  const dispatch = useDispatch()
  const scorecardInfo = useSelector((state: any) => state?.scorecard)
  const { scorecardData = [] } = scorecardInfo || []
  useEffect(() => {
    dispatch(scorecard())
  }, [dispatch])
  return (
    <>
      {scorecardData.length ? (
        <ScorecardTable scorecardData={scorecardData} />
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Scorecard
