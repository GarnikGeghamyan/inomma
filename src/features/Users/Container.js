import React, {useEffect} from 'react';
import { useHistory } from "react-router";

import firebase from 'firebase';
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    CircularProgress,
    Typography
} from '@material-ui/core';
import { isEmpty, isLoaded, useFirebaseConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import TableItem from './components/TableItem';

const Container = () => {
    useFirebaseConnect(['users']);
    const history = useHistory();

    function handleRemove(id) {
        firebase.remove(`users/${id}`);
    }

    const users = useSelector((state) => state.firebase.data.users);

    const handleEdit = (key) => {
        history.push(`/users/${key}`)
    }

    if (!isLoaded(users)) {
        return <CircularProgress />;
    }

    if (isEmpty(users)) {
        return (
            <Typography variant="h5">
                Users list empty
            </Typography>
        );
    }

    return (
        <Table border="1">
            <TableHead>
                <TableRow>
                    <TableCell className="tableSectionTitle">First Name</TableCell>
                    <TableCell className="tableSectionTitle">Last Name</TableCell>
                    <TableCell className="tableSectionTitle">Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {Object.keys(users).map((key) => (
                    <TableItem
                        key={key}
                        onRemove={() => handleRemove(key)}
                        onEdit={() => handleEdit(key)}
                        data={users[key]}
                    />
                ))}
            </TableBody>
        </Table>
    )
}

export default Container;
