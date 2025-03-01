export const brandColors = {
  black: "#0E0C0A",
  white: "#FFFFFF",
  lighterBlack: "#3D3D3C",
  lightPink: "#FFF0F5",
  mediumPink: "#FFD1DC",
  deepPink: "#FFB6C1",
};

export const themeColors = {
  dark: {},
  light: {},
};

export const borderRadii = {
  xxs: 4,
  xs: 6,
  sm: 8,
  md: 10,
  lg: 12,
  xl: 14,
  xxl: 16,
};

export const inputStyles = () => ({
  borderRadius: "5px",
  bg: "rgba(255, 255, 255, 0.8) !important",
  borderWidth: "1.5px",
  p: "10px 15px",
  cursor: "pointer",
  w: "100%",
  fontSize: "1rem",
  boxShadow: "#333 0px 0px 2px",
  // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  _focus: {
    outline: "none",

    bg: "rgba(255, 255, 255, 100) !important",
  },

  // borderColor: `${borderColor} !important`,
});
