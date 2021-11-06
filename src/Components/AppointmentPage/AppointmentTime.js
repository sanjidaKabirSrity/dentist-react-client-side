import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import AppointSingleBoxTime from './AppointSingleBoxTime';

const AppointmentTime = ({date, setDate}) => {
    // Fake Data
    const [appointment , setAppointment] = useState([]);
    useEffect(() => {
        fetch('./appointTimeData.json').then(res => res.json()).then(data => setAppointment(data))
    } , [])

    return (
        <Container>
            <Box sx={{py:10}}>
                <Typography variant='h4' color="primary" sx={{textAlign:"center", fontWeight:"600", pb:6}}>Available Appointments on {date.toDateString()}</Typography>
                <Grid container spacing={{ xs: 0, sm:3, md: 5 }} columns={{ xs: 4, sm: 6, md: 12 }}>
                    {
                        appointment.map(appoint =><AppointSingleBoxTime key={appoint.id} time={appoint.time} name={appoint.name} date={date.toDateString()} space={appoint.space}></AppointSingleBoxTime>)
                    }
                </Grid>
            </Box>
            
        </Container>
    );
};

export default AppointmentTime;