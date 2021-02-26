import React from 'react';
import InformalityBanners from "../components/bannerInf"
import {CssBaseline, makeStyles} from '@material-ui/core'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    textoG:{
        color: "rgba(125,116, 98, 1)",
        fontSize: "11px",
        padding: "0px 40px 10px 0px",
        textAlign: "justify",
        lineHeight: "1.8"
    },
    space:{
        height: "10vh"
    },
  }))

const About = () => {
    const classes = useStyles();
    return(
        <div>

            <InformalityBanners background = "/assets/informality/about.png" tittle = "Acerca de nosotros"/>
            <Grid container spacing={3}>
                <Grid item xs={1} sm ={1}/>
                <Grid item xs={10} sm ={10}>
                <div className = {classes.space}></div>
                    <p className = {classes.textoG}>
                    Rupturas21: Hacia nuevas economías, sociedades y legalidades responde a los retos impuestos por viejas y nuevas dinámicas económicas, sociales y legales y su impacto sobre el mundo humano y no humano. A través de colaboración interdisciplinaria e institucional internacional, el proyecto promueve formas novedosas de entender y atender problemas globales. Rupturas hace un llamado a la ruptura con aproximaciones y formas de actuar y ser prefijadas.
                    Rupturas21 es una iniciativa del Colectivo de Derecho Internacional Económico (The IEL Collective).
                    </p>
                </Grid>
                <Grid item xs={1} sm ={1}/>
            </Grid>
        </div>
    );
}

export default About;