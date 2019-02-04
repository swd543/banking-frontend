import {
  Icon,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableFooter,
  Button,
} from '@material-ui/core'
import '@material-ui/icons'
import { Edit } from '@material-ui/icons'
import React from 'react'

const UserContainer = props => {
  const { users, openHandler } = props
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="left">Date of Joining</TableCell>
          <TableCell align="left">Name</TableCell>
          <TableCell align="left">Email</TableCell>
          <TableCell align="left">Gender</TableCell>
          <TableCell align="left">Age</TableCell>
          <TableCell align="left" style={{ width: 10 }} />
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user, i) => (
          <TableRow key={i}>
            <TableCell align="left">{user.dateOfJoining}</TableCell>
            <TableCell align="left">{user.name}</TableCell>
            <TableCell align="left">{user.email}</TableCell>
            <TableCell align="left">{user.gender}</TableCell>
            <TableCell align="left">{user.age}</TableCell>
            <TableCell align="left">
              <IconButton>
                <Icon>
                  <Edit />
                </Icon>
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={7}>
            <Button
              style={{ width: '100%' }}
              variant="outlined"
              color="secondary"
              onClick={openHandler}
            >
              Add another
            </Button>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}

export default UserContainer
