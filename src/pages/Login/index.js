import React, {useState} from "react";
import Container from '../../components/Container';
import Header from '../../components/Header';

import { Typography, Grid, TextField } from '@mui/material';

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validation";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";

function Login(props) {
    const [isLoading, setIsLoading] = useState(false); 
    const auth = useAuth();

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
            const { data: loginData } = await api.auth.login(data);

            auth.setToken(loginData.token);
            auth.setUser(loginData.user);
        } catch (e) {
            if (e.response.status === 422) {
                Object.keys(e.response.data.errors).forEach((key) => {
                    setError(key, {
                        type: "manual",
                        message: e.response.data.errors[key],
                    });
                });
            }
        } finally {
            setIsLoading(false);
        }
    }


    return (
    <Container>
        <Header></Header>
        <Typography variant="h6" color="text.primary">Login</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
                <Grid items xs={12}>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({field}) => (
                            <TextField
                                {...field}
                                error={Boolean(errors.email?.message)}
                                fullWidth={true}
                                type="email"
                                label="Email"
                                variant="outlined"
                                helperText={errors.email?.message}
                            />
                        )}

                    />

                </Grid>

            </Grid>
        </form>

    </Container>
    );
} 

export default Login