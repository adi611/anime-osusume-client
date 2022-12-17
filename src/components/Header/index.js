import React from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => (
    <Box py={10} bgcolor="secondary.main" color="white">
        <Grid container justify="center">
            <Grid item xs={10}>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="h4">{props.title}</Typography>
                    <Box display="flex" justifyContent="space-between">
                        {props.postJob && <Box m={1}>
                            <Button variant="contained" color="primary" disableElevation>
                                Login
                            </Button>
                        </Box>}
                        {props.dashboard && <Box m={1}>
                            <Button variant="contained" color="primary" disableElevation>Sign Up</Button>
                        </Box>}
                    </Box>
                </Box>
            </Grid>
        </Grid>

    </Box >

);