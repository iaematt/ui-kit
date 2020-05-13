import React from "react";
import { storiesOf } from "@storybook/react";

import { MdPerson, MdLock } from "react-icons/md";

import { Input } from "../src";

storiesOf("Input", module)
  .add("Default", () => (
    <form autoComplete="off">
      <Input name="search" placeholder="Search..." />
    </form>
  ))
  .add("With Icon", () => (
    <form autoComplete="off">
      <Input
        name="password"
        icon={<MdLock />}
        placeholder="Your secret password"
        type="password"
      />
    </form>
  ));
