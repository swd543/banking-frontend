import { createMuiTheme } from '@material-ui/core'
import { blueGrey, green } from '@material-ui/core/colors'

export default createMuiTheme({
  palette: {
    primary: green,
    secondary: blueGrey,
  },
  typography: {
    useNextVariants: true,
  },
})
