export const fontsSetup = {
  fontSize: "14px",
  lineHeight: "22px",
  fontFamily: "'Iosevka Custom Extended', 'SF Mono', monospace",
  fontWeight: "bold",
};

export const colors = {
  fg: "rgba(255,255,255,0.8)",
  dim: "rgba(255,255,255,0.6)",
  bg: "#1c1c1c",
  //red: "#ff8700",
  accent: "#5fafaf",
  purple: "#bd93f9",
  background: "#282a36",
  currentLine: "#44475a",
  foreground: "#f8f8f2",
  comment: "#6272a4",
  cyan: "#8be9fd",
  green: "#50fa7b",
  orange: "#ffb86c",
  pink: "#ff79c6",
  red: "#ff5555",
  yellow: "#f1fa8c",
};

export const styles = {
  ...fontsSetup,
  colors,
  spaceStyle: {
    padding: "0 10px",
    display: "grid",
    gridAutoFlow: "column",
    gridGap: "20px",
    position: "fixed",
    overflow: "hidden",
    left: "0px",
    top: "0px",
    color: colors.dim,
    ...fontsSetup,
  },
};
