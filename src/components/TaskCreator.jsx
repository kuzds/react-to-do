import React, { useState, useRef } from "react";

import { 
  Grid, 
  TextField,
  Button, 
  Box
} from '@mui/material';

import IconButton from '@mui/material/IconButton';

import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import EventRepeatRoundedIcon from '@mui/icons-material/EventRepeatRounded';

import useTasker from "../hooks/useTasker";

function TaskCreator() {
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);
  const tasker = useTasker();
  const [description, setDescription] = useState("");

  const addTask = () => {
    tasker.addTask({ description })
    setDescription('');
  }
  const onKeyPress = (ev) => { if (ev.key === 'Enter') addTask() }
  const handleChange = (ev) => { setDescription(ev.target.value) }
  return (
    <Grid 
      container 
      ref={wrapperRef}
      sx={{
        p: 1,
        bgcolor: "background.paper",
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.05))",
        borderRadius: 1,
        boxShadow: 1,
      }}
    >
      <Grid item xs={12}>
        <Box 
          sx={{
            display: "flex",
            width: "100%",
            alignItems:"center",
          }}
        >          
          <TextField 
            inputRef={inputRef}
            autoComplete='off'
            label="New task" 
            variant="outlined" 
            fullWidth
            size="small"
            onKeyPress={onKeyPress}
            value={description}
            onChange={handleChange}
          />
          
        </Box>
      </Grid>
        <Grid item xs={12} sx={{pt:1}}>
          <Box 
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
            }}
          >
            <IconButton aria-label="menu" >
              <CalendarMonthRoundedIcon />
            </IconButton>
            <IconButton aria-label="menu" >
              <NotificationsNoneRoundedIcon />
            </IconButton>
            <IconButton aria-label="menu" >
              <EventRepeatRoundedIcon />
            </IconButton>
            <Button 
              sx={{ml:"auto"}} 
              variant="outlined"
              color="inherit"
              size="small"
              onClick={addTask}
              disabled={!description.length}
            >Add</Button>
          </Box>
        </Grid>
    </Grid>
  );
}

export default TaskCreator;