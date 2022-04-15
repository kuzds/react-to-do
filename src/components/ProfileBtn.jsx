
import * as React from 'react';

import { 
    IconButton,
} from '@mui/material';

import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

function ProfileBtn() {
{/* <Avatar {...stringAvatar('Kent Dodds')} /> */}
    return (
        <IconButton aria-label="add to shopping cart" sx={{marginLeft: "auto" }}>
            <AccountCircleRoundedIcon />
        </IconButton>
    );
}

export default ProfileBtn;