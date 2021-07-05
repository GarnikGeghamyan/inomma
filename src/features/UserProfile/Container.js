import React, { useEffect, useState } from 'react';
import {useHistory, useParams} from "react-router";

import firebase from 'firebase';
import {
    TextField,
    Button,
    CircularProgress
} from '@material-ui/core';
import { isLoaded, useFirebaseConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import {makeStyles} from "@material-ui/core/styles";
import { USERS_LIST_ROUTE } from "../../constants";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
}));

const Container = () => {
    const { userId } = useParams();
    if(userId !== 'create') {
        useFirebaseConnect([`users/${userId}`]);
    } else {
        useFirebaseConnect(['users']);
    }

    const classes = useStyles();
    const history = useHistory();
    const users = useSelector((state) => state.firebase.data.users);

    const [formData, setFormData] = useState({
        firstName: (users && users[userId]) ? users[userId].firstName : '',
        lastName: (users && users[userId]) ? users[userId].lastName : ''
    }, [userId]);

    useEffect(() => {
        setFormData({
            firstName: (users && users[userId]) ? users[userId].firstName : '',
            lastName: (users && users[userId]) ? users[userId].lastName : ''
        })
    }, [userId]);

    if (!isLoaded(users)) {
        return <CircularProgress />;
    }

    const handleResponse = (error) => {
        if(!error) {
            history.push(USERS_LIST_ROUTE);
        }
    }

    const handleSave = () => {
        if(userId && userId !== 'create') {
            firebase.set(`users/${userId}`, formData, handleResponse);
            return;
        }
        firebase.push('users', formData, handleResponse)
    }

    const handleChange = (property) => (event) => {
        setFormData((prevData) => ({
            ...prevData,
            [property]: event.target.value
        }))
    }

    return (
        <div className={classes.root}>
            <form noValidate autoComplete="off">
                <TextField
                    id="filled-secondary"
                    onChange={handleChange('firstName')}
                    value={formData?.firstName}
                    label="First Name"
                    variant="filled"
                    color="secondary"
                />
                <TextField
                    id="outlined-secondary"
                    onChange={handleChange('lastName')}
                    value={formData?.lastName}
                    label="Last Name"
                    variant="filled"
                    color="secondary"
                />
                <Button color="primary" onClick={handleSave}>
                    Save
                </Button>
            </form>
        </div>
    )
}

export default Container;
