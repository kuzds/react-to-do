import { 
  Grid, 
  Container, 
  Typography,
  TextField,
  Button, 
  Box
} from '@mui/material';


import AddNewTask from '../../components/AddNewTask';

function NotFound() {

  return (
    <Container maxWidth="md" xs={{padding: theme => theme.spacing(3)}}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            All Tasks.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <AddNewTask/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default NotFound;