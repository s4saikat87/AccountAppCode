import React from 'react'
import Header from './header';
import {
    useLocation, useNavigate
} from 'react-router-dom';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid, GridAutoSizer } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { auth } from '../utils/firebase/firebase.utils';
import Loading from './loading';
import process from 'process'

const Dashboard = () => {
    const location = useLocation();
    const state = location.state;
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            // setLoading(true);
            try {
                debugger;
                let data = location.state;
                let email = data.Email;
                let name = data.Name;
                setName(name);
                setEmail(email);
                console.log(data);
            } catch (error) {
                console.error(error.message);
            }

        }
        fetchData();
    }, [])





    return (
        <div>
            <Header />
            {/* <h3>{name}</h3> 
          <h3>{email}</h3>  */}
            <div className='text-center mx-2 my-2 pt-2 bg-fitek text-white sticky-top'>
                <div className='row'>
                    <div className='col-sm-11 col-md-4 col-lg-4'>
                        <Typography sx={{ mb: 1.5 }}>
                            Name : {name}
                        </Typography>
                    </div>
                    <div className='col-sm-11 col-md-4 col-lg-4'>
                        <Typography sx={{ mb: 1.5 }}>
                            Email : {email}
                        </Typography>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard
