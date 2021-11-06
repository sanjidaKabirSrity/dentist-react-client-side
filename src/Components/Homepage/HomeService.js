import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import ServiceOne from '../../images/fluoride.png';
import ServiceTwo from '../../images/cavity.png';
import ServiceThree from '../../images/whitening.png';


const HomeService = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1, py:6}}>
            <Box sx={{textAlign:"center"}}>
                <Typography variant="h5" color='primary' sx={{fontWeight:"700"}}>Our Services</Typography>
                <Typography variant="h3" color='secondary' sx={{fontWeight:"600", my:4}}>Service We Provide</Typography>
            </Box>
            <Grid container spacing={{ xs: 0, sm:3, md: 5 }} columns={{ xs: 4, sm: 6, md: 12 }}>
                <Grid item xs={4} sm={3} md={4}>
                    <Card sx={{boxShadow: 0, py:2}}>
                        <CardMedia
                        component="img"
                        sx={{mx:"auto", width: '25%'}}
                        image={ServiceOne}
                        alt="green iguana"
                        />
                        <CardContent sx={{textAlign:"center"}}>
                            <Typography gutterBottom variant="h5" component="div" color='secondary'>
                                Fluoride Treatment
                            </Typography>
                            <Typography variant="body1" color="#9e9e9e" sx={{ fontSize: 18, py:1 }}>
                                Fluoride treatments are typically professional treatments containing a high concentration of fluoride
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} sm={3} md={4}>
                    <Card sx={{boxShadow: 0, py:2}}>
                        <CardMedia
                        component="img"
                        sx={{mx:"auto", width: '25%'}}
                        image={ServiceTwo}
                        alt="green iguana"
                        />
                        <CardContent sx={{textAlign:"center"}}>
                            <Typography gutterBottom variant="h5" component="div" color='secondary'>
                                Cavity Filling
                            </Typography>
                            <Typography variant="body1" color="#9e9e9e" sx={{ fontSize: 18, py:1 }}>
                                A dental filling treats tooth decay. Having a filling can prevent further damage Cavity
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} sm={3} md={4}>
                    <Card sx={{boxShadow: 0,py:2}}>
                        <CardMedia
                        component="img"
                        sx={{mx:"auto", width: '25%'}}
                        image={ServiceThree}
                        alt="green iguana"
                        />
                        <CardContent sx={{textAlign:"center"}}>
                            <Typography gutterBottom variant="h5" component="div" color='secondary'>
                                Teath Whitening
                            </Typography>
                            <Typography variant="body1" color="#9e9e9e" sx={{ fontSize: 18, py:1 }}>
                                Laser whitening, also known as power whitening, is another type of teeth whitening system
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
        </Container>
    );
};

export default HomeService;