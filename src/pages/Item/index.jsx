import {Component} from "react";
import {styleSheet} from "../Item/styles";
import {withStyles} from "@mui/styles";

class Item extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return(
            <div className={classes.load_container}>

            </div>
        )
    }
}

export default withStyles(styleSheet)(Item)