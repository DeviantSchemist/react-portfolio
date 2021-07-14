import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  name: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  paper: {
    backgroundColor: 'grey'
  },
  aboutText: {
    color: 'white'
  }
})

const About = () => {
  const classes = useStyles()

  return (
    <div className={classes.name}>
      <Typography variant="h1" gutterBottom>Michael Ngo</Typography>
      <Paper elevation={0} variant="outlined" className={classes.paper}>
        <Typography variant="body1" className={classes.aboutText}>
          Hello my name is Michael. I am an aspiring full stack developer. Here is my portfolio.
          A little about me: my hobbies include playing video games and learning new things.
        </Typography>
      </Paper>
    </div>
  )
}

export default About