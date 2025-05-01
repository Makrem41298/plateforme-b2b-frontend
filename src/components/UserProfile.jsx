import React, {useContext, useEffect, useState} from 'react';
import {
    Avatar,
    Box,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    ButtonBase,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from "react-router-dom";
import {AuthEnterpriseContext} from "../services/AuthEnterpriseContext.jsx";
import {AuthClientContext} from "../services/AuthClientContext.jsx";
import {routes} from "../Routes/routesName.js";

const UserProfile = ({authType}) => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const {logoutEnterprise,userEnterprise}=useContext(AuthEnterpriseContext)
    const {logoutClient,userClient}=useContext(AuthClientContext)
     const [userName, setUserName] = useState('');
    const open = Boolean(anchorEl);
useEffect(() => {

    if (authType === 'Enterprise') {

        setUserName(userEnterprise?.name)
    } else if (authType === 'Client') {

        setUserName(userClient?.name)
    }

},[userEnterprise,userClient])
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleProfileClick = () => {
        handleClose();
        if (authType === 'Enterprise') {
            navigate(routes.entreprise.profile);

        } else if (authType === 'Client') {
            navigate(routes.client.profile);

        }    };

    const handleSettingsClick = () => {
        handleClose();
        if (authType === 'Enterprise') {
            navigate(routes.entreprise.settings);

        } else if (authType === 'Client') {
            navigate(routes.client.settings);

        }
    };

    const handleLogout = () => {
        handleClose();

        if (authType === 'Enterprise') {
            logoutEnterprise().then(() => navigate(routes.loginEnterprise.path));
        } else if (authType === 'Client') {
            logoutClient().then(() => navigate(routes.loginClient.path, { replace: true }));
        }
    };

    return (
        <Box sx={{ position: 'relative' }}>
            <ButtonBase
                component="div"
                onClick={handleClick}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    transition: 'background-color 0.2s',
                    '&:hover': {
                        backgroundColor: 'action.hover',
                    },
                    width: '100%',
                }}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                <Avatar
                    src="https://i.pravatar.cc/100"
                    alt="User avatar"
                    sx={{
                        width: 40,
                        height: 40,
                        border: '2px solid',
                        borderColor: 'divider',
                    }}
                />
                <Box sx={{ textAlign: 'left', flexGrow: 1 }}>
                    <Typography variant="subtitle2" component="div" fontWeight={600}>
                        {userName}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        {authType}
                    </Typography>
                </Box>
                <IconButton
                    size="small"
                    sx={{
                        color: 'text.secondary',
                        '&:hover': {
                            backgroundColor: 'transparent',
                        }
                    }}
                    aria-label="Show profile options"
                >
                    <ExpandMoreIcon fontSize="small" />
                </IconButton>
            </ButtonBase>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                disableScrollLock={true}
                PaperProps={{
                    sx: {
                        mt: 1,
                        minWidth: 200,
                        boxShadow: 2,
                    }
                }}
            >
                <MenuItem onClick={handleProfileClick} divider>Profile</MenuItem>
                <MenuItem onClick={handleSettingsClick} divider>Settings</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </Box>
    );
};

export default UserProfile;