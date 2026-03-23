import React from 'react';
import { Box, Paper, Divider } from '@mui/material';
import MuiTypography from './MuiTypography';

const TypographyShowcase: React.FC = () => {
  return (
    <Box sx={{ p: 4, maxWidth: 1200, margin: '0 auto' }}>
      <MuiTypography variant="h3" gutterBottom color="primary">
        Typography Style Guide
      </MuiTypography>
      <MuiTypography variant="body1" gutterBottom sx={{ mb: 4 }}>
        Questa guida mostra tutte le varianti disponibili del componente Typography
      </MuiTypography>

      {/* HEADINGS */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <MuiTypography variant="h4" gutterBottom color="secondary">
          Headings (Titoli)
        </MuiTypography>
        <Divider sx={{ mb: 3 }} />
        
        <Box sx={{ mb: 2 }}>
          <MuiTypography variant="h1" gutterBottom>
            H1 - Heading 1
          </MuiTypography>
          <MuiTypography variant="caption" color="textSecondary">
            variant="h1" • Font size: 96px • Font weight: 300 • Line height: 1.167
          </MuiTypography>
        </Box>

        <Box sx={{ mb: 2 }}>
          <MuiTypography variant="h2" gutterBottom>
            H2 - Heading 2
          </MuiTypography>
          <MuiTypography variant="caption" color="textSecondary">
            variant="h2" • Font size: 60px • Font weight: 300 • Line height: 1.2
          </MuiTypography>
        </Box>

        <Box sx={{ mb: 2 }}>
          <MuiTypography variant="h3" gutterBottom>
            H3 - Heading 3
          </MuiTypography>
          <MuiTypography variant="caption" color="textSecondary">
            variant="h3" • Font size: 48px • Font weight: 400 • Line height: 1.167
          </MuiTypography>
        </Box>

        <Box sx={{ mb: 2 }}>
          <MuiTypography variant="h4" gutterBottom>
            H4 - Heading 4
          </MuiTypography>
          <MuiTypography variant="caption" color="textSecondary">
            variant="h4" • Font size: 34px • Font weight: 400 • Line height: 1.235
          </MuiTypography>
        </Box>

        <Box sx={{ mb: 2 }}>
          <MuiTypography variant="h5" gutterBottom>
            H5 - Heading 5
          </MuiTypography>
          <MuiTypography variant="caption" color="textSecondary">
            variant="h5" • Font size: 24px • Font weight: 400 • Line height: 1.334
          </MuiTypography>
        </Box>

        <Box sx={{ mb: 2 }}>
          <MuiTypography variant="h6" gutterBottom>
            H6 - Heading 6
          </MuiTypography>
          <MuiTypography variant="caption" color="textSecondary">
            variant="h6" • Font size: 20px • Font weight: 500 • Line height: 1.6
          </MuiTypography>
        </Box>
      </Paper>

      {/* SUBTITLES */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <MuiTypography variant="h4" gutterBottom color="secondary">
          Subtitles (Sottotitoli)
        </MuiTypography>
        <Divider sx={{ mb: 3 }} />

        <Box sx={{ mb: 2 }}>
          <MuiTypography variant="subtitle1" gutterBottom>
            Subtitle 1 - Sottotitolo grande
          </MuiTypography>
          <MuiTypography variant="caption" color="textSecondary">
            variant="subtitle1" • Font size: 16px • Font weight: 400 • Line height: 1.75
          </MuiTypography>
        </Box>

        <Box sx={{ mb: 2 }}>
          <MuiTypography variant="subtitle2" gutterBottom>
            Subtitle 2 - Sottotitolo piccolo
          </MuiTypography>
          <MuiTypography variant="caption" color="textSecondary">
            variant="subtitle2" • Font size: 14px • Font weight: 500 • Line height: 1.57
          </MuiTypography>
        </Box>
      </Paper>

      {/* BODY TEXT */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <MuiTypography variant="h4" gutterBottom color="secondary">
          Body Text (Corpo del testo)
        </MuiTypography>
        <Divider sx={{ mb: 3 }} />

        <Box sx={{ mb: 2 }}>
          <MuiTypography variant="body1" gutterBottom>
            Body 1 - Questo è il testo principale dell'applicazione. Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Utilizzato per paragrafi e contenuti principali.
          </MuiTypography>
          <MuiTypography variant="caption" color="textSecondary">
            variant="body1" • Font size: 16px • Font weight: 400 • Line height: 1.5
          </MuiTypography>
        </Box>

        <Box sx={{ mb: 2 }}>
          <MuiTypography variant="body2" gutterBottom>
            Body 2 - Testo secondario più piccolo. Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Utilizzato per contenuti meno importanti o descrizioni.
          </MuiTypography>
          <MuiTypography variant="caption" color="textSecondary">
            variant="body2" • Font size: 14px • Font weight: 400 • Line height: 1.43
          </MuiTypography>
        </Box>
      </Paper>

      {/* OTHER VARIANTS */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <MuiTypography variant="h4" gutterBottom color="secondary">
          Other Variants (Altre varianti)
        </MuiTypography>
        <Divider sx={{ mb: 3 }} />

        <Box sx={{ mb: 2 }}>
          <MuiTypography variant="button" gutterBottom>
            BUTTON TEXT
          </MuiTypography>
          <MuiTypography variant="caption" color="textSecondary" sx={{ display: 'block' }}>
            variant="button" • Font size: 14px • Font weight: 500 • Line height: 1.75 • Text transform: uppercase
          </MuiTypography>
        </Box>

        <Box sx={{ mb: 2 }}>
          <MuiTypography variant="caption" gutterBottom>
            Caption - Testo piccolo per didascalie e note
          </MuiTypography>
          <MuiTypography variant="caption" color="textSecondary" sx={{ display: 'block' }}>
            variant="caption" • Font size: 12px • Font weight: 400 • Line height: 1.66
          </MuiTypography>
        </Box>

        <Box sx={{ mb: 2 }}>
          <MuiTypography variant="overline" gutterBottom>
            Overline Text
          </MuiTypography>
          <MuiTypography variant="caption" color="textSecondary" sx={{ display: 'block' }}>
            variant="overline" • Font size: 12px • Font weight: 400 • Line height: 2.66 • Text transform: uppercase
          </MuiTypography>
        </Box>
      </Paper>

      {/* COLOR VARIANTS */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <MuiTypography variant="h4" gutterBottom color="secondary">
          Color Variants (Varianti di colore)
        </MuiTypography>
        <Divider sx={{ mb: 3 }} />

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <MuiTypography variant="h6" color="primary">
            Primary Color - color="primary"
          </MuiTypography>
          
          <MuiTypography variant="h6" color="secondary">
            Secondary Color - color="secondary"
          </MuiTypography>
          
          <MuiTypography variant="h6" color="textPrimary">
            Text Primary - color="textPrimary"
          </MuiTypography>
          
          <MuiTypography variant="h6" color="textSecondary">
            Text Secondary - color="textSecondary"
          </MuiTypography>
          
          <MuiTypography variant="h6" color="error">
            Error Color - color="error"
          </MuiTypography>

          <MuiTypography variant="h6" sx={{ color: '#00bcd4' }}>
            Custom Color - sx=&#123;&#123; color: '#00bcd4' &#125;&#125;
          </MuiTypography>
        </Box>
      </Paper>

      {/* ALIGNMENT */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <MuiTypography variant="h4" gutterBottom color="secondary">
          Text Alignment (Allineamento)
        </MuiTypography>
        <Divider sx={{ mb: 3 }} />

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <MuiTypography variant="body1" align="left">
            Left Aligned - align="left"
          </MuiTypography>
          
          <MuiTypography variant="body1" align="center">
            Center Aligned - align="center"
          </MuiTypography>
          
          <MuiTypography variant="body1" align="right">
            Right Aligned - align="right"
          </MuiTypography>
          
          <MuiTypography variant="body1" align="justify">
            Justified Text - align="justify" - Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </MuiTypography>
        </Box>
      </Paper>

      {/* SPECIAL PROPS */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <MuiTypography variant="h4" gutterBottom color="secondary">
          Special Props (Proprietà speciali)
        </MuiTypography>
        <Divider sx={{ mb: 3 }} />

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Box>
            <MuiTypography variant="h6" gutterBottom>
              With gutterBottom
            </MuiTypography>
            <MuiTypography variant="body2" color="textSecondary">
              gutterBottom={'{true}'} - Aggiunge margine inferiore
            </MuiTypography>
          </Box>

          <Box>
            <MuiTypography variant="h6">
              Without gutterBottom
            </MuiTypography>
            <MuiTypography variant="body2" color="textSecondary">
              gutterBottom={'{false}'} - Nessun margine inferiore
            </MuiTypography>
          </Box>

          <Box sx={{ maxWidth: 300, border: '1px dashed grey', p: 2 }}>
            <MuiTypography variant="body1" noWrap>
              This is a very long text that will be truncated with ellipsis when it overflows the container width
            </MuiTypography>
            <MuiTypography variant="caption" color="textSecondary">
              noWrap={'{true}'} - Tronca il testo con ellipsis (...)
            </MuiTypography>
          </Box>
        </Box>
      </Paper>

      {/* USE CASES */}
      <Paper elevation={2} sx={{ p: 3 }}>
        <MuiTypography variant="h4" gutterBottom color="secondary">
          Common Use Cases (Casi d'uso comuni)
        </MuiTypography>
        <Divider sx={{ mb: 3 }} />

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* Page Title */}
          <Box>
            <MuiTypography variant="overline" color="textSecondary">
              PAGE TITLE
            </MuiTypography>
            <MuiTypography variant="h3" gutterBottom color="primary">
              Dashboard Overview
            </MuiTypography>
            <MuiTypography variant="body2" color="textSecondary">
              Benvenuto nel tuo pannello di controllo
            </MuiTypography>
          </Box>

          {/* Card */}
          <Paper variant="outlined" sx={{ p: 2 }}>
            <MuiTypography variant="overline" color="textSecondary">
              CARD HEADER
            </MuiTypography>
            <MuiTypography variant="h6" gutterBottom>
              Titolo della Card
            </MuiTypography>
            <MuiTypography variant="body2" gutterBottom>
              Questo è il contenuto principale della card. Usa body2 per testi descrittivi.
            </MuiTypography>
            <MuiTypography variant="caption" color="textSecondary">
              Ultimo aggiornamento: 13 Marzo 2026
            </MuiTypography>
          </Paper>

          {/* List Item */}
          <Box>
            <MuiTypography variant="subtitle1" gutterBottom>
              Elemento della Lista
            </MuiTypography>
            <MuiTypography variant="body2" color="textSecondary">
              Descrizione secondaria dell'elemento
            </MuiTypography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default TypographyShowcase;