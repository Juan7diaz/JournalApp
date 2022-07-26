import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";

export const NoteView = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          28 Agosto 2023
        </Typography>
      </Grid>
      <Grid item>
        <Button sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          fullWidth
          placeholder="ingrese un titulo"
          label="Titulo"
          sx={{ border: "none", mb: 1 }}
        />
        <TextField
          type="text"
          fullWidth
          multiline
          placeholder="Qué sucedió en el dia de hoy?"
          minRows={3}
        />
      </Grid>
      <ImageGallery />
    </Grid>
  );
};
