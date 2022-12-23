import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import HomeIcon from'@mui/icons-material/Home';
import NutritionSearch from './NutritionSearch';
import { Link} from "react-router-dom"
const pages = ['SoccerHome', 'NFL', 'LiveSoccer'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
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

  return (
    <AppBar position="static">
      <Container maxWidth="xl"> 
        <Toolbar disableGutters style={{ justifyContent: 'space-between' }}>
          {/* <HomeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          {/* <IconButton sx={{ backgroundImage:"linear-gradient(to right, silver ,turquoise, gold)", color: 'purple'}} variant='outlined' href='/' aria-label="Home">
  <HomeIcon sx={{ color: 'white' }} /> Home
</IconButton> */}
{/* <Button sx={{ backgroundImage:"linear-gradient(to right, red , yellow)", color: 'white', paddingRight: '20px'}} href="/" variant="contained" >
  <HomeIcon/>
      </Button> */}
          {/* <Typogr
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            HOME
          </Typography> */}

        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              background: "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(148,70,252,1) 100%)",
              border: "2px solid white",
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ⌂HOME
          </Typography>


          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/soccerHighlights"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
              border: "2px solid white",
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ⚽Highlights
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/nfl"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
              border: "2px solid white",
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            NFL🏈
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/xg"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
              border: "2px solid white",
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Live⚽
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/Weather"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
              border: "2px solid white",
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Weather
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/ToDoList"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              
              background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
              border: "2px solid white",
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ToDoList
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/TicTacToe"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              border: "2px solid white",
              background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           TicTacToe
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/Chatapp"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              border: "2px solid white",
              background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           ChatApp
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/gradecalculator"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              border: "2px solid white",
              background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           Grade Calc
          </Typography>
          
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/graph"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              border: "2px solid white",
              background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           Graph
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/historytoday"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              border: "2px solid white",
              background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.01rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           HistoryToday
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/nutrition"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              border: "2px solid white",
              background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.01rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           Nutrition
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
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              
            </Menu>
            
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
         
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;