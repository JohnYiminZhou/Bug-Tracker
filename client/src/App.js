import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';

import logo from './images/logo.png';

import useStyles from './styles';

const App = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const classes = useStyles();
    
    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Container >
            <AppBar className = {classes.appBar} position='static' color='inherit'>
                <Typography className = {classes.heading} variant='h2' align='center'>
                    Bug Tracker
                </Typography>
                <img className = {classes.image} src ={logo} alt = "logo" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" space={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={ setCurrentId }/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId= { currentId } setCurrentId={ setCurrentId }/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>

    
    );
}

export default App;
