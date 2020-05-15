import React, { useState } from "react";
import { storiesOf } from "@storybook/react";

import { Radio } from "../src";

storiesOf("Form|Radio Group", module)
  .add("Default", () => {
    const options = [
      { id: 1, value: "Easy" },
      { id: 2, value: "Normal" },
      { id: 3, value: "Hard" },
      { id: 4, value: "Very Hard" },
      { id: 5, value: "Extreme please" },
    ];

    const [option, setOption] = useState(options[1].id);

    return (
      <form>
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
      </form>
    );
  })
  .add("Checked", () => (
    <Radio
      label="Checked"
      value="Checked"
      name="radio"
      defaultChecked={true}
      readOnly
    />
  ))
  .add("Unchecked", () => (
    <Radio
      label="Unchecked"
      value="Unchecked"
      name="radio"
      checked={false}
      readOnly
    />
  ))
  .add("Disabled", () => (
    <>
      <Radio
        label="Checked disabled"
        value="Checked disabled"
        name="radio"
        checked={true}
        disabled
      />
      <Radio
        label="Unchecked disabled"
        value="Unchecked disabled"
        name="radio"
        checked={false}
        disabled
      />
    </>
  ));
