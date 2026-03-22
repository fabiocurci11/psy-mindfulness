import React from 'react';
import { 
  Container, 
  Stack, 
  Typography, 
  TextField, 
  Button, 
  Box, 
  Link 
} from '@mui/material';
import MuiButton from '@/components/mui/Button/MuiButton';

const LoginScreen = () => {
  return (
    /* 1. CONTAINER: Gestisce i margini laterali di 16px (px: 2) */
    <Container maxWidth="xs" sx={{ px: 2, pt: 8 }}>
      
      {/* 2. STACK: Gestisce lo spazio verticale tra i blocchi principali (32px = spacing 4) */}
      <Stack spacing={4}>
        
        {/* Intestazione */}
        <Box>
          <Typography variant="h4" component="h1" fontWeight="700" gutterBottom>
            Bentornato
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Accedi per continuare il tuo progetto
          </Typography>
        </Box>

        {/* 3. FORM STACK: Spazio più stretto tra i campi input (16px = spacing 2) */}
        <Stack spacing={2}>
          <TextField 
            label="Email" 
            variant="outlined" 
            fullWidth 
            type="email" 
          />
          <TextField 
            label="Password" 
            variant="outlined" 
            fullWidth 
            type="password" 
          />
          <Box sx={{ textAlign: 'right' }}>
            <Link href="#" variant="body2" underline="hover">
              Password dimenticata?
            </Link>
          </Box>
        </Stack>

        {/* 4. AZIONI: Pulsante che occupa tutte le 4 colonne (fullWidth) */}
        <Stack spacing={2}>
          <Button 
            variant="contained" 
            size="large" 
            fullWidth 
            sx={{ py: 1.5, borderRadius: 2 }}
          >
            Accedi
          </Button>

           <MuiButton 
            variant="contained" 
            color="primary"
            size='large'
            >
              Accedii
            </MuiButton>
          <Button 
            variant="outlined" 
            size="large" 
            fullWidth
          >
            Crea Account
          </Button>
        </Stack>

      </Stack>
    </Container>
  );
};

export default LoginScreen;