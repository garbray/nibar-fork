import Desktop from "./lib/Desktop.jsx";
import Error from "./lib/Error.jsx";
import parse from "./lib/parse.jsx";
import { styles } from "./lib/styles.jsx";

export const refreshFrequency = false;
export const command = "./nibar/scripts/spaces_primary.sh";

export const render = ({ output }) => {
  const data = parse(output);

  console.log(styles.spaceStyle);
  if (typeof data === "undefined") {
    return (
      <div style={styles.spaceStyle}>
        <Error msg="Error: unknown script output" side="left" />
      </div>
    );
  }
  if (typeof data.error !== "undefined") {
    return (
      <div style={styles.spaceStyle}>
        <Error msg={`Error: ${data.error}`} side="left" />
      </div>
    );
  }
  return (
    <div style={styles.spaceStyle}>
      <link
        rel="stylesheet"
        type="text/css"
        href="nibar/assets/font-awesome/css/all.css"
      />
      <Desktop output={data.spaces_primary} />
    </div>
  );
};

export default null;
