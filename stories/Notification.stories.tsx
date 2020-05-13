import React, { useEffect, useState } from "react";
import { storiesOf } from "@storybook/react";

import { MdInfo, MdHighlightOff } from "react-icons/md";

import { Notification } from "../src";

storiesOf("Notification", module)
  .add("Default", () => {
    const [show, setShow] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setShow(false);
      }, 5000);
    }, []);

    return (
      <div style={{ width: "450px" }}>
        <Notification>Testing the notification.</Notification>

        <br />

        {show && (
          <Notification backgroundColor="#bf392e">
            Testing error notification with icon.
          </Notification>
        )}
      </div>
    );
  })
  .add("With Icon", () => (
    <div style={{ width: "450px" }}>
      <Notification icon={<MdInfo />}>Testing the notification.</Notification>
      <br />
      <Notification icon={<MdHighlightOff />} backgroundColor="#bf392e">
        Testing error notification.
      </Notification>
    </div>
  ));
