import { createTheme } from '@mui/material/styles';

export const mainTheme = createTheme({
  typography: {
      fontFamily: 'inherit',
      fontSize: 12,
  },
  
  palette: {
      background: {
          default: '#f6f9ff'
      },
      primary: {
        main: '#012970'
      },
      secondary: {
        main: '#19857b'
      },
      success: {
        main: 'rgb(100, 235, 100)',
      },
      text: {
        primary: '#2d3644'
      },
      error: {
        main: 'rgb(255, 150, 150)',
      },
      warning: {
        main: 'rgb(255, 180, 50)',
      }

  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          boxShadow: '0 0 10px 2px rgba(25, 25, 50, 0.1)'
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          boxShadow: '0 0 10px 2px rgba(25, 25, 50, 0.1)'
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          fontSize: 15,
          fontWeight: 600,
          color: 'rgb(0,0,80)',
        },
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 30,
          color: 'rgba(0, 0, 100, 0.4)'
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontSize: 13,
          fontWeight: 600,
          backgroundColor: 'white',
        },
      }
    },
    MuiCard: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          marginBottom: '8px',
          paddingBottom: '0px',
          borderRadius: 2,
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          height: 38,
        },
        select: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
      defaultProps: {
        MenuProps: {
          slotProps: {
            paper: {
              sx: {
                maxHeight: 220,
              }
            },
          }
        }
      }
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: "0.5rem",
          backgroundColor: "transparent",
        },
        list: {
          width: '100%',
        }
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          display: "flex",
          alignItems: "center",
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "rgb(150, 150, 150)",
        }
      }
    }
  }
});
  