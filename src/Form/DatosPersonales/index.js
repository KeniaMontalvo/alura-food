import React from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarNombre, validarApellidos, validarTelefono } from "./validaciones";
import { useState } from "react";

const DatosPersonales = ({updateStep}) => {

  const [name, setName] = useState({
    value: '', valid: null
  })

  const [lastName, setLastName] = useState({
    value: '', valid: null
  })

  const [phone, setPhone] = useState({
    value: '', valid: null
  })

  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        updateStep(2);
      }}
    >
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={name.value}
        onChange = {(input) => {
          const value = input.target.value;
          const valid = validarNombre(value);
          setName({value, valid})
          console.log(value, valid)
        }}
      />
      <TextField
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={lastName.value}
        onChange = {(input) => {
          const value = input.target.value;
          const valid = validarApellidos(value);
          setLastName({value, valid})
          console.log(value, valid)
        }}
      />
      <TextField
        label="Número telefónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        value={phone.value}
        onChange = {(input) => {
          const value = input.target.value;
          const valid = validarTelefono(value);
          setPhone({value, valid})
          console.log(value, valid)
        }}
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosPersonales;
