import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Image from 'material-ui-image'

const useStyles = makeStyles({
  name: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  paper: {
    backgroundColor: 'grey'
  },
  aboutText: {
    textAlign: 'center'
  }
})

const About = () => {
  const classes = useStyles()

  return (
    // <div className={classes.name}>
    //   <Typography variant="h1" gutterBottom>Michael Ngo</Typography>
    //   <Paper elevation={0} variant="outlined" className={classes.paper}>
    //     <Typography variant="body1" className={classes.aboutText}>
    //       Hello my name is Michael. I am an aspiring full stack developer. Here is my portfolio.
    //       A little about me: my hobbies include playing video games and learning new things.
    //     </Typography>
    //   </Paper>
    // </div>

    <>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h1" className={classes.aboutText}>Michael Ngo</Typography>
          <Typography variant="h5" className={classes.aboutText}>Aspiring full stack developer</Typography>
        </Grid>
        <Grid item xs={6}>
          <Image src="../../Assets/Milk.png" />
        </Grid>
        <Grid item xs={6}>
          
        </Grid>
      </Grid>
    </>
  )
}

export default About