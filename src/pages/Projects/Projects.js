import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import firstProjectImage from '../../Assets/Project1.png'
import secondProjectImage from '../../Assets/ComicCol.png'
import passwordGenerator from '../../Assets/PasswordGenerator.png'
import techBlog from '../../Assets/TechBlog.png'
import noteTaker from '../../Assets/NoteTaker.png'
import tributePage from '../../Assets/TributePage.png'

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
    marginTop: '-6%'
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

        {/* OutIn */}
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
                  OutIn
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

        {/* ComicCol */}
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
                  ComicCol
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

        {/* Password Generator */}
        <Grid item xs={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={passwordGenerator}
                title="Password Generator"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Password Generator
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Users can create a password using multiple combinations of numbers,
                  symbols, and letters.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button href="https://github.com/DeviantSchemist/PasswordGenerator" size="small" color="primary">
                Repo
              </Button>
              <Button href="https://deviantschemist.github.io/PasswordGenerator/" size="small" color="primary">
                Deployed
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Tech Blog */}
        <Grid item xs={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={techBlog}
                title="Tech Blog"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Tech Blog
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A blog for users to post and comment on their experiences within the tech industry.
                  Users can create accounts and log in to make posts. They can also comment on other
                  users' posts.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button href="https://github.com/DeviantSchemist/TechBlog" size="small" color="primary">
                Repo
              </Button>
              <Button href="https://protected-shore-78159.herokuapp.com/index.html" size="small" color="primary">
                Deployed
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Note Taker */}
        <Grid item xs={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={noteTaker}
                title="Note Taker"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Note Taker
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Users can create notes for whatever they need. Menial tasks, to do lists,
                  you name it!
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button href="https://github.com/DeviantSchemist/NoteTaker" size="small" color="primary">
                Repo
              </Button>
              <Button href="https://damp-hollows-38248.herokuapp.com/" size="small" color="primary">
                Deployed
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Tribute Page */}
        <Grid item xs={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={tributePage}
                title="Tribute Page"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Tribute Page
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A Tribute Page for a special character. View for yourself exactly who that is!
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button href="https://github.com/DeviantSchemist/TributePage" size="small" color="primary">
                Repo
              </Button>
              <Button href="https://deviantschemist.github.io/TributePage/" size="small" color="primary">
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