import React, { useState } from 'react';
import firebase from 'firebase';

import {
    Delete,
    Edit
} from '@material-ui/icons';
import {
    TextField,
    TableCell,
    TableRow,
    IconButton,
    Tooltip
} from '@material-ui/core';

const TableItem = ({ onRemove, onEdit, data }) => {

    return (
        <TableRow>
            <TableCell>
                {data.firstName}
            </TableCell>
            <TableCell>
                {data.lastName}
            </TableCell>
            <TableCell>
                <div className="actionButtons">
                    <Tooltip title="edit">
                        <IconButton
                            aria-label="edit"
                            onClick={onEdit}
                            color="primary"
                        >
                            <Edit />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="delete">
                        <IconButton aria-label="delete" onClick={onRemove} color="secondary">
                            <Delete />
                        </IconButton>
                    </Tooltip>
                </div>
            </TableCell>
        </TableRow>
    );
};

export default TableItem;
