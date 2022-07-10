import {Component} from "react";
import {styleSheet} from "../Item/styles";
import {withStyles} from "@mui/styles";
import {Typography} from "@mui/material";

class Item extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return(
            <div className={classes.load_container}>
                <div className={classes.title}>
                    <Typography variant="h4" color="text.secondary">
                        Item Manage
                    </Typography>
                </div>
            </div>
        )
    }
}

export default withStyles(styleSheet)(Item)