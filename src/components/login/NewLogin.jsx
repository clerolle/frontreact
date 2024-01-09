"use client";
import React, { useState } from 'react';
import styles from "./NewLogin.module.css";
import { useRouter } from 'next/navigation';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import {ApiLogin} from '../api/ApiLogin';
import { Grid } from '@mui/material';


const NewLogin = () => {

    // Router Instance
    const router = useRouter();

    // Local State
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    // Snackbar Instance
    // const { enqueueSnackbar } = useSnackbar()

    const handleChange= (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault();
        if(user.name !== "" && user.password !== ""){
                let isValidate = ApiLogin(user.email, user.password);
                console.log(isValidate);
                if(isValidate ){
                    enqueueSnackbar('Inicio de sesión exitosa', { variant: 'success' });
                    router.push("/compania");
                }else{
                    enqueueSnackbar('usuario o contraseña erroneos', { variant: 'warning' });
                }
        }else if(user.name !== "" && user.password === ""){
            enqueueSnackbar('Todos los campos son obligatorios, contraseña erronea', { variant: 'warning' })
        }else if(user.name === "" && user.password !== ""){
            enqueueSnackbar('Todos los campos son obligatorios,  usuario erroneo', { variant: 'warning' })
        }else{
            enqueueSnackbar('Todos los campos son obligatorios, usuario y contraseña erroneos', { variant: 'warning' })
        }
    }
    return ( 
            <form onSubmit={submit}>
                <Grid container>
                <SnackbarProvider />
                    <Grid item className={styles.container} xs={10} md={6}>
                        <Grid className={styles.header}>
                            <Grid className={styles.text}>
                                LITE
                            </Grid>
                        </Grid>
                        <Grid className={styles.inputs} >
                            <Grid className={styles.input}>
                                <img src="/person.png" alt="person" />
                                <input 
                                    type="text" 
                                    placeholder="email" 
                                    name='email' 
                                    id='email' 
                                    value={user.email} 
                                    onChange={(e)=> handleChange(e)} 
                                    fullwidth
                                />
                            </Grid>
                            <Grid className={styles.input}>
                                <img src="/password.png" alt="password" />
                                <input 
                                    type="password" 
                                    placeholder="password" 
                                    name='password' 
                                    id='password' 
                                    fullwidth
                                    value={user.password} 
                                    onChange={(e)=> handleChange(e)} 
                                />
                            </Grid >
                        </Grid>
                        <button className={styles.submit} type="submit">
                             Sing in
                        </button>
                    </Grid>
                </Grid>
            </form>
     );
}
 
export default NewLogin;