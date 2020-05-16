import { configure, addParameters, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import centered from "@storybook/addon-centered/react";
import ReactGA from "react-ga";

import theme from "./theme";
import "./reset.css";

ReactGA.initialize("UA-68805727-2");
ReactGA.pageview("/ui-kit");

addParameters({
  options: {
    theme,
  },
});

addDecorator(withInfo);
addDecorator(centered);

configure(require.context("../stories", true, /\.stories\.tsx$/), module);
