import React from 'react';
import { Container, SxProps, Theme } from '@mui/material';

export interface PageContainerProps {
  children: React.ReactNode;
  /**
   * Max width per il Container (Mui)
   * - 'xs'    => 444px
   * - 'sm'    => 600px
   * - 'md'    => 900px
   * - 'lg'    => 1200px
   * - 'xl'    => 1536px
   * - false   => larghezza 100% (senza max-width)
   */
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  verticalPadding?: number;    // Padding verticale (top/bottom)
  horizontalPadding?: number;  // Padding orizzontale (left/right)
  sx?: SxProps<Theme>;
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  maxWidth = 'xl',
  verticalPadding = 3,
  horizontalPadding = 2, 
  sx = {}
}) => {
  return (
    <Container
      maxWidth={maxWidth}
      sx={{
        border: '1px dashed #00ff2a',
        px: verticalPadding,     // Padding verticale globale
        py: horizontalPadding,   // Padding orizzontale globale
        ...sx
      }}
    >
      {children}
    </Container>
  );
};

export default PageContainer;