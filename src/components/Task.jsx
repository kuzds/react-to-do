
import { 
  Box,
  Typography
} from '@mui/material';

const Task = ({task}) => {

  return (
        <Box 
          sx={{
            display: "flex",
            width: "100%",
            padding: theme => theme.spacing(1),
            boxSizing: "border-box",
            bgcolor: "background.paper",
            borderRadius: "4px",
            boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"
          }}
        >  
          <Box
            sx={{
              display: "flex",
              alignItems:"center",
              overflow: "hidden"
            }}
          >
          <Typography 
            variant="subtitle1"
          >
          {task.description}
          </Typography>
            
          </Box>
        </Box>
  )
}

export default Task;