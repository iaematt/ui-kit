// prettier-ignore

import React from "react";
import { storiesOf } from "@storybook/react";

import { Code } from "../src";

storiesOf("Code Block", module).add("Default", () => (
  <div style={{ width: "450px" }}>
    <Code>
      # first see project in browser{`\n`}$ yarn start{`\n`}
      {`\n`}# build your project
      {`\n`}$ yarn build
    </Code>

    <br />

    <Code backgroundColor="#eeeeee">
      # first create project{`\n`}$ yarn create react-app my-app
      {`\n`}
      {`\n`}# access the folder
      {`\n`}$ cd my-app
      {`\n`}
      {`\n`}# see project in browser
      {`\n`}$ yarn start
    </Code>
  </div>
));
