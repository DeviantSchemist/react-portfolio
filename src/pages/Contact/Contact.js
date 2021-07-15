import { FormControl, InputLabel, Input, FormHelperText, Typography, makeStyles, TextareaAutosize, Grid } from '@material-ui/core'

const useStyles = makeStyles({
  forms: {
    display: 'block'
  },
  center: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    marginTop: '-4%'
  },
  inputMargin: {
    marginTop: '15%'
  }
})

const Contact = () => {
  const classes = useStyles()

  return (
    <>
      <Grid className={classes.center}>
        <Typography variant="h2">
          Contact
        </Typography>

        <FormControl className={classes.forms}>
          <InputLabel htmlFor="my-input" required={true}>Name</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>

        <FormControl className={classes.forms}>
          <InputLabel htmlFor="my-input" required={true}>Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>

        <TextareaAutosize aria-label="minimum height" minRows={8} placeholder="Comments" className={classes.inputMargin} />
      </Grid>
    </>
  )
}

export default Contact