import React, { useState } from "react";
import { storiesOf } from "@storybook/react";

import { MdLock, MdMail } from "react-icons/md";

import { Input } from "../src";

storiesOf("Form|Input", module)
  .add("Default", () => {
    const [value, setValue] = useState("");

    return (
      <form autoComplete="off">
        <Input
          name="search"
          placeholder="Search..."
          value={value}
          setValue={setValue}
        />
      </form>
    );
  })
  .add("With Icon", () => {
    const [value, setValue] = useState("");

    return (
      <form autoComplete="off">
        <Input
          name="password"
          icon={<MdLock />}
          placeholder="Your secret password"
          type="password"
          required
          value={value}
          setValue={setValue}
        />
      </form>
    );
  })
  .add("Disabled", () => {
    const [value, setValue] = useState("your@server.com");

    return (
      <form autoComplete="off">
        <Input
          name="email"
          icon={<MdMail />}
          placeholder="your@server.com"
          type="email"
          value={value}
          setValue={setValue}
          disabled
        />
      </form>
    );
  });
