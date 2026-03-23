import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer,
  Toolbar,
} from '@mui/material';
    

export interface PermanentSidebarItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  divider?: boolean;
}

interface PermanentSidebarProps {
  items?: PermanentSidebarItem[];
  selectedItemId?: string;
  width?: number;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

const PermanentSidebar: React.FC<PermanentSidebarProps> = ({
  items = [],
  selectedItemId,
  width = 240,
  header,
  footer,
}) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: width,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: width,
          boxSizing: 'border-box',
        },
      }}
    >
      {/* Toolbar spacer per allineare con AppBar */}
      <Toolbar />

      {/* Header opzionale */}
      {header && (
        <Box sx={{ p: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
          {header}
        </Box>
      )}

      {/* Lista items */}
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
        <Box sx={{ p: 2, mt: 'auto', borderTop: '1px solid', borderColor: 'divider' }}>
          {footer}
        </Box>
      )}
    </Drawer>
  );
};

export default PermanentSidebar;