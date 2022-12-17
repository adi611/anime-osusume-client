import { React, useState, useEffect } from "react";
import { Box, Typography, Button, Grid, makeStyles } from "@material-ui/core";

const skills = ["React.js", "SpringBoot", "AWS"];

const useStyles = makeStyles({
    wrapper: {
        border: "1px solid #e8e8e8",
    },
    skills: {
        marginRight: "10px",
    }
})

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const classes = useStyles();
    return (
        <Box p={2} className={classes.wrapper}>
            <Grid container alignItems="center">
                <Grid item xs>
                    <Typography variant="subtitle1">{props.name}</Typography>
                    {/* <Typography variant="subtitle2">Zimtive</Typography> */}
                </Grid>
                <Grid item container xs>
                    {/* {skills.map(skill => <Grid className={classes.skills} item key={skill}>{skill}</Grid>)} */}
                </Grid>
                <Grid item container direction="column" alignItems="flex-end" xs>
                    <Grid item>
                        {/* <Typography variant="caption">03-06-2022 | Full Time | Remote</Typography> */}
                    </Grid>
                    <Grid item>
                        <Box mt={2}>
                            <Button variant="outlined">View</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}