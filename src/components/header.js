import react from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Divider, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';


const useStyles = makeStyles((theme)=> ({
    root:{
        display: "absolute",
        justifyContent: "center",
        alignItems: "center", 
        height: "100vh",
        padding: "0%",
        marging: "0px"
    },
    appbar:{
        background: "none",
        fontFamily: "Big Shoulders Stencil Text"
    },
    icon:{
        color: "#ffffff",
        fontSize: "2rem"
    },
    appbarTitle:{
        flexGrow: "1"
    },
    appbarWrapper:{
        margin: "0 2% 0 0"
    },
    colorText:{
        color:"#F5D101",
        fontSize: "60px"
    },
    colorText1:{
        color:"#4c4747",
        fontSize: "40px"
    },
    fondoLogo:{
        backgroundColor:"rgba(0, 0, 0, 0.4)",
        position: "absolute",
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/Logo_IEL_blanco.png'})`,
        maxHeight: "140px",
        maxWidth: "400px",
        minWidth: "200px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "80%",
        backgroundPosition:"center",
        padding: "50vh auto",
        height: "40vh",
        width: "50vw",
        top: "-2vh",
        left: "-2vh"
    },
    headerContent: {
        position: "absolute",
        bottom: "10vh",
        left: "20vw",
        textAlign: "right",
        color: "white",
        padding: "150px"
    },
    DescriptionText:{
        position: "absolute",
        verticalAlign: "text-bottom",
        color: "#fff",
        fontSize: "min(1.6vw, 100px)",
        fontFamily: "'Abel', sans-serif",
        textAlign: "right",
        padding: "20px",
        top: "40%",
        width: "70%",
        left: "20%"
    },
    fondoTexto:{
        position: "absolute",
        // border: "solid",
        height: "60vh",
        width: "60vw",
        maxWidth: "600px",
        maxHeight: "300px",
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/esquina.png'})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        bottom: "0vh",
        right: "0vw"
    },
}));

export default function Header(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
        <div className={classes.fondoLogo}/>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className = {classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>
                    </h1>
                    <IconButton>
                        <SortIcon className={classes.icon}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
                <div className={classes.fondoTexto}>
                    <div className={classes.DescriptionText}>
                        <p>A través de colaboraciones internacionales interdisciplinarias e interinstitucionales, avanzamos en formas novedosas de comprender y abordar problemas globales a los desafíos planteados por las dinámicas económicas, sociales y legales.</p>
                    </div>
                </div>
        </div>
    );
}