import { FormControl, InputLabel, Input, FormHelperText, Typography, makeStyles, TextareaAutosize } from '@material-ui/core'

const useStyles = makeStyles({
  forms: {
    display: 'block'
  }
})

const Contact = () => {
  const classes = useStyles()

  return (
    <>
      <Typography variant="h2">
        Contact
      </Typography>

      <FormControl className={classes.forms}>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
      </FormControl>

      <FormControl className={classes.forms}>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
      </FormControl>

      <TextareaAutosize aria-label="minimum height" minRows={3} placeholder="Minimum 3 rows" />
    </>
  )
}

export default Contact