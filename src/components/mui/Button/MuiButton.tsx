import React from 'react';
import { Button, ButtonProps, CircularProgress } from '@mui/material';

export interface MuiButtonProps extends Omit<ButtonProps, 'variant' | 'color' | 'size'> {
  /** Variante del bottone */
  variant?: 'text' | 'contained' | 'outlined';
  
  /** Colore del bottone */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | 'inherit';
  
  /** Dimensione del bottone */
  size?: 'small' | 'medium' | 'large';
  
  /** Testo o contenuto del bottone */
  children: React.ReactNode;
  
  /** Icona a sinistra del testo */
  startIcon?: React.ReactNode;
  
  /** Icona a destra del testo */
  endIcon?: React.ReactNode;
  
  /** Bottone disabilitato */
  disabled?: boolean;
  
  /** Bottone in stato di caricamento */
  loading?: boolean;
  
  /** Bottone a larghezza completa */
  fullWidth?: boolean;
  
  /** Rimuove l'elevazione (solo per variant="contained") */
  disableElevation?: boolean;
  
  /** Handler del click */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  
  /** Stili personalizzati */
  sx?: ButtonProps['sx'];
}

const MuiButton: React.FC<MuiButtonProps> = ({
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  children,
  startIcon,
  endIcon,
  disabled = false,
  loading = false,
  fullWidth = false,
  disableElevation = false,
  onClick,
  sx = {},
  ...otherProps
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      startIcon={loading ? undefined : startIcon}
      endIcon={loading ? undefined : endIcon}
      disabled={disabled || loading}
      fullWidth={fullWidth}
      disableElevation={disableElevation}
      onClick={onClick}
      sx={{
        position: 'relative',
        py: 1.5, 
        borderRadius: 2,
        ...sx,
      }}
      {...otherProps}
    >
      {loading && (
        <CircularProgress
          size={20}
          sx={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            marginLeft: '-10px',
            marginTop: '-10px',
          }}
        />
      )}
      <span style={{ visibility: loading ? 'hidden' : 'visible' }}>
        {children}
      </span>
    </Button>
  );
};

export default MuiButton;