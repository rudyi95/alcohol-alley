import { createTheme } from "@mui/material/styles";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    info2: true;
    info3: true;
    info4: true;
    body3: true;
    body4: true;
    body5: true;
    input: true;
    links: true;
    smallLinks: true;
    labels: true;
    smallLabels: true;
    button: true;
    h7: true;
    h8: true;
    h9: true;
    subtitle3: true;
    subtitle4: true;
    subtitle5: true;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
    verified: Palette["primary"];
    textPrimary: Palette["primary"];
    textSecondary: Palette["primary"];
    textSecondary2: Palette["primary"];
    textSecondary3: Palette["primary"];
    textSecondary4: Palette["primary"];
    textSecondary5: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
    verified?: PaletteOptions["primary"];
    textPrimary?: PaletteOptions["primary"];
    textSecondary?: PaletteOptions["primary"];
    textSecondary2?: PaletteOptions["primary"];
    textSecondary3?: PaletteOptions["primary"];
    textSecondary4?: PaletteOptions["primary"];
    textSecondary5?: PaletteOptions["primary"];
  }

  interface PaletteColor {
    [800]?: string;
    [700]?: string;
    [600]?: string;
    [500]?: string;
    [502]?: string;
    [400]?: string;
    [300]?: string;
    [200]?: string;
    [100]?: string;
  }
  interface SimplePaletteColorOptions {
    [800]?: string;
    [700]?: string;
    [600]?: string;
    [500]?: string;
    [502]?: string;
    [400]?: string;
    [300]?: string;
    [200]?: string;
    [100]?: string;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    verified: true;
  }
  interface ButtonPropsSizeOverrides {
    XL: true;
    LG: true;
    LG_MD: true;
    LG_SM: true;
    LG_MD_SM: true;
    MD: true;
    SM: true;
    XS: true;
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
  },
});
