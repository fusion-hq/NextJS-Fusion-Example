import * as React from "react";
import fusion from "fusion-analytics-js";

export default () => {
  React.useEffect(() => {
    fusion.init(
      "<YOUR_FUSION_TOKEN>",
      "https://fusion-event-collector.herokuapp.com",
      true
    );
  }, []);

  return <button>Hello there</button>;
};
