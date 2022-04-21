import * as React from "react"

import MenuIcon from '@mui/icons-material/Menu';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container,
    Box,
    Tooltip,
    Menu,
    MenuItem,
    IconButton,
    Avatar,
    Divider
} from "@mui/material";

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import GitHubIcon from '@mui/icons-material/GitHub';

import { Link, useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import useThemeMode from "../../hooks/useThemeMode";

import stringAvatar from "./stringAvatar";

const Header = () => {
    const auth = useAuth();
    const theme = useThemeMode();
    const navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleSelectNavMenu = (onClick) => () => {
        setAnchorElNav(null);
        onClick();
    };

    const handleSelectUserMenu = (onClick) => () => {
        setAnchorElUser(null);
        onClick();
    };
    
    const onLogOut = () => {
        auth.logOut();
        navigate("/login");
    };

    const pages = auth.user ? 
    [
        // { name: 'Myday'     , onClick: () => navigate("/tasks/myday")   }, 
        // { name: 'Planned'   , onClick: () => navigate("/tasks/planned") },
        { name: 'Inbox'     , onClick: () => navigate("/tasks/inbox")   },
    ] : [];

    const settings = auth.user ? 
    [
        {name: 'Profile'     , onClick: () => navigate("/profile")}, 
        {name: 'Logout'      , onClick: onLogOut }
    ] :
    [
        {name: 'Login'       , onClick: () => navigate("/login")}, 
        {name: 'Registration', onClick: () => navigate("/registration")}
    ];

    return (
        <AppBar position="static" sx= {{bgcolor:"primary.main"}}>
        <Container maxWidth="md">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              color="inherit"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, textDecoration: "none", }}
            >
              ToDo
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiPaper-root': {
                        bgcolor: 'background.default',
                    }
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={handleSelectNavMenu(page.onClick)}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
                <Divider/>
                <MenuItem key={"github"} onClick={handleCloseNavMenu}>
                  <Typography 
                    textAlign="center" 
                    component="a"
                    color="textPrimary"
                    href="https://github.com/dmitrKuznetsov/react-to-do"
                    target="_blank"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'nowrap',
                        textDecoration: "none",
                    }}  
                  >
                    <GitHubIcon />&nbsp;&nbsp;GitHub
                  </Typography>
                </MenuItem>
                <MenuItem key={"theme"} onClick={theme.toggleColorMode}>
                  <Typography 
                    textAlign="center" 
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'nowrap',
                    }}  
                  >
                    {theme.mode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}&nbsp;&nbsp;Theme
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              color="inherit"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', textDecoration: "none", } }}
            >
              ToDo
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={page.onClick}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0, display: 'flex' }}>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <IconButton
                  size="large"
                    href="https://github.com/dmitrKuznetsov/react-to-do"
                    target="_blank"
                    color="inherit"
                >
                  <GitHubIcon />
                </IconButton>

                <IconButton 
                  size="large"
                  sx={{ ml: 1 }} 
                  onClick={theme.toggleColorMode} 
                  color="inherit"
                >
                  {theme.mode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
                </IconButton>
              </Box>
              <Tooltip title="Account">
              <IconButton onClick={handleOpenUserMenu} sx={{ ml: 2, p: 0 }}>
                { auth.user ? (
                    <Avatar {...stringAvatar(auth.user)}  sx={{bgcolor: "secondary.main", color: 'secondary.contrastText'}}/>
                  ) : (
                    <Avatar />
                  )
                }
              </IconButton>
              </Tooltip>
              <Menu
                sx={{ 
                    mt: '45px', 
                    '& .MuiPaper-root': {
                        bgcolor: 'background.default',
                    }
                }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting.name} onClick={handleSelectUserMenu(setting.onClick)}>
                    <Typography textAlign="center" >{setting.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
        </AppBar>
    );
};


export default Header;