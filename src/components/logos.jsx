import React from 'react';
import {CssBaseline, makeStyles} from '@material-ui/core'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    logo:{
        height: "100px",
        width: "100px"
    }
}))

const LogosBox = (props) => {
    const classes = useStyles();
    const logosNames =[
        "/assets/logos/efi.svg",
        "/assets/logos/essex.svg",
        "/assets/logos/kent.svg",
        "/assets/logos/laborur.svg",
        "/assets/logos/oem.svg",
        "/assets/logos/urosario.svg",
        "/assets/logos/warwick.svg"]
    const logos = []
    for(let i = 0; i < logosNames.length; i++){
        logos.push(
        <Grid item xs={3} sm ={3}><img className = {classes.logo} src = {logosNames[i]}></img></Grid>)
    }
    console.log(logos)
    return(
    <Grid container spacing={4}>
        {logos}
    </Grid>
        // <img className = {classes.logo} src="/assets/logos/efi.svg"></img>
      );
  }
  
  export default LogosBox;