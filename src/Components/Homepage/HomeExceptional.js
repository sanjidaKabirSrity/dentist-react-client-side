import { Button, Card, Container, CardContent, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import exceptionalImg from "../../images/treatment.png"

const HomeExceptional = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1, py:4}}>
            <Grid container spacing={{ xs:0, sm:3, md: 5 }} columns={{ xs: 12, sm:12 , md:12}} sx={{alignItems: 'center'}}>
                <Grid item xs={12} sm={12} md={5}>
                    <img src={exceptionalImg} style={{width: '100%'}} alt="" />
                </Grid>
                <Grid item xs={12} sm={12} md={7}>
                    <Card sx={{boxShadow: 0}}>
                        <CardContent sx={{
                            textAlign:{
                                xs:"center",
                                sm:"center",
                                md:"start"
                            }
                        }}>
                            <Typography gutterBottom variant="h3" component="div" color='secondary' sx={{fontWeight:"600", my:4}}>
                                Exceptional Dental Care, on Your Terms
                            </Typography>
                            <Typography variant="body1" color="#9e9e9e" sx={{ 
                                fontSize: 20, 
                                py:1, 
                                lineHeight:{
                                    xs:"normal",
                                    sm:"normal",
                                    md:2.5,
                                } 
                            }}>
                            Our Friendly Team & Professional Staff Will Put You At Ease From The Moment You Step In. We Accept All Health Funds with Instant On-Site HICAPS Claims” Book Online Today. Modern Dentistry. Preferred Providers. Exceptional Service. Same Day Crowns & Veneers. Exceptional Dental Care, on Your Terms.
                            </Typography>
                            <Button variant="contained" className="btn" sx={{color:"white", my:2, fontSize: 16, fontWeight:600, borderRadius:0, py:1 }}>Learn More</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
        </Container>
    );
};

export default HomeExceptional;