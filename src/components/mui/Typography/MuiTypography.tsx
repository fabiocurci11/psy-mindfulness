import React from 'react';
import { Typography, TypographyProps } from '@mui/material';

// Esporta i tipi per riutilizzo
export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'button'
  | 'caption'
  | 'overline';

export type TypographyColor =
  | 'initial'
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'textPrimary'
  | 'textSecondary'
  | 'error'
  | string;

export type TypographyAlign = 'inherit' | 'left' | 'center' | 'right' | 'justify';

// Esporta l'interfaccia delle props
export interface MuiTypographyProps extends Omit<TypographyProps, 'variant' | 'color' | 'align'> {
  variant?: TypographyVariant;
  color?: TypographyColor;
  align?: TypographyAlign;
  gutterBottom?: boolean;
  noWrap?: boolean;
  children: React.ReactNode;
}

const MuiTypography: React.FC<MuiTypographyProps> = ({
  variant = 'body1',
  color = 'textPrimary',
  align = 'inherit',
  gutterBottom = false,
  noWrap = false,
  children,
  sx = {},
  ...otherProps
}) => {
  return (
    <Typography
      variant={variant}
      color={color}
      align={align}
      gutterBottom={gutterBottom}
      noWrap={noWrap}
      sx={sx}
      {...otherProps}
    >
      {children}
    </Typography>
  );
};

export default MuiTypography;