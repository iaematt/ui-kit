import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { MdSearch, MdError } from "react-icons/md";

import {
  Bar,
  Button,
  Input,
  Modal,
  Notification,
  Radio,
  Separator,
  Spinner,
  CheckBox,
  TextArea,
  Code,
} from "../src";

storiesOf("Appearances", module).add("Default", () => {
  const [open, setOpen] = useState(false);
  const options = [
    { id: 1, value: "Easy" },
    { id: 2, value: "Normal" },
    { id: 3, value: "Hard" },
  ];
  const [option, setOption] = useState(options[0].id);

  const allOptions = [
    { id: 1, value: "Beta" },
    { id: 2, value: "Production" },
    { id: 3, value: "I accept the terms of use" },
  ];
  const [checkeds, setCheckeds] = useState([allOptions[2].id]);

  function toggleOption(id: number) {
    setCheckeds(
      checkeds.includes(id)
        ? checkeds.filter((checked) => checked !== id)
        : [...checkeds, id]
    );
  }

  return (
    <div style={{ width: "550px", display: "flex", flexDirection: "column" }}>
      <Spinner />

      <Separator />

      <div style={{ marginBottom: "10px" }}>
        <Notification>Testing the notification.</Notification>
      </div>
      <Notification icon={<MdError />} backgroundColor="#bf392e">
        Testing the notification with icon.
      </Notification>

      <Separator />

      <Code>
        # first see project in browser{`\n`}$ yarn start{`\n`}
        {`\n`}# build your project
        {`\n`}$ yarn build
      </Code>

      <Separator />

      <div style={{ marginBottom: "10px" }}>
        <Bar size={50} />
      </div>
      <Bar size={100} color="#2d8a46" />

      <Separator />

      <form
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridGap: "4px",
          marginBottom: "10px",
        }}
        autoComplete="off"
      >
        <Input name="search" placeholder="Search..." />
        <Input name="search" placeholder="Search..." icon={<MdSearch />} />
      </form>

      <div
        style={{
          width: "100%",
          marginBottom: "15px",
        }}
      >
        <TextArea name="message" placeholder="Type your message..." />
      </div>

      <div
        style={{
          marginBottom: "15px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            marginRight: "30px",
          }}
        >
          {options.map((item) => (
            <Radio
              name="radio"
              key={item.id}
              label={item.value}
              value={item.value}
              checked={option === item.id}
              onChange={() => setOption(Number(item.id))}
            />
          ))}
        </div>
        <div>
          {allOptions.map((item) => (
            <CheckBox
              name="checkbox"
              key={item.id}
              label={item.value}
              value={item.value}
              checked={checkeds.includes(item.id)}
              onChange={() => toggleOption(item.id)}
            />
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <Button>Default</Button>
        <Button outlined onClick={() => setOpen(true)}>
          Open Modal
        </Button>
        <Button disabled>Desabled</Button>
      </div>

      <Modal title="Title" open={open} setOpen={setOpen}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Modal>
    </div>
  );
});
