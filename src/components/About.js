import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
})

const About = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant="h2" gutterBottom>
        Michael Ngo
      </Typography>
    </div>
  )
}

export default About