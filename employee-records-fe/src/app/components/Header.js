import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles({
    toolbar: {
        textAlign: "center",
        height: 80
    },
    heading: {
        margin: "auto"
    }
});
const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.heading} variant="h4" align="center">Employee Records API Client</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;