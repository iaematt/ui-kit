import React from "react";
import { storiesOf } from "@storybook/react";

import { Bar } from "../src";

storiesOf("Bar", module).add("Default", () => (
  <div style={{ width: "450px" }}>
    <Bar size={50} />
    <br />
    <Bar size={80} color="#bf392e" />
    <br />
    <Bar size={100} color="#2d8a46" />
    <br />
    <Bar size={20} color="#eeeeee" />
  </div>
));
