import React from "react";
import { storiesOf } from "@storybook/react";

import { Button } from "../src";

storiesOf("Form|Button", module)
  .add("Default", () => <Button color="#ffffff">Default</Button>)
  .add("Outlined", () => (
    <Button color="#ffffff" outlined>
      Outlined
    </Button>
  ))
  .add("Disabled", () => (
    <>
      <Button color="#ffffff" disabled>
        Disabled
      </Button>
      <br />
      <br />
      <Button color="#ffffff" outlined disabled>
        Disabled
      </Button>
    </>
  ));
