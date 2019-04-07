import React, { FunctionComponent } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  withStyles,
  TextField,
  Select,
  MenuItem,
  InputLabel
} from "@material-ui/core";

interface IProps {
  open: boolean;
  closeHandler: any;
  classes: any;
}

interface IUser {
  name: string;
  gender: "male" | "female" | "chakka" | undefined;
  email: string;
  age: number;
  dateOfJoining: Date;
}

const styles = {
  card: {
    minWidth: 50
  }
};

const AddUserDialog: FunctionComponent<IProps> = props => {
  const { open, closeHandler, classes } = props;
  return (
    <Dialog open={open} onClose={closeHandler} className={classes.card}>
      <DialogTitle>Add/Edit user</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
        />
        <TextField autoFocus margin="dense" id="name" label="Name" />
        <TextField autoFocus margin="dense" id="name" label="Name" />
        <InputLabel htmlFor="age-simple">Age</InputLabel>
        <Select
          inputProps={{
            name: "age",
            id: "age-simple"
          }}
          value={10}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeHandler}>Okay</Button>
      </DialogActions>
    </Dialog>
  );
};

export default withStyles(styles)(AddUserDialog);
