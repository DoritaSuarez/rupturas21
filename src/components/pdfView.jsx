import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {CssBaseline, makeStyles} from '@material-ui/core'

// require('react-img-carousel/lib/carousel.css');

const useStyles = makeStyles((theme) => ({
    images:{
        padding: "20px"
    },
    tittleText:{
      padding: "20px",
      textAlign: "right",
      fontSizeAdjust: "0.1",
      fontFamily: 'Saira Stencil One',
      fontSize: "130%",
    }
  }))

  const PdfView = (props) => {
    const classes = useStyles();
    return(
        <div>
            <img className = {classes.images} src={"assets/informality/"+ props.imscr} width = "100%" height = "100%"/>
            {/* <p className="legend">Legend 1</p> */}
        </div>
    );
};

export default PdfView;