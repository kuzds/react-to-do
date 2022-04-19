import { 
  Grid, 
  Container, 
  Typography,
  TextField,
  Button, 
  Box
} from '@mui/material';
import { useEffect } from 'react';


import TaskCreator from '../../components/TaskCreator';
import Task from '../../components/Task';

import useTasker from '../../hooks/useTasker';

function Inbox() {
  const tasker = useTasker();

  return (
    <Container maxWidth="md" xs={{padding: theme => theme.spacing(3)}}>
      <Grid container spacing='2px'>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            All Tasks.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TaskCreator/>
        </Grid>
        <Grid 
          spacing='2px'
          container 
          item xs={12} 
          sx={{
            overflowY:"scroll", 
            maxHeight: "600px",
          }}
        >
        {
          tasker.tasks.map(task => (<Grid item xs={12} key={task.id}><Task task={task}/></Grid>))
        }
      </Grid>
      </Grid>
    </Container>
  );
}

export default Inbox;