import React, { useEffect, useRef, useState } from "react";

import { 
  Grid, 
  Container, 
  Typography,
  TextField,
  Button, 
  Box
} from '@mui/material';

import IconButton from '@mui/material/IconButton';

import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import useOutsideInactivator from "../../hooks/useOutsideInactivator";
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import EventRepeatRoundedIcon from '@mui/icons-material/EventRepeatRounded';

function AddNewTask() {
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);
  const [isActive, setIsActive] = useOutsideInactivator(wrapperRef);

  useEffect(() => {
    if (isActive) (inputRef.current && inputRef.current.focus());
  }, [isActive]);

  return (
    <Grid 
      container 
      ref={wrapperRef}
      sx={{
        padding: theme => theme.spacing(1),
        // paddingLeft: isActive ? '0px' : '7px',
        bgcolor: "background.paper",
        borderRadius: "4px",
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
        {/* {
          isActive ? (
            <IconButton aria-label="menu" sx={{marginLeft: "-7px"}}>
              <AddCircleOutlineRoundedIcon />
            </IconButton>
          ) : ("") 
        } */}
          
          <TextField 
            inputRef={inputRef}
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
              >Add</Button>
            </Box>
          </Grid>
        ) : ("") 
      }
    </Grid>

    
  );
}

export default AddNewTask;



