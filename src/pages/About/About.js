import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Image from 'material-ui-image'
import profilePic from '../../Assets/Selfie.jpg'
import { Card, CardActions, CardContent, Button } from '@material-ui/core'
import PDF from '../../Assets/GeneralResume.pdf'

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
  },
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  horizontalLine: {
    width: '70%',
    marginLeft: '18%'
  }
})

const About = () => {
  const classes = useStyles()

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h1" className={classes.aboutText}>Michael Ngo</Typography>
          <Typography variant="body1" className={classes.aboutText}>Aspiring Full Stack Developer</Typography>
          <hr className={classes.horizontalLine} />
        </Grid>
        <Grid item xs={6}>
          <Image src={profilePic} disableSpinner={true} disableTransition={true} imageStyle={{width: '70%', height: 'auto'}} />
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                About Me
              </Typography>
              <Typography variant="body2" component="p">
                Hello all. This is my portfolio, made with React. I have a love of technology and
                am currently studying to become a full stack developer. 
              </Typography>
            </CardContent>
            <CardActions>
              <Button href={PDF} size="small">Resume</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default About