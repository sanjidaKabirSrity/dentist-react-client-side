import { Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import exceptionalImg from "../../images/treatment.png"

const HomeExceptional = () => {
    return (
        <Box sx={{ flexGrow: 1}}>
            <Grid container spacing={{}} columns={{ xs: 12, sm:12 , md:12}}>
                <Grid item xs={12} sm={12} md={5}>
                    <img src={exceptionalImg} style={{width: '100%'}} alt="" />
                </Grid>
                <Grid item xs={12} sm={12} md={7}>
                    <Card sx={{boxShadow: 0}}>
                        <CardActionArea sx={{py:2}}>
                            <CardContent sx={{textAlign:"center"}}>
                                <Typography gutterBottom variant="h5" component="div" color='secondary'>
                                    Cavity Filling
                                </Typography>
                                <Typography variant="body1" color="#9e9e9e" sx={{ fontSize: 18, py:1 }}>
                                    A dental filling treats tooth decay. Having a filling can prevent further damage Cavity
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default HomeExceptional;