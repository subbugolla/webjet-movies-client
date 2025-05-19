import React from 'react'
import { Dialog, DialogTitle, DialogContent, Typography, Button } from '@mui/material';

const Popup = ({ movie: { id, title, year, poster, type, price, openPopup, setOpenPopup }}) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
        <Dialog open={openPopup} maxWidth="md">
            <DialogTitle>
                <div>
                    <Typography variant='h6' component="div">
                    {title}
                    </Typography>
                    title</div>
            </DialogTitle>
            <DialogContent dividers>
                <div>Content</div>
            </DialogContent>
        </Dialog>
        
    )
}
export default Popup