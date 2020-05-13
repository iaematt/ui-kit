import React from "react";
import { storiesOf } from "@storybook/react";

import { TextArea } from "../src";

storiesOf("Text Area", module).add("Default", () => (
  <div style={{ width: "450px" }}>
    <TextArea
      name="message"
      placeholder="Type your message..."
      numberOfLines={5}
    />
  </div>
));
