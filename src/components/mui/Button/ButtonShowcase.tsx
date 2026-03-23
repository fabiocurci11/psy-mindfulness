import React, { useState } from 'react';
import {
  Box,
  Paper,
  Stack,
  Divider,
  Container,
  Grid,
} from '@mui/material';
import {
  Send as SendIcon,
  Delete as DeleteIcon,
  CloudUpload as UploadIcon,
  Save as SaveIcon,
  Download as DownloadIcon,
  ArrowForward as ArrowIcon,
} from '@mui/icons-material';
import MuiTypography from '../Typography/MuiTypography';
import MuiButton from './MuiButton';

const ButtonShowcase: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleLoadingClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 6 }}>
        <MuiTypography variant="h3" gutterBottom color="primary">
          Button Component Style Guide
        </MuiTypography>
        <MuiTypography variant="body1" gutterBottom>
          Guida completa alle varianti dei Button con Material UI
        </MuiTypography>
      </Box>

      {/* BUTTON VARIANTS */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <MuiTypography variant="h4" gutterBottom color="secondary">
          1. Button Variants
        </MuiTypography>
        <MuiTypography variant="body2" gutterBottom sx={{ mb: 3 }}>
          Tre varianti principali: Contained (default), Text e Outlined
        </MuiTypography>

        <Stack spacing={4}>
          {/* Contained */}
          <Box>
            <MuiTypography variant="h6" gutterBottom>
              Contained Buttons
            </MuiTypography>
            <MuiTypography variant="caption" color="textSecondary" gutterBottom sx={{ display: 'block', mb: 2 }}>
              variant="contained" • Elevazione alta • Azioni primarie • Maggiore enfasi
            </MuiTypography>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <MuiButton variant="contained">Default</MuiButton>
              <MuiButton variant="contained" disabled>Disabled</MuiButton>
              <MuiButton variant="contained" href="#showcase">Link</MuiButton>
            </Stack>
          </Box>

          <Divider />

          {/* Text */}
          <Box>
            <MuiTypography variant="h6" gutterBottom>
              Text Buttons
            </MuiTypography>
            <MuiTypography variant="caption" color="textSecondary" gutterBottom sx={{ display: 'block', mb: 2 }}>
              variant="text" • Senza sfondo • Azioni secondarie • Minore enfasi
            </MuiTypography>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <MuiButton variant="text">Default</MuiButton>
              <MuiButton variant="text" disabled>Disabled</MuiButton>
              <MuiButton variant="text" href="#showcase">Link</MuiButton>
            </Stack>
          </Box>

          <Divider />

          {/* Outlined */}
          <Box>
            <MuiTypography variant="h6" gutterBottom>
              Outlined Buttons
            </MuiTypography>
            <MuiTypography variant="caption" color="textSecondary" gutterBottom sx={{ display: 'block', mb: 2 }}>
              variant="outlined" • Solo bordo • Azioni medie • Media enfasi
            </MuiTypography>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <MuiButton variant="outlined">Default</MuiButton>
              <MuiButton variant="outlined" disabled>Disabled</MuiButton>
              <MuiButton variant="outlined" href="#showcase">Link</MuiButton>
            </Stack>
          </Box>
        </Stack>
      </Paper>

      {/* COLORS */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <MuiTypography variant="h4" gutterBottom color="secondary">
          2. Button Colors
        </MuiTypography>
        <MuiTypography variant="body2" gutterBottom sx={{ mb: 3 }}>
          Tutti i colori disponibili per ogni variante
        </MuiTypography>

        <Stack spacing={3}>
          {/* Contained Colors */}
          <Box>
            <MuiTypography variant="subtitle1" gutterBottom>
              Contained
            </MuiTypography>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <MuiButton variant="contained" color="primary">Primary</MuiButton>
              <MuiButton variant="contained" color="secondary">Secondary</MuiButton>
              <MuiButton variant="contained" color="success">Success</MuiButton>
              <MuiButton variant="contained" color="error">Error</MuiButton>
              <MuiButton variant="contained" color="info">Info</MuiButton>
              <MuiButton variant="contained" color="warning">Warning</MuiButton>
            </Stack>
          </Box>

          {/* Outlined Colors */}
          <Box>
            <MuiTypography variant="subtitle1" gutterBottom>
              Outlined
            </MuiTypography>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <MuiButton variant="outlined" color="primary">Primary</MuiButton>
              <MuiButton variant="outlined" color="secondary">Secondary</MuiButton>
              <MuiButton variant="outlined" color="success">Success</MuiButton>
              <MuiButton variant="outlined" color="error">Error</MuiButton>
              <MuiButton variant="outlined" color="info">Info</MuiButton>
              <MuiButton variant="outlined" color="warning">Warning</MuiButton>
            </Stack>
          </Box>

          {/* Text Colors */}
          <Box>
            <MuiTypography variant="subtitle1" gutterBottom>
              Text
            </MuiTypography>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <MuiButton variant="text" color="primary">Primary</MuiButton>
              <MuiButton variant="text" color="secondary">Secondary</MuiButton>
              <MuiButton variant="text" color="success">Success</MuiButton>
              <MuiButton variant="text" color="error">Error</MuiButton>
              <MuiButton variant="text" color="info">Info</MuiButton>
              <MuiButton variant="text" color="warning">Warning</MuiButton>
            </Stack>
          </Box>
        </Stack>
      </Paper>

      {/* SIZES */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <MuiTypography variant="h4" gutterBottom color="secondary">
          3. Button Sizes
        </MuiTypography>
        <MuiTypography variant="body2" gutterBottom sx={{ mb: 3 }}>
          Tre dimensioni disponibili: Small, Medium (default), Large
        </MuiTypography>

        <Stack spacing={3}>
          {/* Contained Sizes */}
          <Box>
            <MuiTypography variant="subtitle1" gutterBottom>
              Contained
            </MuiTypography>
            <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
              <MuiButton variant="contained" size="small">Small</MuiButton>
              <MuiButton variant="contained" size="medium">Medium</MuiButton>
              <MuiButton variant="contained" size="large">Large</MuiButton>
            </Stack>
          </Box>

          {/* Outlined Sizes */}
          <Box>
            <MuiTypography variant="subtitle1" gutterBottom>
              Outlined
            </MuiTypography>
            <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
              <MuiButton variant="outlined" size="small">Small</MuiButton>
              <MuiButton variant="outlined" size="medium">Medium</MuiButton>
              <MuiButton variant="outlined" size="large">Large</MuiButton>
            </Stack>
          </Box>

          {/* Text Sizes */}
          <Box>
            <MuiTypography variant="subtitle1" gutterBottom>
              Text
            </MuiTypography>
            <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
              <MuiButton variant="text" size="small">Small</MuiButton>
              <MuiButton variant="text" size="medium">Medium</MuiButton>
              <MuiButton variant="text" size="large">Large</MuiButton>
            </Stack>
          </Box>
        </Stack>
      </Paper>

      {/* BUTTONS WITH ICONS */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <MuiTypography variant="h4" gutterBottom color="secondary">
          4. Buttons with Icons
        </MuiTypography>
        <MuiTypography variant="body2" gutterBottom sx={{ mb: 3 }}>
          Icone a sinistra (startIcon) o a destra (endIcon) del testo
        </MuiTypography>

        <Stack spacing={3}>
          {/* Start Icon */}
          <Box>
            <MuiTypography variant="subtitle1" gutterBottom>
              Start Icon
            </MuiTypography>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <MuiButton variant="contained" startIcon={<SendIcon />}>
                Send
              </MuiButton>
              <MuiButton variant="outlined" startIcon={<DeleteIcon />} color="error">
                Delete
              </MuiButton>
              <MuiButton variant="text" startIcon={<UploadIcon />}>
                Upload
              </MuiButton>
            </Stack>
          </Box>

          {/* End Icon */}
          <Box>
            <MuiTypography variant="subtitle1" gutterBottom>
              End Icon
            </MuiTypography>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <MuiButton variant="contained" endIcon={<ArrowIcon />}>
                Next
              </MuiButton>
              <MuiButton variant="outlined" endIcon={<DownloadIcon />}>
                Download
              </MuiButton>
              <MuiButton variant="text" endIcon={<SaveIcon />}>
                Save
              </MuiButton>
            </Stack>
          </Box>

          {/* Different Sizes with Icons */}
          <Box>
            <MuiTypography variant="subtitle1" gutterBottom>
              Icon Sizes
            </MuiTypography>
            <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
              <MuiButton variant="contained" size="small" startIcon={<SendIcon />}>
                Small
              </MuiButton>
              <MuiButton variant="contained" size="medium" startIcon={<SendIcon />}>
                Medium
              </MuiButton>
              <MuiButton variant="contained" size="large" startIcon={<SendIcon />}>
                Large
              </MuiButton>
            </Stack>
          </Box>
        </Stack>
      </Paper>

      {/* LOADING STATE */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <MuiTypography variant="h4" gutterBottom color="secondary">
          5. Loading State
        </MuiTypography>
        <MuiTypography variant="body2" gutterBottom sx={{ mb: 3 }}>
          Stato di caricamento con spinner integrato
        </MuiTypography>

        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <MuiButton variant="contained" loading={loading} onClick={handleLoadingClick}>
            Click to Load
          </MuiButton>
          <MuiButton variant="outlined" loading={loading} onClick={handleLoadingClick}>
            Click to Load
          </MuiButton>
          <MuiButton variant="contained" loading startIcon={<SendIcon />}>
            Loading with Icon
          </MuiButton>
          <MuiButton variant="outlined" loading color="success">
            Processing
          </MuiButton>
        </Stack>
      </Paper>

      {/* FULL WIDTH */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <MuiTypography variant="h4" gutterBottom color="secondary">
          6. Full Width Buttons
        </MuiTypography>
        <MuiTypography variant="body2" gutterBottom sx={{ mb: 3 }}>
          Bottoni che occupano tutta la larghezza disponibile
        </MuiTypography>

        <Stack spacing={2}>
          <MuiButton variant="contained" fullWidth>
            Full Width Contained
          </MuiButton>
          <MuiButton variant="outlined" fullWidth>
            Full Width Outlined
          </MuiButton>
          <MuiButton variant="text" fullWidth>
            Full Width Text
          </MuiButton>
        </Stack>
      </Paper>

      {/* DISABLE ELEVATION */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <MuiTypography variant="h4" gutterBottom color="secondary">
          7. Disable Elevation
        </MuiTypography>
        <MuiTypography variant="body2" gutterBottom sx={{ mb: 3 }}>
          Rimuove l'ombra dai bottoni contained
        </MuiTypography>

        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <MuiButton variant="contained">
            With Elevation
          </MuiButton>
          <MuiButton variant="contained" disableElevation>
            No Elevation
          </MuiButton>
          <MuiButton variant="contained" color="secondary" disableElevation>
            No Elevation Secondary
          </MuiButton>
        </Stack>
      </Paper>

      {/* COMMON USE CASES */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <MuiTypography variant="h4" gutterBottom color="secondary">
          8. Common Use Cases
        </MuiTypography>
        <MuiTypography variant="body2" gutterBottom sx={{ mb: 3 }}>
          Esempi pratici di utilizzo
        </MuiTypography>

        <Stack spacing={4}>
          {/* Form Actions */}
          <Box>
            <MuiTypography variant="h6" gutterBottom>
              Form Actions
            </MuiTypography>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <MuiButton variant="contained" color="primary">
                Submit
              </MuiButton>
              <MuiButton variant="outlined" color="secondary">
                Cancel
              </MuiButton>
              <MuiButton variant="text">
                Reset
              </MuiButton>
            </Stack>
          </Box>

          {/* Confirmation Dialogs */}
          <Box>
            <MuiTypography variant="h6" gutterBottom>
              Confirmation Dialog
            </MuiTypography>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <MuiButton variant="contained" color="error" startIcon={<DeleteIcon />}>
                Delete
              </MuiButton>
              <MuiButton variant="outlined">
                Cancel
              </MuiButton>
            </Stack>
          </Box>

          {/* File Upload */}
          <Box>
            <MuiTypography variant="h6" gutterBottom>
              File Upload
            </MuiTypography>
            <MuiButton
              variant="contained"
              component="label"
              startIcon={<UploadIcon />}
            >
              Upload File
              <input type="file" hidden />
            </MuiButton>
          </Box>

          {/* Call to Action */}
          <Box>
            <MuiTypography variant="h6" gutterBottom>
              Call to Action
            </MuiTypography>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <MuiButton 
                variant="contained" 
                size="large" 
                color="primary"
                endIcon={<ArrowIcon />}
              >
                Get Started
              </MuiButton>
              <MuiButton 
                variant="outlined" 
                size="large"
              >
                Learn More
              </MuiButton>
            </Stack>
          </Box>
        </Stack>
      </Paper>

      {/* PROPS REFERENCE */}
      <Paper elevation={2} sx={{ p: 3 }}>
        <MuiTypography variant="h4" gutterBottom color="secondary">
          Props Reference
        </MuiTypography>
        
        <Box sx={{ overflowX: 'auto' }}>
          <Box 
            component="table" 
            sx={{ 
              width: '100%', 
              mt: 2, 
              minWidth: 600,
              '& td, & th': { 
                p: 1.5, 
                borderBottom: '1px solid #ddd',
                textAlign: 'left',
              },
              '& th': {
                bgcolor: '#f5f5f5',
                fontWeight: 600,
              },
              '& code': {
                bgcolor: '#f0f0f0',
                px: 0.5,
                py: 0.25,
                borderRadius: 0.5,
                fontSize: '0.875rem',
              }
            }}
          >
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>variant</code></td>
                <td>'text' | 'contained' | 'outlined'</td>
                <td>'contained'</td>
                <td>Variante visuale del bottone</td>
              </tr>
              <tr>
                <td><code>color</code></td>
                <td>'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'</td>
                <td>'primary'</td>
                <td>Colore del bottone</td>
              </tr>
              <tr>
                <td><code>size</code></td>
                <td>'small' | 'medium' | 'large'</td>
                <td>'medium'</td>
                <td>Dimensione del bottone</td>
              </tr>
              <tr>
                <td><code>startIcon</code></td>
                <td>ReactNode</td>
                <td>-</td>
                <td>Icona a sinistra del testo</td>
              </tr>
              <tr>
                <td><code>endIcon</code></td>
                <td>ReactNode</td>
                <td>-</td>
                <td>Icona a destra del testo</td>
              </tr>
              <tr>
                <td><code>disabled</code></td>
                <td>boolean</td>
                <td>false</td>
                <td>Disabilita il bottone</td>
              </tr>
              <tr>
                <td><code>loading</code></td>
                <td>boolean</td>
                <td>false</td>
                <td>Mostra lo spinner di caricamento</td>
              </tr>
              <tr>
                <td><code>fullWidth</code></td>
                <td>boolean</td>
                <td>false</td>
                <td>Larghezza completa</td>
              </tr>
              <tr>
                <td><code>disableElevation</code></td>
                <td>boolean</td>
                <td>false</td>
                <td>Rimuove l'ombra (solo contained)</td>
              </tr>
              <tr>
                <td><code>onClick</code></td>
                <td>function</td>
                <td>-</td>
                <td>Handler del click</td>
              </tr>
              <tr>
                <td><code>href</code></td>
                <td>string</td>
                <td>-</td>
                <td>URL per bottone come link</td>
              </tr>
              <tr>
                <td><code>sx</code></td>
                <td>object</td>
                <td>{'{}'}</td>
                <td>Stili personalizzati MUI</td>
              </tr>
            </tbody>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default ButtonShowcase;