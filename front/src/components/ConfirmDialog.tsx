// components/ConfirmDialog.js
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

interface ConfirmDialogProps {
    open: boolean;
    title: string;
    message: string;
    onClose: () => void;
    onConfirm: () => void;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({ open, title, message, onClose, onConfirm }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {message}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={() => {
                        onConfirm();
                        onClose(); // Close dialog after confirming
                    }}
                    color="success"
                    variant="contained"
                    autoFocus
                >
                    تایید
                </Button>
                <Button onClick={onClose} color="error" variant="contained">
                    انصراف
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDialog;
