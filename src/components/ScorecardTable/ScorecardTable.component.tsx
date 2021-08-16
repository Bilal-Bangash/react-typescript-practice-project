import React, { FC } from 'react'
import {
  Container,
  Paper,
  Table,
  TableContainer,
  TablePagination,
} from '@material-ui/core'
import { TableHeader, TableBody } from './components'
import { scorecardTableStyles } from './ScorecardTable.styles'

interface Column {
  id: 'name' | 'percentage' | 'score' | 'photoURL'
  label: string
  minWidth?: number
  align?: 'right'
  photoURL?: string
  format?: (value: number) => string
}

const columns: Column[] = [
  { id: 'name', label: 'Name', minWidth: 50 },
  { id: 'photoURL', label: 'Profile', minWidth: 50 },
  { id: 'score', label: 'Score', minWidth: 100 },
]

interface ScorecardTableProps {
  scorecardData: Array<any>
}

const ScorecardTable: FC<ScorecardTableProps> = ({ scorecardData }) => {
  const classes = scorecardTableStyles()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Container>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHeader columns={columns} />
            <TableBody
              scorecardData={scorecardData}
              columns={columns}
              page={page}
              rowsPerPage={rowsPerPage}
              classes={classes}
            />
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={scorecardData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Container>
  )
}
export default ScorecardTable
