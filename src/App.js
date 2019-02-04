import '@material-ui/core'
import {
  AppBar,
  Icon,
  IconButton,
  MuiThemeProvider,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import React, { Component } from 'react'
import './App.css'
import AddUserDialog from './containers/AddUserDialog'
import theme from './styles'
import UserContainer from './containers/UserContainer'

class App extends Component {
  state = {
    showDialog: true,
    users: [],
  }

  handleCloseDialog = () => {
    this.setState({ ...this.state, showDialog: false })
  }

  handleOpenDialog = () => {
    this.setState({ ...this.state, showDialog: true })
  }

  componentWillMount() {
    fetch('/user')
      .then(r => r.json())
      .then(r => this.setState({ ...this.state, users: r }))
      .catch(e => console.error(e))
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AppBar position="sticky">
          <Toolbar>
            <IconButton>
              <Icon>
                <Menu />
              </Icon>
            </IconButton>
            <Typography variant="h5" color="inherit">
              Buga Boxes
            </Typography>
          </Toolbar>
        </AppBar>
        <UserContainer
          users={this.state.users}
          openHandler={this.handleOpenDialog}
        />
        <AddUserDialog
          open={this.state.showDialog}
          closeHandler={this.handleCloseDialog}
        />
      </MuiThemeProvider>
    )
  }
}

export default App
