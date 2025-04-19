import React, { useState } from 'react';
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

const UserProfile = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleProfileClick = () => {
        handleClose();
        navigate("/my-profile");
    };

    const handleSettingsClick = () => {
        handleClose();
        navigate("/settings");
    };

    const handleLogout = () => {
        handleClose();
        // Add your logout logic here
        navigate("/login"); // Example logout navigation
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
                        Moni Roy
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        Enterprise
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