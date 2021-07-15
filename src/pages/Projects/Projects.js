import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import firstProjectImage from '../../Assets/Project1.png'
import secondProjectImage from '../../Assets/ComicCol.png'

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  grid: {
    marginTop: '10%'
  },
  typo: {
    textAlign: 'center',
    marginTop: '-4%'
  }
})

const Projects = () => {
  const classes = useStyles()

  return (
    <>
      <Grid container spacing={10} justifyContent="center" className={classes.grid}>
        <Grid item xs={12}>
          <Typography variant="h2" className={classes.typo}> Projects </Typography>
        </Grid>

        <Grid item xs={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={firstProjectImage}
                title="First Project"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Project 1
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This is a food finder application. Unique in that users will search for a particular
                  food they want, and the app displays to them recipes for that food as well as nearby
                  restaurants that serve that food. Users can then favorite either recipes or
                  restaurant locations for future lookup.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button href="https://github.com/DeviantSchemist/Project1" size="small" color="primary">
                Repo
              </Button>
              <Button href="https://deviantschemist.github.io/Project1/" size="small" color="primary">
                Deployed
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={secondProjectImage}
                title="Second Project"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Project 2
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A comic collection application. Users can search for comics and add ones that
                  they like to their favorites list. They can also see comments on particular
                  comics that they search for. They can send the developers feedback using the
                  side navigation bar.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button href="https://github.com/CharlotteFrancis/ComicCol" size="small" color="primary">
                Repo
              </Button>
              <Button href="https://comiccol.herokuapp.com/" size="small" color="primary">
                Deployed
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Third Project"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Project 3
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This is my third project. Have yet to finish it.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Repo
              </Button>
              <Button size="small" color="primary">
                Deployed
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default Projects