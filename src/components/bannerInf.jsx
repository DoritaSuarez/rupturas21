import React from 'react';
import {CssBaseline, makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    content:{
      position: "relative",
      minHeight: "40vh",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    tittleCont:{
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      height: "30vh",
      color: "#F7ED4F",
      position: "absolute",
      verticalAlign: "text-bottom",
      top: "10%",
      width: "35%",
      left: "65%",
      verticalAlign: "text-top",
      boxShadow: "0px 0px 15px 0px rgba(50, 50, 50, 0.75)",
      // backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/ciudadPagina.png'})`,
    },
    tittleText:{
      // Para revisar: Autoajustar
      // position: "absolute",
      // top:"0%",
      // right: "15%",
      // left: "15%",
      // bottom: "5%",
      padding: "20px",
      textAlign: "right",
      fontSizeAdjust: "0.1",
      fontFamily: 'Saira Stencil One',
      fontSize: "130%",
    }
  }))

const InformalityBanners = (props) => {
  const classes = useStyles();
  const divStyle = (src) => ({
      backgroundImage: `url(${process.env.PUBLIC_URL + src})`
    })
    return(
        <div className = {classes.content} style={divStyle(props.background)}>
          <div className = {classes.tittleCont}>
              <p className = {classes.tittleText}>{props.tittle}</p>
            </div>
        </div>
    );
}

export default InformalityBanners;