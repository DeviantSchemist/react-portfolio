import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  grid: {
    marginTop: '10%'
  }
})

const Projects = () => {
  const classes = useStyles()

  return (
    <>
      <Grid container spacing={10} justifyContent="center" className={classes.grid}>
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Project 1
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This is my first project.
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

        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Project 2
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This is my second project.
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

        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Project 3
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This is my third project.
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