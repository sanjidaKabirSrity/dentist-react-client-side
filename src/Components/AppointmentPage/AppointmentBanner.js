import React from 'react';
import { Button, Card, Container, CardContent, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import appointmentBannerBg from '../../images/bg.png';
import appointment from '../../images/chair.png';
import Calender from './../../Shared/Calender/Calender';

const appointmentBGanner = {
    background:`url(${appointmentBannerBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

const AppointmentBanner = ({date, setDate}) => {
    return (
        <Box sx={{ flexGrow: 1, py:6}} style={appointmentBGanner}>
        <Container>
            <Grid container spacing={{ xs:0, sm:3, md: 5 }} columns={{ xs: 12, sm:12 , md:12}} sx={{alignItems: 'center'}}>
                <Grid item xs={12} sm={12} md={6}>
                    <Typography 
                    variant="h2" 
                    color='secondary' 
                    sx={{
                        textAlign:{xs:"center", sm:"center", md:"start"}, 
                        fontWeight:"500",
                        mb:4
                        }
                    }>AppointMent</Typography>
                    <Calender date={date} setDate={setDate}></Calender>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <img src={appointment} style={{width: '100%'}} alt="" />
                </Grid>
            </Grid>
        </Container>
    </Box>
    );
};

export default AppointmentBanner;