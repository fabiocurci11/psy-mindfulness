import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Toolbar,
  Box,
  DrawerProps,
} from '@mui/material';

export interface MuiDrawerItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  divider?: boolean; // Aggiunge un divider dopo questo item
}

export interface MuiDrawerProps {
  open: boolean;
  onClose?: () => void;
  items: MuiDrawerItem[];
  variant?: DrawerProps['variant']; // 'permanent' | 'persistent' | 'temporary'
  anchor?: DrawerProps['anchor']; // 'left' | 'right' | 'top' | 'bottom'
  width?: number | string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  selectedItemId?: string;
  sx?: DrawerProps['sx'];
}

//component
const MuiDrawer: React.FC<MuiDrawerProps> = ({
  open,
  onClose,
  items,
  variant = 'permanent',
  anchor = 'left',
  width = 240,
  header,
  footer,
  selectedItemId,
  sx = {},
}) => {
  return (
    <Drawer
      variant={variant}
      anchor={anchor}
      open={open}
      onClose={onClose}
      sx={{
        width: width,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: width,
          boxSizing: 'border-box',
        },
        ...sx,
      }}
    >
      {/* Header opzionale */}
      {header && (
        <Box sx={{ p: 2 }}>
          {header}
        </Box>
      )}

      {/* Toolbar spacer (per allineare con AppBar se presente) */}
      {variant === 'permanent' && <Toolbar />}

      {/* Lista degli items */}
      <Box sx={{ overflow: 'auto', flexGrow: 1 }}>
        <List>
          {items.map((item) => (
            <React.Fragment key={item.id}>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={item.onClick}
                  disabled={item.disabled}
                  selected={selectedItemId === item.id}
                >
                  {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
              {item.divider && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Box>

      {/* Footer opzionale */}
      {footer && (
        <Box sx={{ p: 2, mt: 'auto' }}>
          {footer}
        </Box>
      )}
    </Drawer>
  );
};

export default MuiDrawer;