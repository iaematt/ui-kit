import React, { useState } from "react";
import { storiesOf } from "@storybook/react";

import { TextArea } from "../src";

storiesOf("Form|Text Area", module)
  .add("Default", () => {
    const [value, setValue] = useState("");

    return (
      <div style={{ width: "450px" }}>
        <TextArea
          name="message"
          placeholder="Type your message..."
          numberOfLines={5}
          value={value}
          setValue={setValue}
          resize="none"
        />
      </div>
    );
  })
  .add("Disabled", () => {
    const [value, setValue] = useState("Your message here!");

    return (
      <div style={{ width: "450px" }}>
        <TextArea
          name="message"
          placeholder="Type your message..."
          numberOfLines={5}
          value={value}
          setValue={setValue}
          resize="none"
          disabled
        />
      </div>
    );
  });
