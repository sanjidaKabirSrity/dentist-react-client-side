import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Paper, Typography } from '@mui/material';
import AppointmentModal from './AppointmentModal';

const AppointSingleBoxTime = ({time, name, date, space}) => {
    // Modal Click Handle
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Grid item xs={4} sm={3} md={4}>
            <Paper elevation={6} sx={{textAlign:"center", py:3}}>
                <Typography variant='h5' color="primary" sx={{fontWeight:"500"}}>{name}</Typography>
                <Typography variant='body1' color="secondary" sx={{py:1}}>{time}</Typography>
                <Typography variant='caption' color="info.main" sx={{display:"block"}}>{space}</Typography>
                <Button onClick={handleOpen} variant="contained" className="btn" sx={{color:"white", my:2, fontSize: 14, fontWeight:600, borderRadius:0, py:1 }}>Book Appointment</Button>
            </Paper>
            <AppointmentModal time={time} name={name} date={date} open={open} handleClose={handleClose} ></AppointmentModal>
        </Grid>
    )
};

export default AppointSingleBoxTime;