import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteColor {
    background?: string;
  }
  interface SimplePaletteColorOptions {
    background?: string;
  }
  interface Palette {
    barbora: Palette['primary'];
    patrik: Palette['primary'];
  }
  interface PaletteOptions {
    barbora?: PaletteOptions['primary'];
    patrik?: PaletteOptions['primary'];
  }
}
