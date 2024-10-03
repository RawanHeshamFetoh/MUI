import React from 'react'
import Box from '@mui/material/Box';
import Nav from '../components/Nav/Nav';
import Header from '../components/Header/Header';
import Products from '../components/Products/Products';
import Details from '../components/details/Details';

const Home = () => {
    return (
        <Box>
            <Nav/>
            <Header />
            <Products />
            <Details />
        </Box>
    )
}

export default Home
