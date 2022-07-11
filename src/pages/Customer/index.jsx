import {Component} from "react";
import {styleSheet} from "../Customer/styles";
import {withStyles} from "@mui/styles";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import GDSEButton from "../../components/common/Button"
import Paper from '@mui/material/Paper';

class Customer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            packSize: [
                {label: 'Large'},
                {label: 'Medium'},
                {label: 'Small'},
            ],

            formData:{
                code:'',
                name:'',
                email:'',
                address:'',
                salary:'',
                contact:''
            }
        }

    }
    render() {

        function createData(code, name,email, address, salary, contact) {
            return {code, name,email, address, salary, contact};
        }

        const {classes} = this.props
        const rows = [
            createData('C00-001', 'Nimal Perera','nimal123@gamil,com', 'Galle 123', 10000.0, '075-2356741'),
            createData('C00-002', 'Kamal Silva', 'kamal156@gamil,com','Matara', 15000.0, '076-3345341'),
            createData('C00-003', 'Supun Gamage', 'supun13@gamil,com','Colombo 7', 30000.0, '078-6456441'),
            createData('C00-004', 'Hasitha Hettiarachchi', 'hasitha@gamil,com','Galle', 25000.0, '071-7688741'),
            createData('C00-005', 'Susil de Silva', 'susil808@gamil,com','Galle 123', 50000.0, '091-5346741'),
        ];
        return (
            <div className={classes.container}>
                <div className={classes.title_bar}>
                    <Typography variant="h4">
                        Customer Manage
                    </Typography>
                </div>
                <div className={classes.text_form}>
                    <div className={classes.text_field}>
                        <Grid container spacing={3}>
                            <Grid item lg={6} md={6} sm={6} xm={6}>
                                <TextField id="outlined-basic" placeHolder="Customer Code" label="Customer Code"
                                           variant="outlined" size="small"
                                           onChange={(e) => {
                                               console.log(e.target.value)
                                               let formData = this.state.formData
                                               formData.code = e.target.value
                                               this.setState({formData})
                                           }}
                                           style={{width: '100%'}}/>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6}>
                                <TextField id="outlined-basic" placeHolder="Customer Name" label="Customer Name"
                                           variant="outlined"
                                           size="small"
                                           onChange={(e) => {
                                               console.log(e.target.value)
                                               let formData = this.state.formData
                                               formData.name = e.target.value
                                               this.setState({formData})
                                           }}
                                           style={{width: '100%'}}/>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6}>
                                <TextField id="outlined-basic" placeHolder="E-mail" label="E-mail"
                                           variant="outlined"
                                           size="small"
                                           onChange={(e) => {
                                               console.log(e.target.value)
                                               let formData = this.state.formData
                                               formData.email = e.target.value
                                               this.setState({formData})
                                           }}
                                           style={{width: '100%'}}/>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6}>
                                <TextField id="outlined-basic" placeHolder="Address" label="Address" variant="outlined"
                                           size="small"
                                           onChange={(e) => {
                                               console.log(e.target.value)
                                               let formData = this.state.formData
                                               formData.address = e.target.value
                                               this.setState({formData})
                                           }}
                                           style={{width: '100%'}}
                                />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6}>
                                <TextField id="outlined-basic" placeHolder="Salary" label="Salary"
                                           variant="outlined" size="small"
                                           onChange={(e) => {
                                               console.log(e.target.value)
                                               let formData = this.state.formData
                                               formData.salary = e.target.value
                                               this.setState({formData})
                                           }}
                                           style={{width: '100%'}}
                                />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6}>
                                <TextField id="outlined-basic" placeHolder="Contact" label="Contact"
                                           variant="outlined" size="small"
                                           onChange={(e) => {
                                               console.log(e.target.value)
                                               let formData = this.state.formData
                                               formData.contact = e.target.value
                                               this.setState({formData})
                                           }}
                                           style={{width: '100%'}}/>
                            </Grid>
                            <Grid item lg={12} md={12} sm={12} xm={12} style={{display: 'flex'}}
                                  justifyContent="flex-end">
                                <GDSEButton size="small" variant="contained" label="save"
                                            onClick={() => {
                                                this.saveItem()
                                            }}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.table_field}>
                        <Grid item lg={6} md={6} sm={6} xm={6}>
                            <TableContainer component={Paper}>
                                <Table sx={{minWidth: 650}} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Code&nbsp;</TableCell>
                                            <TableCell align="right">Name&nbsp;</TableCell>
                                            <TableCell align="right">Email&nbsp;</TableCell>
                                            <TableCell align="right">Address&nbsp;</TableCell>
                                            <TableCell align="right">Salary&nbsp;</TableCell>
                                            <TableCell align="right">Contact&nbsp;</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow key={row.name}
                                                      sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                                <TableCell component="th" scope="row">{row.code}</TableCell>
                                                <TableCell align="right">{row.name}</TableCell>
                                                <TableCell align="right">{row.email}</TableCell>
                                                <TableCell align="right">{row.address}</TableCell>
                                                <TableCell align="right">{row.salary}</TableCell>
                                                <TableCell align="right">{row.contact}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styleSheet)(Customer)