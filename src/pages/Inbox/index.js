import { 
  Grid, 
  Container, 
  Typography,
  TextField,
  Button, 
  Box
} from '@mui/material';
import { useEffect } from 'react';


import AddNewTask from '../../components/AddNewTask';
import useTasker from '../../hooks/useTasker';

function Inbox() {
  const tasker = useTasker();
  useEffect(() => {
    console.log("Inbox", tasker.tasks)
    // console.log(tasker.tasks.map(task => task.des))
  }, [tasker])

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
        {
          tasker.tasks.map(task => (<Grid item xs={12} key={task.id}>{task.description}</Grid>))
        }
      </Grid>
    </Container>
  );
}

export default Inbox;