import { AppBar, Toolbar, Typography, Button, makeStyles, Link } from '@material-ui/core'
import ComputerSharpIcon from '@material-ui/icons/ComputerSharp'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navButtons: {
    marginLeft: 'auto',
  },
  navText: {
    paddingLeft: '2%',
  },
  navBarColor: {
    backgroundColor: 'grey'
  }
}))

const NavbarComponent = () => {
  const classes = useStyles()
  return (
    <AppBar position="static" className={classes.navBarColor}>
      <Toolbar>
        <ComputerSharpIcon />
        <Typography variant="inherit" color="inherit" className={classes.navText}>
          <Link href="/" color="inherit">Michael Ngo</Link>
        </Typography>
        <div className={classes.navButtons}>
          <Button href="/about" color="inherit" className={classes.menuButton}>About</Button>
          <Button href="/projects" color="inherit" className={classes.menuButton}>
            Projects
          </Button>
          <Button href="/contact" color="inherit" className={classes.menuButton}>
            Contact
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default NavbarComponent