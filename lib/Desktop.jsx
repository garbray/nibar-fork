import { colors } from "./styles.jsx";
import run from "uebersicht";

const containerStyle = {
  display: "grid",
  gridAutoFlow: "column",
  gridGap: "12px",
  fontSize: "14px",
};

const iconClass = {
  1: "fa fa-terminal",
  2: "fab fa-firefox",
  3: "fab fa-slack-hash",
  4: "fab fa-spotify",
  5: "far fa-calendar",
  6: "fa fa-bookmark",
};
const iconBaseStyle = {
  padding: "4px",
  borderBottom: "2px solid transparent",
  lineHeight: "1 ",
};
const focusedStyle = {
  ...iconBaseStyle,
  borderBottom: `2px solid ${colors.pink}`,
  color: `${colors.pink}`,
};

const GetIcon = ({ index, focused }) => {
  const isFocused = focused == 1 ? focusedStyle : iconBaseStyle;
  const iconStr = iconClass[index] || "";

  return (
    <i key={index} className={iconStr} style={isFocused}>
      {iconStr === "" && index}
    </i>
  );
};

const renderSpace = (index, focused) => {
  return <GetIcon index={index} focused={focused} />;
};

const render = ({ output }) => {
  if (typeof output === "undefined") return null;

  const spaces = [];

  output.forEach(function (space) {
    spaces.push(renderSpace(space.index, space.focused));
  });

  return <div style={containerStyle}>{spaces}</div>;
};

export default render;
