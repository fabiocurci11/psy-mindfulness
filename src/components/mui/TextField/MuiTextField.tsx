import React, { forwardRef } from 'react';
import { TextField, TextFieldProps, InputAdornment, CircularProgress } from '@mui/material';

export type MuiTextFieldProps = Omit<TextFieldProps, 'variant'> & {
  /** Variante: MUI supporta 'outlined' (default), 'filled', 'standard' */
  variant?: 'outlined' | 'filled' | 'standard';
  
  /** Icona all'inizio del campo */
  startIcon?: React.ReactNode;
  
  /** Icona alla fine del campo */
  endIcon?: React.ReactNode;
  
  /** Stato di caricamento (mostra uno spinner invece dell'icona finale) */
  loading?: boolean;
  
  /** Props per l'input slot (sostituisce InputProps deprecato) */
  slotPropsInput?: any;
};

const MuiTextField = forwardRef<HTMLInputElement, MuiTextFieldProps>(({
  variant = 'outlined',
  startIcon,
  endIcon,
  loading = false,
  slotPropsInput,
  sx = {},
  ...otherProps
}, ref) => {
  return (
    <TextField
      ref={ref}
      variant={variant}
      {...otherProps}
      slotProps={{
        input: {
          ...slotPropsInput,
          startAdornment: startIcon ? (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ) : slotPropsInput?.startAdornment,
          endAdornment: loading ? (
            <InputAdornment position="end">
              <CircularProgress size={20} color="inherit" />
            </InputAdornment>
          ) : endIcon ? (
            <InputAdornment position="end">{endIcon}</InputAdornment>
          ) : slotPropsInput?.endAdornment,
        },
      }}
      sx={{
        // Coerenza con il tuo sistema a 8px
        '& .MuiOutlinedInput-root': {
          borderRadius: 2, // 16px come i tuoi bottoni
        },
        ...sx,
      }}
    />
  );
});

MuiTextField.displayName = 'MuiTextField';

export default MuiTextField;