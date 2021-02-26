import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {CssBaseline, makeStyles} from '@material-ui/core'

// require('react-img-carousel/lib/carousel.css');

const useStyles = makeStyles((theme) => ({
    images:{
        heigth: "35vh",
    },
    tittleText:{
      padding: "20px",
      textAlign: "right",
      fontSizeAdjust: "0.1",
      fontFamily: 'Saira Stencil One',
      fontSize: "130%",
    }
  }))


  const DemoCarousel = (props) => {
    const classes = useStyles();
    const imagesCar = []
    for(let i = 1; i <= 14; i++ ){
        imagesCar.push(<div>
            <img width="20%" height="20%" className = {classes.images} src={"assets/dataclips/" + i +".jpeg"} />
            <p className="legend">Legend 1</p>
        </div>)
    }
    
    return(
            <Carousel viewportWidth="100px" cellPadding={ 5 }>
                {imagesCar}
            </Carousel>
    );
};

export default DemoCarousel;