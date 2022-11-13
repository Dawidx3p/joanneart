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
import MenuWLinks from './MenuWLinks'
import Link from 'next/link';

const malarstwo = [{title: 'Murale', url: 'murale'},{title: 'Obrazy', url: 'obrazy'},{title:  'Anioły', url: 'anioly'}];
const fotografia = [{title: 'Fotoreportaż', url: 'fotoreportaz'}, {title: 'Rodzinne sesje zdjęciowe', url: 'rodzinne_sesje'}, {title: 'Fotografia z natury', url: 'fotografia_natura'}]

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
        <Toolbar disableGutters>
            <Container sx={{ width: 'min-content', display: { xs: 'none', md: 'block' } }}>
                <img src="/logo.svg" width="70px" alt="logo" style={{filter: "invert(1) brightness(1.2)"}}/>
            </Container>
          

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
              
                  {malarstwo.map(page => <MenuItem key={page.url} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                        <Link href={`/${page.url}`}>{page.title}</Link>
                    </Typography>
                </MenuItem>)}
                
            </Menu>
          </Box>
          <Container sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
                <img src="/logo.svg" width="70px" alt="logo" style={{filter: "invert(1) brightness(1.2)"}}/>
            </Container>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems:'center' }}>
              <Link href={'/'}><Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >Strona Główna</Button></Link> 
              <MenuWLinks options={malarstwo} title="Malarstwo"/>
              <MenuWLinks options={fotografia} title="Fotografia artystyczna"/>
              <Link href={'/kontakt'}><Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >Kontakt</Button></Link> 
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          <Avatar alt="Joanna Dębiec" src="/profile.png" />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
