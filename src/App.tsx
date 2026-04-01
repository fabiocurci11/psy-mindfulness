import { Stack, Paper, Typography, AppBar, IconButton, Toolbar, CssBaseline } from "@mui/material";
import PageContainer from "./components/PageContainer";

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar   
        position="sticky"
       
        >
        <Toolbar variant="regular"  sx={{ m: 0, px: 3, py: 3}}>
         
          <Typography variant="h6" color="inherit" component="div">
            Nuoto Master
          </Typography>
        </Toolbar>
      </AppBar>

      <PageContainer >
        <Stack
          spacing={4}
          direction="column"
          sx={{
            border: '1px dashed #ff0000',
            borderRadius: 2
          }}>
          {/* Primo elemento della pagina */}

          <Typography variant="h4" component="h1" gutterBottom>
            Benvenuto in Psy Mindfulness
          </Typography>

          <Typography variant="body1">
            Questa è la tua dashboard personale per la gestione dei progetti di mindfulness.
            Qui potrai creare, modificare e monitorare i tuoi progetti in modo semplice ed efficace.
          </Typography>

          <Typography variant="body1">
            Questa è la tua dashboard personale per la gestione dei progetti di mindfulness.
            Qui potrai creare, modificare e monitorare i tuoi progetti in modo semplice ed efficace.
          </Typography>

          <Typography variant="body1">
            Questa è la tua dashboard personale per la gestione dei progetti di mindfulness.
            Qui potrai creare, modificare e monitorare i tuoi progetti in modo semplice ed efficace.
          </Typography>

          <Typography variant="body1">
            Questa è la tua dashboard personale per la gestione dei progetti di mindfulness.
            Qui potrai creare, modificare e monitorare i tuoi progetti in modo semplice ed efficace.
          </Typography>

          <Typography variant="body1">
            Questa è la tua dashboard personale per la gestione dei progetti di mindfulness.
            Qui potrai creare, modificare e monitorare i tuoi progetti in modo semplice ed efficace.
          </Typography>

          <Typography variant="body1">
            Questa è la tua dashboard personale per la gestione dei progetti di mindfulness.
            Qui potrai creare, modificare e monitorare i tuoi progetti in modo semplice ed efficace.
          </Typography>

        </Stack>
      </PageContainer>
    </>
  );
}

export default App;