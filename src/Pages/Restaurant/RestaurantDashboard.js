import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import ResponsiveAppBar from '../../Components/AppBar/ResponsiveAppBar';
import DrawerSwap from '../../Components/DrawerSwap/DrawerSwap';
import Box from '@mui/material/Box';
import Pending from "../Pending/Pending";
import Accepted from '../Accepted/Accepted';
import Deliver from "../Deliver/Deliver"
import Profile from '../Profile/Profile';


const drawerWidth = 240;


const RestaurantDashboard = () => {

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleDrawerClose = () => {
        setMobileOpen(false);
      };


    return (

        <Box sx={{ display: 'flex' }} >
            <ResponsiveAppBar handleDrawer={handleDrawerToggle} />
            <DrawerSwap
                open={mobileOpen}
                onClose={handleDrawerToggle}
                drawerWidth={drawerWidth}
                handleDrawerClose = {handleDrawerClose}
            />

            <Box
                // className={classes.root}
                component="main"
                sx={{ flexGrow: 1, p: 3, mr: 2, mt: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >

                <Routes>
                    <Route exact path="/"        element={<Profile />}  />
                    <Route path="pending"  element={<Pending />}  />
                    <Route path="accepted" element={<Accepted />} />
                    <Route path="deliver"  element={<Deliver />}  />
                </Routes>

            </Box>
        </Box>
    );
};

export default RestaurantDashboard;