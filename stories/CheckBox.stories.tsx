import React, { useState } from "react";
import { storiesOf } from "@storybook/react";

import { CheckBox } from "../src";

storiesOf("CheckBox", module)
  .add("CheckBox Group", () => {
    const allOptions = [
      { id: 1, value: "Alpha" },
      { id: 2, value: "Beta" },
      { id: 3, value: "Production" },
      { id: 4, value: "Developer" },
      { id: 5, value: "I accept the terms of use" },
    ];

    const [options, setOptions] = useState([allOptions[4].id]);

    function toggleOption(id: number) {
      setOptions(
        options.includes(id)
          ? options.filter((option) => option !== id)
          : [...options, id]
      );
    }

    return (
      <form>
        {allOptions.map((item) => (
          <CheckBox
            name="checkbox"
            key={item.id}
            label={item.value}
            value={item.value}
            checked={options.includes(item.id)}
            onChange={() => toggleOption(item.id)}
          />
        ))}
      </form>
    );
  })
  .add("Checked", () => (
    <CheckBox
      name="checkbox"
      label="Checked"
      value="Checked"
      defaultChecked={true}
      readOnly
    />
  ))
  .add("Unchecked", () => (
    <CheckBox
      name="checkbox"
      label="Unchecked"
      value="Unchecked"
      checked={false}
      readOnly
    />
  ))
  .add("Disabled", () => (
    <>
      <CheckBox
        name="checkbox"
        label="Checked"
        value="Checked"
        checked={true}
        readOnly
        disabled
      />
      <CheckBox
        name="checkbox"
        label="Unchecked"
        value="Unchecked"
        checked={false}
        readOnly
        disabled
      />
    </>
  ));
