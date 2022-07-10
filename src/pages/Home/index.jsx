import {Component} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import {CardHeader} from "@mui/material";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            top100Films: [
                {label: 'The Shawshank Redemption', year: 1994},
                {label: 'The Godfather', year: 1972},
                {label: 'The Godfather: Part II', year: 1974},
                {label: 'The Dark Knight', year: 2008},
                {label: '12 Angry Men', year: 1957},
            ]
        }
    }


    render() {
        const {classes} = this.props
        return (
            /*<div className={classes.container}>
                <div className={classes.nav_bar}></div>
                <div className={classes.load_container}>

                </div>
            </div>*/
            <div className={classes.container}>
                <div className={classes.nav_bar}></div>
                <div className={classes.load_container}>
                    <div className={classes.card}>
                        <Grid container >
                            <Grid item lg={12} md={6} sm={6} xm={6}>
                                <Card variant="outlined" sx={{ maxWidth: 400 }}>{
                                    /*<CardMedia
                                        component="img"
                                        height="194"
                                        image="../../assets/img/ijse_logo.png"
                                        alt="Paella dish"
                                    />*/

                                    <CardHeader
                                        title="Shrimp and Chorizo Paella"
                                        subheader="September 14, 2016"
                                    />
                                }</Card>
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.card}>
                        <Grid container >
                            <Grid item lg={12} md={6} sm={6} xm={6}>
                                <Card variant="outlined" sx={{ maxWidth: 400 }}>{
                                    <CardHeader
                                        title="Shrimp and Chorizo Paella"
                                        subheader="September 14, 2016"
                                    />
                                }
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.card}>
                        <Grid container>
                            <Grid item lg={12} md={6} sm={6} xm={6}>
                                <Card variant="outlined" sx={{ maxWidth: 400 }}>{
                                    <CardHeader
                                        title="Shrimp and Chorizo Paella"
                                        subheader="September 14, 2016"
                                    />
                                }</Card>
                            </Grid>
                        </Grid>
                    </div>

                </div>
            </div>
        )
    }
}

export default withStyles(styleSheet)(Home)