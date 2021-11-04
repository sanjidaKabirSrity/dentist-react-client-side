import React from 'react';
import { Container } from '@mui/material';
import HomeService from './HomeService';
import HomeExceptional from './HomeExceptional';

const Home = () => {
    return (
        <Container>
            <h1>This is Home Page</h1>
            <HomeService></HomeService>
            <HomeExceptional></HomeExceptional>
        </Container>
    );
};

export default Home;