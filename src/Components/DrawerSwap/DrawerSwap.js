import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { NavLink } from "react-router-dom";





const listItemData = [
    { label: "Profile", link: "/", icon: <AccountCircleOutlinedIcon /> },
    { label: "Pending", link: "/pending", icon: <PendingActionsOutlinedIcon /> },
    { label: "Accepted", link: "/accepted", icon: <CheckCircleOutlineOutlinedIcon /> },
    { label: "Deliver", link: "/deliver", icon: <LocalShippingOutlinedIcon /> },
];


function DrawerSwap(props) {

    const { window, open, onClose ,drawerWidth ,handleDrawerClose } = props;

    const drawer = (
        <>
            <Toolbar />
            <Divider />

            <List>

                {
                    listItemData.map((item, index) => (
                        <ListItem button
                            key={index}
                            component={NavLink}
                            to={item.link}
                            onClick={() => handleDrawerClose()}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText>{item.label}</ListItemText>
                        </ListItem>
                    ))
                }

            </List>
        </>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (

        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
        >

            {/* Mobile */}

            <Drawer
                container={container}
                variant="temporary"
                open={open}
                onClose={onClose}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>

            {/*  PC  */}

            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
                {drawer}
            </Drawer>
        </Box>
    );
}

export default DrawerSwap;