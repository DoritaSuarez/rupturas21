import react from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Divider, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import {Img} from 'react-image'
import React, { useState } from 'react';
import { render } from 'react-dom';

const useStyles = makeStyles((theme)=> ({
    gridItem: {
        position: 'relative',
        margin: "0px",
        padding: "0px",
        textAlign: "center",
        height:"40vh",
        backgroundSize: "cover",
    },
    imageCont:{
        margin: "0px",
        padding: "0px",
        width: "100%",
        height:"40vh",
        color: "white",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        '&:hover': {
            background: "rgba(0, 0, 0, 0.6)",
          }
    },
    titleBox:{
        textDecoration: "none",
        color: "white",
        fontSize: "12px",
    },
    p:{
        textDecoration: "none",
        color: "white",
        fontSize: "12px",
    },
    a:{
        '&:link': {
            textDecoration: "none",
        }          
    },
    subtitle:{
        position: 'absolute',
        backgroundColor: 'rgb(0, 0, 0, 0.5)',
        width: "100%",
        height: "30%",
        color: 'white',
        bottom: "0%",
        // fontFamily: 'Saira Stencil One',
    },
    textBox:{
        opacity: "0",
        padding: "5% 40% 30% 5%",
        // border: "solid #8AC007",
        position: 'absolute',
        width: "100%",
        height: "70%",
        textAlign: "left",
        textDecoration: "none",
        '&:hover': {
            opacity: "1",
          }
    },
    textInsideBox:{
        color: "#fff",
        fontSize: "10px",
        // fontFamily: "",
    }
}));

export default function Block(props){
    const classes = useStyles();
    const divStyle = (src) => ({
        backgroundImage: `url(${process.env.PUBLIC_URL + src})`
      })
    return(
        <div>
            <a href = "https://drive.google.com/file/d/1hkL7-gIYjEP-ItAKtnVXbK-WH9UJpaC8/view?usp=sharing">
            <div className = {classes.gridItem} style={divStyle(props.src)}>
                <div className = {classes.imageCont}>
                    <div
                    className = {classes.textBox}>
                        <p className = {classes.textInsideBox}> {props.description} </p>
                    </div>
                </div>
                <div className = {classes.subtitle}>
                    <p className = {useStyles.titleBox}>{props.title}</p>
                </div>
            </div>
            </a>
        </div>
    );
};