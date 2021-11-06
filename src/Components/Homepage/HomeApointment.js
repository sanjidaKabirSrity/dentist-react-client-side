import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ApoinmentDoctor from '../../images/doctor.png';
import ApoinmentDoctorBG from '../../images/appointment-bg.png';
import { useHistory } from "react-router-dom";

const appointmentBG = {
    background:`url(${ApoinmentDoctorBG})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor:'rgb(24 28 38 / 82%)',
    backgroundBlendMode:'darken, luminosity'
}

const HomeApointment = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push("/appointment");
    }
    return (
    <Box sx={{ flexGrow: 1, mt:16, mb:10}} style={appointmentBG}>
        <Container>
            <Grid container spacing={{ xs:0, sm:3, md: 5 }} columns={{ xs: 12, sm:12 , md:12}} sx={{alignItems: 'center'}}>
                <Grid item xs={12} sm={12} md={6}>
                    <img src={ApoinmentDoctor} style={{width: '100%', marginTop:"-140px"}} alt="" />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Box sx={{
                        textAlign:{
                            xs:"center",
                            sm:"center",
                            md:"start",
                            },
                        mb:4
                    }}>
                        <Typography variant="h5" color='primary' sx={{fontWeight:"500"}}>APPOINTMENT</Typography>
                        <Typography gutterBottom variant="h3" component="div" color='secondary' sx={{fontWeight:"600", color:"white", my:3}}>
                            Make an appointment Today
                        </Typography>
                        <Typography variant="body1" color="#9e9e9e" sx={{ fontSize: 18 }}>
                            One of the mainstays of life is making and keeping appointments. Many people consider “an appointment” to mean a doctor's visit or a job interview
                        </Typography>
                        <Button variant="contained" onClick={handleClick} className="btn" sx={{color:"white", my:2, fontSize: 16, fontWeight:600, borderRadius:0, py:1 }}>Appointment</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
    );
};

export default HomeApointment;