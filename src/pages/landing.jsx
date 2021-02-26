import React from 'react';
import {CssBaseline, makeStyles} from '@material-ui/core'
import Header from "../components/header";
import ContBlocks from "../components/contentBlocks";

const useStyles = makeStyles((theme) => ({
    root:{
      minHeight: "100vh",
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/ciudadPagina.png'})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }
  }))

const Landing = () => {
    const classes = useStyles();
    return(
        <div>
        <div className = {classes.root}>
          <CssBaseline></CssBaseline>
          <Header/>
        </div>
          <ContBlocks/>
        </div>
    );
}

export default Landing;