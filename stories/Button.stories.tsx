import React from "react";
import { storiesOf } from "@storybook/react";

import { Button } from "../src";

storiesOf("Form|Button", module)
  .add("Default", () => <Button>Default</Button>)
  .add("Outlined", () => <Button outlined>Outlined</Button>)
  .add("Disabled", () => <Button disabled>Disabled</Button>);
