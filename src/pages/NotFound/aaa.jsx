import {Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import GDSEButton from "../../components/common/Button";

<div className={classes.container}>
    <div className={classes.title}>
        <Typography variant="h4" color="text.secondary">
            Item Manage
        </Typography>
    </div>
    <div className={classes.form_container}>
        <div className={classes.left_form}>
            <Grid container spacing={5}>
                <Grid item lg={6} md={6} sm={6} xm={6} >
                    <TextField id="outlined-basic" placeHolder="Item Code" label="Item Code" variant="outlined" size="small"
                               style={{width: '100%'}}/>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xm={6} >
                    <TextField id="outlined-basic" placeHolder="Name" label="Item name" variant="outlined" size="small"
                               style={{width: '100%'}} />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xm={6}>
                    <TextField id="outlined-basic" placeHolder="Price" label="Price" variant="outlined" size="small"
                               style={{width: '100%'}}
                    />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xm={6}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={this.state.packSize}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Pack Size" />}
                        getOptionLabel={
                            (option) => option.label
                        }
                        onChange={(e, value) => {
                            console.log(value.label + " " + value.year);
                        }}
                        size="small"
                        style={{ width: '100%' }}
                    />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xm={6}>
                    <TextField id="outlined-basic" placeHolder="Description" label="Description" variant="outlined" size="small"
                               style={{width: '100%'}}
                    />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xm={6} >
                    <TextField id="outlined-basic" placeHolder="Qty On Han" label="Qty On Hand" variant="outlined" size="small"
                               style={{width: '100%'}}/>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xm={12} style={{display: 'flex'}} justifyContent="flex-end" >
                    <GDSEButton size="small" variant="contained" label="save"/>
                </Grid>
            </Grid>
        </div>
        <div className={classes.table_form}>

        </div>
    </div>
</div>