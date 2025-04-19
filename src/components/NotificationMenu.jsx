import {
    IconButton,
    Badge,
    Menu,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Typography,
    Box,
    Button
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from 'react';

const NotificationMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            type: 'error',
            message: 'System update failed',
            timestamp: '2 hours ago',
            read: false
        },
        {
            id: 2,
            type: 'warning',
            message: 'Storage at 85% capacity',
            timestamp: '5 hours ago',
            read: true
        },
        {
            id: 3,
            type: 'info',
            message: 'New message from John',
            timestamp: '1 day ago',
            read: false
        }
    ]);

    const unreadCount = notifications.filter(n => !n.read).length;

    const handleOpen = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const markAllAsRead = () => {
        setNotifications(notifications.map(n => ({ ...n, read: true })));
        handleClose();
    };

    const getIcon = (type) => {
        switch(type) {
            case 'error': return <ErrorIcon color="error" />;
            case 'warning': return <WarningIcon color="warning" />;
            case 'info': return <InfoIcon color="info" />;
            default: return <InfoIcon />;
        }
    };

    return (
        <>
            <IconButton
                color="inherit"
                onClick={handleOpen}
                aria-label="Notifications"
                sx={{ position: 'relative' }}
            >
                <Badge
                    badgeContent={unreadCount}
                    color="error"
                    overlap="circular"
                    sx={{
                        '& .MuiBadge-badge': {
                            right: 5,
                            top: 5,
                            border: '2px solid white'
                        }
                    }}
                >
                    <NotificationsIcon fontSize="medium" />
                </Badge>
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{
                    sx: {
                        width: 350,
                        maxHeight: 400,
                        mt: 1.5,
                        boxShadow: 3
                    }
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <Box sx={{ p: 2 }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 1
                    }}>
                        <Typography variant="h6">Notifications</Typography>
                        <Button
                            size="small"
                            onClick={markAllAsRead}
                            disabled={unreadCount === 0}
                        >
                            Mark all as read
                        </Button>
                    </Box>

                    <Divider />

                    <List dense sx={{ overflow: 'auto' }}>
                        {notifications.map((notification) => (
                            <ListItem
                                key={notification.id}
                                sx={{
                                    bgcolor: notification.read ? 'inherit' : 'action.hover',
                                    borderRadius: 1,
                                    mb: 0.5
                                }}
                            >
                                <ListItemIcon sx={{ minWidth: 40 }}>
                                    {getIcon(notification.type)}
                                </ListItemIcon>

                                <ListItemText
                                    primary={notification.message}
                                    secondary={notification.timestamp}
                                    primaryTypographyProps={{
                                        fontWeight: notification.read ? 'normal' : 'bold'
                                    }}
                                />

                                {!notification.read && (
                                    <Box
                                        sx={{
                                            width: 8,
                                            height: 8,
                                            borderRadius: '50%',
                                            bgcolor: 'primary.main',
                                            ml: 1
                                        }}
                                    />
                                )}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Menu>
        </>
    );
};

export default NotificationMenu;