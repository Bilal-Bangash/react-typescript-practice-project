import React from 'react'
import { TableCell, TableHead, TableRow } from '@material-ui/core'

interface TableHeaderProps {
  columns: Array<any>
}

const TableHeader: React.FC<TableHeaderProps> = ({ columns }) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.id}
            align={column.align}
            style={{ minWidth: column.minWidth }}
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
export default TableHeader
