import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import styles from "./EditUser.module.css";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import { useRouter } from "next/navigation";
import { ApiEdit } from "../api/ApiEdit";
import { ApiGet } from "../api/ApiGet";
import { ApiDelete } from "../api/ApiDelete";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EditUser(props) {
  // console.log(props)
  // Router Instance
  const router = useRouter();

  // local state
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const [gender, setGender] = useState(props.info?.gender);
  const [user, setUser] = useState({
    nit: props.info?.nit,
    name: props.info?.name,
    address: props.info?.address,
    phone: props.info?.phone,
  });
  
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    if (user.name !== "" && user.birthday !== "" && user.gender) {
      ApiEdit(user);
      enqueueSnackbar("Edición usuario exitosa", { variant: "success" });
      setOpen(false);
      router.push("/");
    } else if ( user.birthday === "" ) {
      enqueueSnackbar("Todos los campos son obligatorios, ingresa fecha de nacimiento", {
        variant: "warning",
      });
    } else if ( user.name === "" ) {
      enqueueSnackbar("Todos los campos son obligatorios, ingresa nombre del usuario", {
        variant: "warning",
      });
    } else if ( user.gender === "") {
      enqueueSnackbar("Todos los campos son obligatorios, ingresa el genero de usuario", {
        variant: "warning",
      });
    } else {
      enqueueSnackbar("Todos los campos son obligatorios, usuario fecha y genero ", {
        variant: "warning",
      });
    }
  };

  const handleDelete = () => {
    ApiDelete(props.info?.nit);
    setOpen(false);
    router.push("/crearcompania");
  }

  return (
    <div>
      <SnackbarProvider />
      <Button onClick={handleOpen}>
        <MoreVertIcon />
      </Button>
      <Modal
        style={{border: "none", margin: "5em auto", width: "300px"}}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <form onSubmit={submit}>
            <Grid container>
              <Grid item className={styles.container} >
                <div className={styles.header}>
                  <div className={styles.text}>Company</div>
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
                    value={props.info?.nit}
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
                    value={props.info?.name}
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
                    value={props.info?.address}
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
                    value={props.info?.phone}
                    onChange={handleChange}
                  />
                  
                </div>
                <Grid display={"flex"} >
                  <button className={styles.submit} type="submit">
                    EDIT
                  </button>
                  <button className={styles.submit} onClick={handleDelete}>
                    DELETE
                  </button>
                </Grid>
              </Grid>
            </Grid>
          </form>
      </Modal>
    </div>
  );
}
