import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link, TextField } from '@mui/material';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HelpIcon from '@mui/icons-material/Help';
import PersonIcon from '@mui/icons-material/Person';
import LanguageIcon from '@mui/icons-material/Language';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
const pages = ['living', 'dining', 'bedrooms', 'outdoor', 'office', 'lighting', 'rugs', 'accessories', 'brand', 'inspiration', 'gifts', 'sales'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const Nav = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    

    return (
        <Box sx={{ borderTop: "5px solid black" }}>
            {/* nav1 */}
            <Box>
                <Stack direction={"row"} sx={{ padding: "0px 20px" }} alignItems={"center"}>
                    <Typography variant="h4" component="h2" sx={{ textTransform: "uppercase", flexGrow: "1" }}>
                        eq3
                    </Typography>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="black" href="/" sx={{ padding: "0 10px " }}>
                            <FmdGoodIcon />
                        </Link>
                        <Link
                            underline="hover"
                            color="black"
                            href="#"
                            sx={{ padding: "0 10px " }}
                        >
                            <HelpIcon />
                        </Link>
                        <Link
                            underline="hover"
                            color="black"
                            href="#"
                            sx={{ padding: "0 10px " }}
                        >
                            <FavoriteBorderIcon />
                        </Link>
                        <Link
                            underline="hover"
                            color="black"
                            href="#"
                            sx={{ padding: "0 10px " }}
                        >
                            <Stack direction={"row"} alignItems="center" >
                            <PersonIcon />
                            <Typography variant='caption' sx={{ textTransform: "capitalize",marginLeft:"10px" }}>join us / login to EQ3</Typography>
                            </Stack>
                        </Link>
                        <Link
                            underline="hover"
                            color="black"
                            href="#"
                            sx={{ padding: "0 10px " }}
                        >
                            <Stack direction={"row"} alignItems="center" >

                            <LanguageIcon />
                            <Typography variant='caption' sx={{ textTransform: "uppercase" ,marginLeft:"10px"  }}> en / cad</Typography>
                            </Stack>
                        </Link>
                        <Button startIcon={<ShoppingCart/>} sx={{color:'black' , border:"1px solid gray"}}>cart(0) </Button>
                    </Breadcrumbs>
                </Stack>
            </Box>
            {/* nav2  */}
            <AppBar position="static" sx={{ borderTop: "1px solid gray", borderBottom: "1px solid gray", bgcolor: "white", color: "black", padding: 0 }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, padding: "0 10px", margin: 0 }}>
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
                                sx={{ display: { xs: 'block', md: 'none' } }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                textTransform: "uppercase"
                            }}
                        >
                            eq3
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ color: 'black', textTransform: "capitalize", fontWeight: "500", display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
    
                            <Box sx={{ padding: "0px" }}>
                                <TextField
                                    placeholder="search...."
                                    variant="outlined"
                                />
                                <SearchIcon sx={{color:"gray" ,position:"relative" , left:"-35px" , top:"15px"}}/>
                            </Box>
                            <Menu
                                sx={{ mt: '45px' }}
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
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            {/* nav3 */}
            <Box sx={{ backgroundColor: "#F5A049", padding: "5px " }}>
                <Typography sx={{ textAlign: 'center', textTransform:"capitalize" }}>labour day: enjoy 20%off Eq3 </Typography>
            </Box>

        </Box>
    )
}

export default Nav
