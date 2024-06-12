//extending MUI themes to support the custom defined themes
/* @ts-expect-error unused variable */
import { Palette, PaletteColor } from "@mui/material/styles/createPalette"; // eslint-disable-line @typescript-eslint/no-unused-vars

declare module "@mui/material/styles/createPalette" {
  interface PaletteColor {
    [key: number]: string;
  }
  interface Palette {
    tertiary: PaletteColor;
  }
}
