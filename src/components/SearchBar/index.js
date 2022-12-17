import { React, useState, useEffect } from "react";
import axios from 'axios';
import { Box, Select, MenuItem, Button, TextField, makeStyles } from "@material-ui/core";
import { Autocomplete } from '@mui/material';

const useStyles = makeStyles({
    wrapper: {
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    },
    searchFields: {
        backgroundColor: "#fff",
        display: "flex",
        borderRadius: "5px",
        "& > *": {
            flex: 1,
            height: "45px",
            margin: "8px",
        },
    },
    textField: {
        flex: 2
    }
})

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const classes = useStyles();

    const [searchName, setSearchName] = useState('');
    const [searchType, setSearchType] = useState('All');

    const client = axios.create({
        baseURL: "http://127.0.0.1:5000/anime"
    });

    const fetchAnime = async (name, type) => {
        client
            .post("", {
                name: name,
                type: type
            })
            .then((res) => {
                console.log(res.data);
                props.setIsLoading(false);
                props.setAnime(res.data);
            })
    }

    const handleNameChange = (value) => {
        setSearchName(value);
        console.log(searchName);
    }

    const handleTypeChange = (e) => {
        setSearchType(e.target.value);
        console.log(e.target.value);
        console.log(searchType);
    }

    const handleClick = (e) => {
        props.setIsLoading(true);
        fetchAnime(searchName, searchType);
    }

    const anime_ds = ['Naruto', 'Bleach', 'One Piece']

    return (
        <Box mt={-5} mb={2} className={classes.wrapper}>
            <Box p={2} className={classes.searchFields}>
                <Autocomplete
                    className={classes.textField}
                    disablePortal
                    id="combo-box-demo"
                    options={anime_ds}
                    onChange={(event, value) => handleNameChange(value)}
                    renderInput={(params) => <TextField {...params} id="outlined-basic" label="Search anime" variant="outlined" />}
                />
                {/* <TextField className={classes.textField} id="outlined-basic" label="Search anime" variant="outlined" value={searchName} onChange={handleNameChange} /> */}

                <Button variant="contained" color="primary" disableElevation onClick={handleClick}>
                    Search
                </Button>
            </Box>
            <Box p={2} className={classes.searchFields}>
                <Select disableUnderline variant="filled" defaultValue={searchType} onChange={handleTypeChange}>
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="TV">TV</MenuItem>
                    <MenuItem value="Movie">Movie</MenuItem>
                    <MenuItem value="Web">Web</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                </Select>
                {/* <Select disableUnderline variant="filled" defaultValue="Remote">
                    <MenuItem value="Remote">Remote</MenuItem>
                    <MenuItem value="In-Office">In-Office</MenuItem>
                </Select>
                <Select disableUnderline variant="filled" defaultValue="Beginner">
                    <MenuItem value="Beginner">Beginner</MenuItem>
                    <MenuItem value="Intermediate">Intermediate</MenuItem>
                    <MenuItem value="Expert">Expert</MenuItem>
                </Select> */}

            </Box>
        </Box>
    )
}