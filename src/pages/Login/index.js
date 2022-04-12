import React, {useState} from "react";
import Container from '../../components/Container';
import Header from '../../components/Header';

import { Typography } from '@mui/material';

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validation";

function Login(props) {
    const [isLoading, setIsLoading] = useState(false); 

    const {
        control,
        handleSubmit,
        formState: {errors},
        setError,
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = async data => {
        try {
            setIsLoading(true);
        } catch (e) {

        } finally {
            setIsLoading(false);
        }
    }


    return (<>
    <Container>
        <Header></Header>
        <Typography variant="h7">Login</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>

        </form>

    </Container>
    </>);
} 

export default Login