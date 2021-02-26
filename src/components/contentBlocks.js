import react from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Divider, IconButton, requirePropFactory, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import Block from "./blocks";


const useStyles = makeStyles((theme)=> ({
    root:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center", 
        height: "100vh"
    },
    gridContainer: {
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/backgroundGeneral.jpg'})`,
        padding: "0px",
        backgroundSize: "cover",
        boxShadow: "7px 4px 9px 0px rgba(50, 50, 50, 0.84)",
      }
}));

export default function ContBlocks(){
    const classes = useStyles();
    const srcImages = [
        "/assets/b1.png",
        "/assets/backgroundBlocks/b2.png",
        "/assets/backgroundBlocks/b3.png",
        "/assets/backgroundBlocks/b4.png",
        "/assets/backgroundBlocks/b5.png",
        "/assets/backgroundBlocks/b5.png",
        "/assets/backgroundBlocks/b5.png",
        "/assets/backgroundBlocks/b5.png",]
    const titles = [
        "¿Quiénes somos?",
        "Informalidad en tiempos de covid-19",
        "Documental - Informalidad en los tiempos de COVID-19",
        "Informes – Informalidad en los tiempos de COVID-19",
        "Historias de vida – Informalidad en los tiempos de COVID-19",
        "Bases de datos agregada – Informalidad en los tiempos de COVID-19.",
        "",
        "Conozca nuestros hallazgos cuantitativos de forma gráfica.",
    ]
    const descriptions = [
        "Conoce sobre nosotros y nuestro equipo",
        "En este proyecto estudiamos el impacto de la pandemia de COVID-19 en los trabajadores informales, utilizando a Colombia como nuestro principal estudio de caso.",
        "Documental - Informalidad en los tiempos de COVID-19",
        "En esta sección podrá conocer nuestros reportes, en el que presentamos nuevas políticas económicas, sociales y legales a considerar.",
        "Conozca nuestras historias de vida, en las que retratamos cómo las dinámicas económicas, sociales y legales afectan la vida de personas.",
        "Haga click para acceder a la primera base de datos completa de datos agregados sobre informalidad en Colombia.",
        "Conozca la historia de Ana Rosario Guzmán.",
        "Dataclips",
    ]
    const blocks = []
    for(let i = 0; i < srcImages.length; i++){
        blocks.push(<Block src = {srcImages[i]} title = {titles[i]} description = {descriptions[i]}/>)
    }
    console.log(blocks)
    return(
        <div className = {classes.gridContainer}>
            {blocks}
        </div>
    );
};
