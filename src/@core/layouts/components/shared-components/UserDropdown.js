// src/@core/layouts/components/shared-components/UserDropdown.js

import React, { useState, Fragment } from 'react'
import { useRouter } from 'next/router'

// MUI
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'

// Icon + Auth
import Icon from 'src/@core/components/icon'
import { useAuth } from 'src/hooks/useAuth'

// Styled spans / items
const BadgeContentSpan = styled('span')(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.success.main,
  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
}))

const MenuItemStyled = styled(MenuItem)(({ theme }) => ({
  '&:hover .MuiBox-root, &:hover .MuiBox-root svg': {
    color: theme.palette.primary.main
  }
}))

const UserDropdown = props => {
  const { settings } = props

  const [anchorEl, setAnchorEl] = useState(null)
  const router = useRouter()
  const { logout, user } = useAuth() // useAuth'tan user ve logout bekliyoruz

  const { direction } = settings || {}

  const handleDropdownOpen = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleDropdownClose = url => {
    if (url) router.push(url)
    setAnchorEl(null)
  }

  const handleLogout = () => {
    if (typeof logout === 'function') logout()
    handleDropdownClose()
  }

  const getInitials = (fullName = '') => {
    const name = String(fullName).trim()
    if (!name) return '?'
    const parts = name.split(/\s+/)
    if (parts.length === 1) return parts[0][0].toUpperCase()

    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
  }

  const userName = user?.fullName || user?.name || user?.username || user?.email || 'Unknown User'
  const userRole = user?.role || 'User'
  const avatarSrc = user?.avatar || user?.photoURL || null

  const styles = {
    px: 4,
    py: 1.75,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    color: 'text.primary',
    textDecoration: 'none',
    '& svg': {
      mr: 2.5,
      fontSize: '1.5rem',
      color: 'text.secondary'
    }
  }

  return (
    <Fragment>
      <Badge
        overlap='circular'
        onClick={handleDropdownOpen}
        sx={{ ml: 2, cursor: 'pointer' }}
        badgeContent={<BadgeContentSpan />}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
      >
        {avatarSrc ? (
          <Avatar alt={userName} src={avatarSrc} sx={{ width: 38, height: 38 }} />
        ) : (
          <Avatar sx={{ width: 38, height: 38 }}>{getInitials(userName)}</Avatar>
        )}
      </Badge>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleDropdownClose()}
        sx={{ '& .MuiMenu-paper': { width: 230, mt: 4.75 } }}
        anchorOrigin={{ vertical: 'bottom', horizontal: direction === 'ltr' ? 'right' : 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: direction === 'ltr' ? 'right' : 'left' }}
      >
        <Box sx={{ py: 1.75, px: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Badge
              overlap='circular'
              badgeContent={<BadgeContentSpan />}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
            >
              {avatarSrc ? (
                <Avatar alt={userName} src={avatarSrc} sx={{ width: '2.5rem', height: '2.5rem' }} />
              ) : (
                <Avatar sx={{ width: '2.5rem', height: '2.5rem' }}>{getInitials(userName)}</Avatar>
              )}
            </Badge>
            <Box sx={{ display: 'flex', ml: 2.5, alignItems: 'flex-start', flexDirection: 'column' }}>
              <Typography sx={{ fontWeight: 500 }}>{userName}</Typography>
              <Typography variant='body2'>{userRole}</Typography>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: theme => `${theme.spacing(2)} !important` }} />

        <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/user-profile/profile')}>
          <Box sx={styles}>
            <Icon icon='tabler:user-check' />
            My Profile
          </Box>
        </MenuItemStyled>

        <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/account-settings/account')}>
          <Box sx={styles}>
            <Icon icon='tabler:settings' />
            Settings
          </Box>
        </MenuItemStyled>

        <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/account-settings/billing')}>
          <Box sx={styles}>
            <Icon icon='tabler:credit-card' />
            Billing
          </Box>
        </MenuItemStyled>

        <Divider sx={{ my: theme => `${theme.spacing(2)} !important` }} />

        <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/help-center')}>
          <Box sx={styles}>
            <Icon icon='tabler:lifebuoy' />
            Help
          </Box>
        </MenuItemStyled>

        <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/faq')}>
          <Box sx={styles}>
            <Icon icon='tabler:info-circle' />
            FAQ
          </Box>
        </MenuItemStyled>

        <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose('/pages/pricing')}>
          <Box sx={styles}>
            <Icon icon='tabler:currency-dollar' />
            Pricing
          </Box>
        </MenuItemStyled>

        <Divider sx={{ my: theme => `${theme.spacing(2)} !important` }} />

        <MenuItemStyled sx={{ p: 0 }} onClick={handleLogout}>
          <Box sx={styles}>
            <Icon icon='tabler:logout' />
            Sign Out
          </Box>
        </MenuItemStyled>
      </Menu>
    </Fragment>
  )
}

export default UserDropdown
