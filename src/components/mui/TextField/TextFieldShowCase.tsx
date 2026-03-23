import React, { useState } from 'react';
import { 
  Container, 
  Box, 
  Paper, 
  MenuItem, 
  Grid
} from '@mui/material';
import { 
  Email as EmailIcon, 
  Lock as LockIcon, 
  Visibility, 
  Search as SearchIcon 
} from '@mui/icons-material';
import MuiTypography from '../Typography/MuiTypography';
import MuiTextField from './MuiTextField';

const TextFieldShowcase: React.FC = () => {
  const [country, setCountry] = useState('');

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 6 }}>
        <MuiTypography variant="h3" gutterBottom color="primary">
          TextField Style Guide
        </MuiTypography>
        <MuiTypography variant="body1">
          Sintassi aggiornata per MUI v6 (Grid2)
        </MuiTypography>
      </Box>

      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <MuiTypography variant="h4" gutterBottom color="secondary">
          1. Stati e Validazione
        </MuiTypography>
        
        {/* In Grid2 la prop 'item' è sparita. Tutti i figli sono item. */}
        <Grid container spacing={3} sx={{ mt: 1 }}>
          
          {/* La dimensione si passa tramite la prop 'size' */}
          <Grid size={{ xs: 12, md: 4 }}>
            <MuiTextField label="Default" fullWidth />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <MuiTextField label="Required" required fullWidth />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <MuiTextField 
              label="Error" 
              error 
              helperText="Formato non valido" 
              fullWidth 
              defaultValue="Errore!"
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <MuiTextField label="Disabled" disabled fullWidth defaultValue="Non modificabile" />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <MuiTextField label="Loading State" loading fullWidth />
          </Grid>
          
        </Grid>
      </Paper>

      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <MuiTypography variant="h4" gutterBottom color="secondary">
          2. Varianti
        </MuiTypography>
        
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <MuiTextField label="Outlined (default)" variant="outlined" fullWidth />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <MuiTextField label="Filled" variant="filled" fullWidth />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <MuiTextField label="Standard" variant="standard" fullWidth />
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <MuiTypography variant="h4" gutterBottom color="secondary">
          3. Icone e Adornments
        </MuiTypography>
        
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <MuiTextField 
              label="Con icona start" 
              startIcon={<SearchIcon />} 
              placeholder="Cerca..." 
              fullWidth 
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <MuiTextField 
              label="Con icona end" 
              endIcon={<EmailIcon />} 
              placeholder="Email" 
              fullWidth 
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <MuiTextField 
              label="Entrambe le icone" 
              startIcon={<LockIcon />} 
              endIcon={<Visibility />} 
              placeholder="Password" 
              fullWidth 
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <MuiTextField 
              label="Loading con icona" 
              startIcon={<SearchIcon />} 
              loading 
              fullWidth 
            />
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <MuiTypography variant="h4" gutterBottom color="secondary">
          4. Tipi di Input Speciali
        </MuiTypography>
        
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <MuiTextField 
              label="Multiline" 
              multiline 
              rows={3} 
              placeholder="Testo lungo..." 
              fullWidth 
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <MuiTextField 
              label="Select" 
              select 
              value={country} 
              onChange={(e) => setCountry(e.target.value)} 
              fullWidth
            >
              <MenuItem value="">
                <em>Nessuno</em>
              </MenuItem>
              <MenuItem value="IT">Italia</MenuItem>
              <MenuItem value="US">Stati Uniti</MenuItem>
              <MenuItem value="FR">Francia</MenuItem>
            </MuiTextField>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <MuiTextField 
              label="Con slotPropsInput" 
              slotPropsInput={{ 
                inputProps: { maxLength: 10 } // Limita caratteri
              }} 
              placeholder="Max 10 caratteri" 
              fullWidth 
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <MuiTextField 
              label="Con custom sx" 
              sx={{ 
                '& .MuiOutlinedInput-root': { 
                  backgroundColor: '#f0f8ff' 
                } 
              }} 
              placeholder="Sfondo custom" 
              fullWidth 
            />
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <MuiTypography variant="h4" gutterBottom color="secondary">
          5. Esempi Avanzati
        </MuiTypography>
        
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <MuiTextField 
              label="Email con validazione" 
              type="email" 
              startIcon={<EmailIcon />} 
              required 
              error={!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test('invalid')} 
              helperText="Formato email richiesto" 
              fullWidth 
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <MuiTextField 
              label="Password sicura" 
              type="password" 
              startIcon={<LockIcon />} 
              endIcon={<Visibility />} 
              slotPropsInput={{ 
                inputProps: { minLength: 8 } 
              }} 
              helperText="Minimo 8 caratteri" 
              fullWidth 
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default TextFieldShowcase;