import { fn } from "@storybook/test";
import React, { useState } from "react";
import { Requirements } from "../components/Requirements";
import "./styles/requirements.css";

export default {
  title: "Example/Requirements",
  component: Requirements,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

const RequirementStory = () => {
  const [valid, setValid] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const passwordRequirements = [
    {
      text: "Must be at least 8 characters",
      validator: (val) => val.length >= 8,
    },
    {
      text: "Must contain at least one number",
      validator: (val) => /\d/g.test(val),
    },
    {
      text: "Must contain at least one lower-case letter",
      validator: (val) => /[a-z]/g.test(val),
    },
    {
      text: "Must contain at least one upper-case letter",
      validator: (val) => /[A-Z]/g.test(val),
    },
  ];

  return (
    <div className="form">
      <h1>Signup</h1>

      <Requirements
        value={password}
        requirements={passwordRequirements}
        onValidChange={(isValid) => setValid(isValid)}
      />

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button disabled={!valid || !username}>Sign Up</button>
    </div>
  );
};
export const Primary = {
  render: () => <RequirementStory />,
};
