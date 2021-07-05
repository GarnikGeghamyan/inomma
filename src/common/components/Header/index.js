import React  from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
}));

const Header = () => {
    const history = useHistory();
    const classes = useStyles();

    const handleNavigate = (url) => () => {
        history.push(url);
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    onClick={handleNavigate('/users/create')}
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                >
                    <AddCircle />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Add User
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
