"use client";
import React, { useState } from "react";
import styles from "./AddUsers.module.css";
import { useRouter } from "next/navigation";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
// import {ApiLogin} from '../api/ApiLogin';
import { Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { ApiCreate } from "../api/ApiCreate";

const AddUsers = () => {

  // Router Instance
  const router = useRouter();

  // Local State
  const [user, setUser] = useState({
    nit: "",
    name: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    if (user.nit !== "" && user.name !== "" && user.address) {
      let isValidate = ApiCreate(user);
      console.log(isValidate);
      enqueueSnackbar("Creación de compañia exitosa", { variant: "success" });
      // router.push("/consultacompania");
    } else if ( user.nit === "" ) {
      enqueueSnackbar("Todos los campos son obligatorios, ingresa Nit de la compañia", {
        variant: "warning",
      });
    } else if ( user.name === "" ) {
      enqueueSnackbar("Todos los campos son obligatorios, ingresa nombre de la empresa", {
        variant: "warning",
      });
    } else if ( user.address === "") {
      enqueueSnackbar("Todos los campos son obligatorios, ingresa la dirección de la empresa", {
        variant: "warning",
      });
    } else {
      enqueueSnackbar("Todos los campos son obligatorios ", {
        variant: "warning",
      });
    }
  };

  return (
    <form onSubmit={submit}>
      <SnackbarProvider />
      <Grid container>
        <Grid item className={styles.container} md={6} xs={10}>
          <div className={styles.header}>
            <div className={styles.text}>COMPANY</div>
          </div>
          <div className={styles.inputs}>
          <TextField
                    type="text"
                    id="standard-basic"
                    name="nit"
                    // label="Nit"
                    placeholder="Nit"
                    variant="standard"
                    style={{ width: "300px", margin: "auto" }}
                    value={user.nit}
                    onChange={handleChange}
                  />
                  <TextField
                    type="text"
                    id="standard-basic"
                    name="name"
                    // label="Name"
                    placeholder="Name"
                    variant="standard"
                    style={{ width: "300px", margin: "auto" }}
                    value={user.name}
                    onChange={handleChange}
                  />
                  <TextField
                    type="text"
                    id="standard-basic"
                    name="address"
                    // label="Address"
                    placeholder="Address"
                    variant="standard"
                    style={{ width: "300px", margin: "auto" }}
                    value={user.address}
                    onChange={handleChange}
                  />
                  <TextField
                    type="text"
                    id="standard-basic"
                    name="phone"
                    // label="Phone"
                    placeholder="Phone"
                    variant="standard"
                    style={{ width: "300px", margin: "auto" }}
                    value={user.phone}
                    onChange={handleChange}
                  />
          </div>
          <button className={styles.submit} type="submit">
            ADD
          </button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddUsers;
