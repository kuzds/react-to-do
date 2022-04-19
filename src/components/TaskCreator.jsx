import React, { useEffect, useRef, useState } from "react";

import { 
  Grid, 
  TextField,
  Button, 
  Box
} from '@mui/material';

import IconButton from '@mui/material/IconButton';

import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import useClickActivator from "../hooks/useClickActivator";
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import EventRepeatRoundedIcon from '@mui/icons-material/EventRepeatRounded';

import useTasker from "../hooks/useTasker";

function TaskCreator() {
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);
  const [isActive, setIsActive] = useClickActivator(wrapperRef);
  const tasker = useTasker();

  useEffect(() => {
    if (isActive) (inputRef.current && inputRef.current.focus());
  }, [isActive]);

  const addTask = () => {
    tasker.addTask({
      description: inputRef.current.value
    })
    inputRef.current.value = '';
  }

  return (
    <Grid 
      container 
      ref={wrapperRef}
      sx={{
        padding: theme => theme.spacing(1),
        bgcolor: "background.paper",
        borderRadius: "4px",
        boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"
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
          />
          
        </Box>
      </Grid>
      {
        isActive ? (
          <Grid item xs={12} sx={{paddingTop: theme => theme.spacing(1)}}>
            <Box 
              sx={{
                display: "flex",
                width: "100%",
                alignItems:"center",
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
                sx={{marginLeft:"auto"}} 
                variant="outlined"
                color="inherit"
                size="small"
                onClick={addTask}
              >Add</Button>
            </Box>
          </Grid>
        ) : ("") 
      }
    </Grid>
  );
}

export default TaskCreator;