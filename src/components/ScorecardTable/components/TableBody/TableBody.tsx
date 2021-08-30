import React from 'react'
import { TableBody as Body, TableCell, TableRow } from '@material-ui/core'

interface TableBodyProps {
  scorecardData: Array<any>
  columns: Array<any>
  page: number
  rowsPerPage: number
  classes: any
}

const TableBody: React.FC<TableBodyProps> = ({
  scorecardData,
  columns,
  page,
  rowsPerPage,
  classes,
}) => {
  return (
    <Body>
      {scorecardData
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row: any, index:number) => {
          return (
            <TableRow hover role="checkbox" tabIndex={-1} key={index}>
              {columns.map((column) => {
                const value = row[column.id]
                return (
                  <TableCell key={column.id} align={column.align}>
                    {column.format && typeof value === 'number' ? (
                      column.format(value)
                    ) : column.id === 'photoURL' ? (
                      <img
                        src={value}
                        className={classes.userImg}
                        alt="Tester Profile"
                      />
                    ) : (
                      value
                    )}
                  </TableCell>
                )
              })}
            </TableRow>
          )
        })}
    </Body>
  )
}
export default TableBody
