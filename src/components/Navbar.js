import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import { Search } from '@mui/icons-material'
import { Stack } from '@mui/material'
import logo from '../../src/assets/images/movie-hub-logo.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/auth/authSlice'
import { NavLink } from 'react-router-dom'

const pages = [
  { name: 'Home', route: '/' },
  { name: 'Movies & TV-Shows', route: '/movies' },
  { name: 'Contact Us', route: '/contact' },
]
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const navigate = useNavigate()

  // redux state
  const { userInfo } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  // console.log('I found one userInfo', userInfo)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handlePageChange = (page) => {
    setAnchorElUser(null)
    // console.log(page)
    navigate(`${page}`)
  }

  const handleSettingChange = (setting) => {
    if (setting === 'Logout') {
      dispatch(logout())
      navigate('/login')
    }
  }

  return (
    <AppBar
      position='sticky'
      sx={{ bgcolor: '#02020f', borderBottom: '1px solid gray' }}
      className='navbar-container'
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <IconButton sx={{ mr: '1.5rem' }}>
            <img src={logo} alt='logo' width='32px' height='32px' />
          </IconButton>
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
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
            MovieHub
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
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
                <MenuItem
                  key={page.name}
                  onClick={() => handlePageChange(page.route)}
                >
                  <Typography textAlign='center'>{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant='h5'
            noWrap
            component='a'
            href=''
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
            MovieHub
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              // bgcolor: 'orange',
              justifyContent: 'center',
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => handlePageChange(page.route)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Stack
              sx={{
                // display: 'flex',
                // justifyContent: 'center',
                // alignItems: 'center',
                mr: '1rem',
              }}
              spacing={2}
              direction='row'
            >
              <Search />
            </Stack>
            <Tooltip title='Open settings'>
              {
                // <IconButton
                userInfo.user ? (
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt={userInfo.user.first_name}
                      src={userInfo.user.first_name[0]}
                    />
                  </IconButton>
                ) : (
                  <NavLink to='/login'>Log in</NavLink>
                )
              }
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
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
                  <Typography
                    textAlign='center'
                    onClick={() => handleSettingChange(setting)}
                  >
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Navbar
