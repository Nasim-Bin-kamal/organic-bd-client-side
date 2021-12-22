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
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';

const pages = [
    {
        pageTitle: 'Home',
        pageLink: '/home'
    },
    {
        pageTitle: 'Shop',
        pageLink: '/shop'
    },
    {
        pageTitle: 'About',
        pageLink: '/about'
    },
    {
        pageTitle: 'Contact',
        pageLink: '/contact'
    }
];

const settings = [
    {
        pageTitle: 'Profile',
        pageLink: '/profile'
    },
    {
        pageTitle: 'Login',
        pageLink: '/login'
    },
    {
        pageTitle: 'Register',
        pageLink: '/register'
    },
    {
        pageTitle: 'Dashboard',
        pageLink: '/dashboard'
    }

];

const Header = () => {
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
        <AppBar position="fixed" sx={{ pb: 1, backgroundColor: '#E2F3DD', boxShadow: 0 }}>
            <Container>

                <Toolbar disableGutters>
                    <Box
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <img src="https://i.ibb.co/p1x5173/Screenshot-2021-12-21-011139-removebg-preview.png" alt="" width="80%" />
                    </Box>


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

                            {pages.map((page, i) => (
                                <Link style={{ textDecoration: 'none' }} key={i} to={page?.pageLink}>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center" sx={{ color: "black" }}>{page?.pageTitle}</Typography>
                                    </MenuItem>
                                </Link>
                            ))}


                        </Menu>
                    </Box>
                    <Box

                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <img src="https://i.ibb.co/p1x5173/Screenshot-2021-12-21-011139-removebg-preview.png" alt="" width="80%" />
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Link style={{ textDecoration: 'none' }} key={Math.random()} to={page?.pageLink}>
                                <Button
                                    key={Math.random()}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'black', display: 'block' }}
                                >
                                    {page?.pageTitle}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                    <Box sx={{ mr: 3 }}>
                        <Badge color="secondary" badgeContent={2}>
                            <ShoppingCartIcon sx={{ fontSize: '30px', color: '#1BAB42' }} />
                        </Badge>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>

                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
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
                            {settings.map((setting, i) => (
                                <Link style={{ textDecoration: 'none' }} key={i} to={setting?.pageLink}>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center" sx={{ color: "black" }}>{setting?.pageTitle}</Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
};

export default Header;