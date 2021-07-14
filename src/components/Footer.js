import { AppBar, Container, Toolbar, Typography, makeStyles } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'grey'
  },
  clickableIcon: {
    color: 'white',
    '&:hover': {
    color: 'yellow'
    }
  }
})

const Footer = () => {
  const classes = useStyles()

  return (
    <AppBar position="static" color="primary" className={classes.root}>
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit">
            © 2019 Michael Ngo
          </Typography>
          <GitHubIcon onClick={() => window.open('https://github.com/DeviantSchemist')} className={classes.clickableIcon} />
          <FacebookIcon onClick={() => window.open('https://www.facebook.com/michael.ngo.9')} className={classes.clickableIcon} />
          <LinkedInIcon onClick={() => window.open('https://www.facebook.com/michael.ngo.9')} className={classes.clickableIcon}/>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Footer