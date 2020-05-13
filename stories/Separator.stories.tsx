import React from "react";
import { storiesOf } from "@storybook/react";

import { Separator } from "../src";

storiesOf("Separator", module).add("Default", () => (
  <div style={{ width: "350px" }}>
    <Separator />
  </div>
));
