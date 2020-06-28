import { styles } from "./styles.jsx";

const state = {
  connected: {
    icon: "fa fa-wifi",
    color: styles.colors.foreground,
  },
  inactive: {
    icon: "fa fa-minus-square",
    color: styles.colors.red,
  },
};

const IconWifi = ({ ssid = "", status }) => {
  const currentState = status === "inactive" ? state.inactive : state.connected;
  return (
    <div title={ssid}>
      <i
        className={currentState.icon}
        style={{ color: currentState.color }}
      ></i>
    </div>
  );
};

const render = ({ output }) => {
  if (typeof output === "undefined") return null;
  const { status, ssid } = output;
  return <IconWifi status={status} ssid={ssid} />;
};

export default render;
