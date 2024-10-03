import { Box } from '@mui/material'
import React from 'react'
import Card from '../card/card'

function Details() {
    const Details = [
        { img: require('../../assets/im1.webp'), direction: "row", title: "AS LOW AS 0% APR FINANCING UPON APPROVAL WITH AFFIRM", details: "Affirm provides flexible payment solutions, allowing you to buy better and pay over time.", btn: "learn more" },
        { img: require('../../assets/im2.webp'), direction: "row-reverse", title: "CHOOSE WITH CONFIDENCE", details: "Remove the guesswork in choosing your upholstery design by ordering complimentary swatches..", btn: "order swatches" },
        { img: require('../../assets/im3.jpeg'), direction: "row", title: "Complimentary Design Services", details: "Let's create your dream space together", btn: "book a consultation" },
    ]
    return (
        <Box sx={{ padding: "20px 40px" }}>
            {
                Details.map((detail, index) => (
                    <Card img={detail.img} key={index} btn={detail.btn} title={detail.title} details={detail.details} direction={detail.direction} />
                ))
            }
        </Box>
    )
}

export default Details
