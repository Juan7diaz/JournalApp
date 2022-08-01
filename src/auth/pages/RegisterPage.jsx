import { Link } from "react-router-dom";
import {
  Button,
  Grid,
  Link as LinkMUI,
  TextField,
  Typography,
} from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title={"Crear Cuenta"}>
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Tu nombre"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="correo"
              type="email"
              placeholder="correo@googme.com"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="contraseña"
              type="password"
              placeholder="*****"
              fullWidth
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 0.5 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <LinkMUI component={Link} to="/auth/login">
              Ingresar
            </LinkMUI>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
