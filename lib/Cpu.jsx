import { styles } from "./styles.jsx";
const iconStyle = {
  fontSize: "10px",
  padding: "4px",
};

const render = ({ output }) => {
  if (typeof output === "undefined") return null;
  return (
    <div style={output.loadAverage > 3 ? { color: styles.colors.red } : null}>
      <span>
        <span className="fa fa-laptop" style={iconStyle}></span>
        {output.loadAverage}
      </span>
    </div>
  );
};

export default render;
