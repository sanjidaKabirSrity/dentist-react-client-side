import React from 'react';
import HomeService from './HomeService';
import HomeExceptional from './HomeExceptional';
import { Box } from '@mui/system';
import HomeApointment from './HomeApointment';
import Header from './../../Shared/Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Box>
                <h1>This is Home Page</h1>
                <HomeService></HomeService>
                <HomeExceptional></HomeExceptional>
                <HomeApointment></HomeApointment>
            </Box>
        </div>
    );
};

export default Home;