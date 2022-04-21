import { 
  Grid, 
  Container, 
  Typography,
  Accordion,
  AccordionSummary,
} from '@mui/material';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AssignmentIcon from '@mui/icons-material/Assignment';

import TaskCreator from '../../components/TaskCreator';
import Task from '../../components/Task';

import useTasker from '../../hooks/useTasker';

function Inbox() {
  const tasker = useTasker()

  const activeTask    = tasker.tasks.filter(task => task.completed === false)
  const completedTask = tasker.tasks.filter(task => task.completed === true)

  const [expanded, setExpanded] = useState(false)

  const handleChange = (ev, isExpanded) => { setExpanded(isExpanded) }

  return (
    <Container maxWidth="sm" xs={{padding: theme => theme.spacing(3)}}>
      <Grid container spacing={1} sx={{p:2}}>
        <Grid item xs={12} sx={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography variant="h5" gutterBottom sx={{alignItems: "center", display: "flex"}}>
            <AssignmentIcon color="primary" sx={{ fontSize: 40, mr:1 }}/>
            All Tasks
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TaskCreator/>
        </Grid>
        <Grid 
          item
          container 
          spacing='2px'
          xs={12} 
          sx={{
            overflowY:"scroll", 
            maxHeight: "60vh",
            pb: 1,
          }}
        >
          {
            activeTask.map(task => (
              <Grid item xs={12} key={task.id} sx={{ ml: "7px", mr: "2px"}}>
                <Task task={task}/>
              </Grid>
            ))
          }
          <Grid item xs={12} sx={{ ml: "7px", mr: "2px", boxSizing: "border-box" }} >
            { completedTask.length > 0 ? (
              <Accordion 
                disableGutters 
                expanded={expanded} 
                onChange={handleChange}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                  <Typography sx={{ color: "text.secondary" }}>
                    Completed tasks
                  </Typography>
                </AccordionSummary>
              </Accordion>
              ) : ""
            }
          </Grid>
          {
            expanded ? 
            completedTask.map(task => (
              <Grid item xs={12} key={task.id} sx={{ ml: "7px", mr: "2px"}}>
                <Task task={task}/>
              </Grid>
            )) 
            : ""
          }
        </Grid>
      </Grid>
    </Container>
  )
}

export default Inbox;