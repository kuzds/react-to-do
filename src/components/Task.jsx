import { 
  Box,
  Typography,
  IconButton
} from '@mui/material';

import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import useTasker from '../hooks/useTasker';


const Task = ({task}) => {
  const tasker = useTasker();

  const removeTask = () => {
    tasker.removeTaskById(task.id)
  }
  const toggleTask = () => {
    tasker.toggleTaskById(task.id)
  } 

  return (
    <Box 
      sx={{
        display: "flex",
        width: "100%",
        p: 1,
        boxSizing: "border-box",
        bgcolor: "background.paper",
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
        borderRadius: 1,
        boxShadow: 1
      }}
    >  
      <Box
        sx={{
          display: "flex",
          alignItems:"center",
          overflow: "hidden",
          border: 1,
          borderColor: 'action.disabled',
          borderRadius: 1,
          width: "100%",
          p: "8px 2px",
        }}
      >
      <IconButton aria-label="menu" sx={{flexGrow: 0}} onClick={toggleTask}>
        { 
          task.completed ?
          <CheckCircleOutlineRoundedIcon /> :
          <RadioButtonUncheckedRoundedIcon />
        }
      </IconButton>
      <Typography 
        variant="subtitle1"
        sx={{
          color: "text.secondary",
          wordWrap: "break-word",
          wordBreak: "break-word",
          flexGrow: 1,
        }}
      >
        {task.description}
      </Typography>
      {
        task.completed ? 
        <IconButton aria-label="menu" sx={{flexGrow: 0}} onClick={removeTask}>
          <DeleteRoundedIcon />
        </IconButton>
        : ""
      }
      </Box>
    </Box>
  )
}

export default Task;