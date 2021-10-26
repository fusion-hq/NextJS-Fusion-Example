import React, { useEffect } from "react";
import Page from "../components/Page";
import fusion from "fusion-analytics-js";

export default () => {
  useEffect(() => {
    fusion.init(
      "<YOUR_FUSION_TOKEN>",
      "https://fusion-event-collector.herokuapp.com",
      true
    );
    fusion.track("next-js-test", { test_property: "test" });
    fusion.register({ ice_cream: "vanilla-chocolate" });
    fusion.track("icecream");
    fusion.unregister("ice_cream");
    fusion.track("no-icecream");
    fusion.track("Pageview");
  }, []);

  return (
    <Page>
      <h1>This is the home page</h1>
    </Page>
  );
};
