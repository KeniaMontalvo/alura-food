import React, {useState} from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarPassword, validarEmail } from "./validaciones";

const DatosUsuario = () => {
  const [email, setEmail] = useState({value: "", valid: null})

  const [password, setPassword] = useState({value: "", valid: null})

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
        onSubmit={(e)=> {
          e.preventDefault();
          if(email.value && password.valid) {
            console.log("siguiente formulario")
          } else {
            console.log("No hacer nada")
            console.log(email,password)
          } 
        }}
      >
        <TextField
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          margin="dense"
          type="email"
          error={email.valid == false}
          helperText={email.valid == false && "Ingresa un correo electrónico válido"}
          value = {email.value}
          onChange={(input)=> {
            const email = input.target.value
            const valido = validarEmail(email)
            setEmail({value: email, valid:valido})}
          }
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          fullWidth
          margin="dense"
          type="password"
          error={password.valid == false}
          helperText={password.valid == false && "Ingresa una contraseña válida, al menos 8 caracteres y máximo 20."}
          value={password.value}
          onChange={(input)=> {
            const password = input.target.value
            setPassword({value: password, valid:validarPassword(password)})}
          }
        />
        <Button variant="contained" type="submit">
          Siguiente
        </Button>
      </Box>
    );
  }


export default DatosUsuario;
