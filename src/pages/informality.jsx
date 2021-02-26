import React from 'react';
import {CssBaseline, makeStyles} from '@material-ui/core'
import InformalityBanners from "../components/bannerInf"
import ReactPlayer from "react-player"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LogosBox from '../components/logos'
import DemoCarousel from '../components/dataClipCarr'
import PdfView from '../components/pdfView'

const useStyles = makeStyles((theme) => ({
    root:{
        maxWidth: "100vw",
    //   minHeight: "100vh",
    //   backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/ciudadPagina.png'})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    },
    space:{
        height: "20vh"
    },
    spacesm:{
        height: "10vh"
    },
    playerWrapper: {
        position: "relative",
        paddingTop: "56.25%", /* 720 / 1280 = 0.5625 */
    },
    videoG:{
        position: "absolute",
        top: "0",
        left: "0",
    },
    textoG:{
        color: "rgba(125,116, 98, 1)",
        fontSize: "11px",
        padding: "0px 40px 10px 0px",
        textAlign: "justify",
        lineHeight: "1.8"
    },
    texttoG1col:{
        paddingLeft: "80px"
    },
    carrousel:{
        maxHeight:"20vh",
    }
  }))

const InformalityPage = () => {
    const classes = useStyles();
    return(
        <div>
            <InformalityBanners background = "/assets/informality/about.png" tittle = "Informalidad en Tiempos de Covid-19"/>
            <div className = {classes.space}></div>
                <Grid container spacing={3}>
                    <Grid item xs={1} sm ={1}/>
                    <Grid item xs={6} sm ={6}>
                        <div className = {classes.playerWrapper}>
                            <ReactPlayer className = {classes.videoG} width="100%" height="100%" url="https://www.youtube.com/watch?v=C3dfGZBWmAs&t=6s"/>
                        </div>
                    </Grid>
                    <Grid item xs={5} sm ={5}>
                        <div className = {classes.textoG}>
                            <p>El proyecto de Rupturas21 “Informalidad en tiempos de Covid-19” reune a un grupo de académicos socio-legales, economistas laborales, expertos en salud pública, antropólogos, cinematógrafos, infógrafos, diseñadores web y diseñadores de política pública con el fin de estudiar el impacto que la pandemia causada por el Covid-19 ha tenido sobre los trabajadores informales y sus economías, tomando a Colombia como su principal caso de estudio.</p>
                        </div>
                    </Grid>

                    <Grid item xs={1} sm ={1}/>
                    <Grid  item xs={11} sm ={11}>
                        <p className = {classes.textoG}>
                        Mediante la combinación de recursos audiovisuales y transgrediendo las fronteras entre metodologías cualitativas y cuantitativas, así como entre práctica y academia, los resultados de este proyecto incluyen recomendaciones de políticas públicas en distintos idiomas, historias de vida, documentales, plataformas de divulgación en línea y la primera base de datos agregada y comprensiva sobre la informalidad en Colombia.
                        
                        El proyecto resalta la enorme aunque a veces olvidada contribución de los trabajadores informales a las economías de las naciones, así como las ultra precariedades a las que se enfrentan en momentos de crisis de salud pública. A partir de esta perspectiva, los resultados del proyecto hacen un llamado urgente para que se adopten nuevos tipos de políticas sociales, económicas y de salud en Colombia y países similares.
                            
                        “Informalidad en tiempos de Covid-19” is patrocinado por las escuelas de Derecho de las universidades de Kent, Essex y Warwick (Reino Unido) en asocio con las Facultad de Jurisprudencia, el Observatorio del Trabajo y el Grupo de Investigación en Salud Pública y Epidemiología de la Facultad de Medicina de la Universidad del Rosario y el Observatorio para la Equidad de las Mujeres de la Universidad Icesi (Colombia).
                        </p>
                    </Grid>
                    <Grid item xs={1} sm ={1}/>
                    <Grid item xs={10} sm ={10}>
                        <LogosBox/>
                    </Grid>
                    <Grid item xs={1} sm ={1}/>
                </Grid>

                <InformalityBanners background = "/assets/informality/dataclips2.jpg" tittle = "Data Clips"/>
                <div>
                    <div className = {classes.spacesm}></div>
                    <div>
                    <Grid container spacing={3}>
                        <Grid item xs={4} sm ={4}/>
                        <Grid className = {classes.carrousel} item xs={4} sm ={4}>
                            <DemoCarousel></DemoCarousel>
                            </Grid>
                        <Grid item xs={4} sm ={4}/>
                    </Grid>
                    </div>
                    <div className = {classes.space}></div>
                </div>
                <div className = {classes.space}></div>
                <div className = {classes.space}></div>
                <div className = {classes.spacesm}></div>

                <InformalityBanners background = "/assets/informality/reportes2.jpg" tittle = "Reportes"/>
                <div className = {classes.spacesm}></div>
                <Grid container spacing={3}>
                        <Grid item xs={1} sm ={1}/>
                        <Grid item xs={10} sm ={10}>
                    <p className = {classes.textoG}>
                    En esta sección podrá conocer nuestros reportes, en el que presentamos nuevas políticas económicas, sociales y legales a considerar. Haga clic en las portadas para acceder a cada uno de ellos.</p>
                </Grid>
                </Grid>

                <Grid container spacing={8}>
                    <Grid item xs={1} sm ={1}/>
                    <Grid item xs={3} sm ={3}><PdfView imscr = "informe1.png"></PdfView></Grid>
                    {/* <Grid item xs={1} sm ={1}/> */}
                    <Grid item xs={3} sm ={3}><PdfView imscr = "informe2.png"></PdfView></Grid>
                    {/* <Grid item xs={1} sm ={1}/> */}
                    <Grid item xs={3} sm ={3}><PdfView imscr = "informe3.png"></PdfView></Grid>
                    <Grid item xs={2} sm ={2}/>
                </Grid>

                <InformalityBanners background = "/assets/informality/historias2.png" tittle = "Historias de vida"/>
                <div className = {classes.spacesm}></div>
  
                <Grid container spacing={3}>
                        <Grid item xs={1} sm ={1}/>
                        <Grid item xs={10} sm ={10}>
                    <p className = {classes.textoG}>
                    Conozca nuestras historias de vida, en las que retratamos cómo las dinámicas económicas, sociales y legales afectan la vida de personas. Haga clic en las portadas para acceder a cada una de ellas.</p>
                </Grid>
                </Grid>

                <Grid container spacing={8}>
                    <Grid item xs={1} sm ={1}/>
                    <Grid item xs={3} sm ={3}><PdfView imscr = "historia1.png"></PdfView></Grid>
                    {/* <Grid item xs={1} sm ={1}/> */}
                    <Grid item xs={3} sm ={3}><PdfView imscr = "historia2.png"></PdfView></Grid>
                    {/* <Grid item xs={1} sm ={1}/> */}
                    <Grid item xs={3} sm ={3}><PdfView imscr = "historia3.png"></PdfView></Grid>
                    <Grid item xs={2} sm ={2}/>
                </Grid>

                <InformalityBanners background = "/assets/informality/baseDatos.png" tittle = "Videos y documentales"/>
                <div className = {classes.spacesm}></div>
  
                <Grid container spacing={3}>
                        <Grid item xs={1} sm ={1}/>
                        <Grid item xs={10} sm ={10}>
                    <p className = {classes.textoG}>
                    Haga click para acceder a la primera base de datos completa de datos agregados sobre informalidad en Colombia.</p>
                </Grid>
                </Grid>


                <InformalityBanners background = "/assets/informality/baseDatos.png" tittle = "Base de datos agregada"/>
                <div className = {classes.spacesm}></div>
  
                <Grid container spacing={3}>
                        <Grid item xs={1} sm ={1}/>
                        <Grid item xs={10} sm ={10}>
                    <p className = {classes.textoG}>
                    Haga click para acceder a la primera base de datos completa de datos agregados sobre informalidad en Colombia.</p>
                </Grid>
                </Grid>

                <InformalityBanners background = "/assets/informality/baseDatos.png" tittle = "Equipo de trabajo"/>
                <div className = {classes.spacesm}></div>
  
                <Grid container spacing={3}>
                        <Grid item xs={1} sm ={1}/>
                        <Grid item xs={10} sm ={10}>
                    <p className = {classes.textoG}>
                    Haga click para acceder a la primera base de datos completa de datos agregados sobre informalidad en Colombia.</p>
                </Grid>
                </Grid>

        </div>
    )
}

export default InformalityPage;