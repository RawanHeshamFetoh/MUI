import { Box, Typography } from '@mui/material';
import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const Products = () => {
    const products = [
        { img: require('../../assets/pr1.png'), category: "ready to ship upholstery" },
        { img: require('../../assets/pr2.png'), category: "dining" },
        { img: require('../../assets/pr3.png'), category: "storage beds" },
        { img: require('../../assets/pr4.png'), category: "lighting" },
        { img: require('../../assets/pr5.png'), category: "accent tables" },
        { img: require('../../assets/pr6.png'), category: "rugs" },
        { img: require('../../assets/pr7.png'), category: "bar & counter stools" },
        { img: require('../../assets/pr8.png'), category: "accent stools" },
        { img: require('../../assets/pr9.png'), category: "accessories" },
        { img: require('../../assets/pr10.png'), category: "accent chairs" },
        { img: require('../../assets/pr11.png'), category: "outdoors" },
        { img: require('../../assets/pr12.png'), category: "media & storage" },
    ];

    return (
        <Box sx={{ padding: "20px 40px" , borderTop: "5px solid black" ,borderBottom: "5px solid black" }}>
            <Typography variant='h4' gutterBottom sx={{textTransform:"uppercase" , marginBottom:"40px"}}>
                Shop by Category
            </Typography>
            <ImageList sx={{ width: "100%", height: "150vh" }} cols={4} gap={20} rowHeight={300}>
                {products.map((item, index) => (
                    <ImageListItem key={index} sx={{display:"flex" , flexDirection:"column" , alignItems:'center' , justifyContent:"center",bgcolor:"#FAFAFA"}}>
                        <img
                            src={item.img}
                            srcSet={item.img}
                            alt={item.category}
                            loading="lazy"
                            style={{width:"60%" , height:"auto" , objectFit:"contain"}}
                        />
                        <ImageListItemBar
                            title={item.category}
                            sx={{ textAlign: "center" ,marginBottom:"5px" , textTransform:"capitalize"}}
                            position="below"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
};

export default Products;
