import { styles } from "./lib/styles.jsx";

const style = {
  background: styles.colors.bg,
  cursor: "default",
  userSelect: "none",
  zIndex: "-1",
  width: "100%",
  height: "25px",
  position: "fixed",
  overflow: "hidden",
  top: "0px",
  right: "0px",
  left: "0px",
};

console.log(styles);
export const refreshFrequency = 1000000;

export const render = ({ output }) => {
  console.log(styles);
  return <div style={style} />;
};

export default null;
