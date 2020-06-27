import styles from "./styles.jsx";

const getBatteryLifeClass = (percentage) => {
  switch (true) {
    case percentage < 15:
      return {
        color: styles.colors.red,
        icon: "fa fa-battery-empty",
      };
    case percentage < 30:
      return {
        color: styles.colors.orange,
        icon: "fa fa-battery-quarter",
      };
    case percentage < 50:
      return {
        color: styles.colors.yellow,
        icon: "fa fa-battery-half",
      };
    case percentage < 90:
      return {
        color: styles.colors.cyan,
        icon: "fa fa-battery-three-quarters",
      };
    case percentage > 90:
      return {
        color: styles.colors.green,
        icon: "fa fa-battery-full",
      };
  }
};
const chargingState = {
  color: styles.colors.pink,
  icon: "fa fa-bolt",
};

const BatteryLife = ({ state }) => {
  return <i className={state.icon} style={{ color: state.color }}></i>;
};

const render = ({ output }) => {
  let { charging: isCharging, percentage } = output;
  let state = isCharging ? chargingState : getBatteryLifeClass(percentage);

  return (
    <div>
      <span style={{ color: state.color }}>
        <BatteryLife state={state} />
        {isCharging ? "" : null} {percentage}%
      </span>
    </div>
  );
};

export default render;
