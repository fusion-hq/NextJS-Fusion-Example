import React, { useEffect } from "react";
import Page from "../components/Page";
import Event from "../components/Event";
import fusion from "fusion-analytics-js";

export default () => {
  return (
    <Page>
      <h1>This is the contact page</h1>
      <Event></Event>
      <a href="#">Hello</a>
    </Page>
  );
};
