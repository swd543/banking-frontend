import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  withStyles,
} from '@material-ui/core'

const styles = {
  card: {
    minWidth: 50,
  },
}

const AddUserDialog = props => {
  const { open, closeHandler, classes } = props
  return (
    <Dialog open={open} onClose={closeHandler} className={classes.card}>
      <DialogTitle>Add/Edit user</DialogTitle>
      <DialogContent>Set user name</DialogContent>
      <DialogActions>
        <Button onClick={closeHandler}>Okay</Button>
      </DialogActions>
    </Dialog>
  )
}

export default withStyles(styles)(AddUserDialog)
