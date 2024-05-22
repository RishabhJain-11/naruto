import React from "react";
import { ViewListIcon } from "@heroicons/react/solid";

const obj = {
  title: "Terminal / Console Error Detections",
  desc: "Detect errors easily with the help of this Error Detection Platform, be it any form of error.",
  category: "Programming",
  Icon: ViewListIcon,
  // tags: [],
  permissions: ["user"],

  fromColor: "gray-500",
  toColor: "gray-500",

  to: "/ai/texterrordetection",
  api: "/ai/texterrordetection",

  output: {
    title: "Answer / Solution",
    desc: "This is the solution for your query.",
    Icon: false,
    color: "blue",
  },

  prompts: [
    {
      title: "Enter the Error Text",
      desc: "Copy the complete the error and paste it in the Description Box.",
      // n: 1,
      prompts: [
        {
          title: "Content",
          attr: "content",
          value: "",
          placeholder: "Error Text will be here...",
          label: "",
          type: "textarea",
          maxLength: 6000,
          // max: 100,
          min: 3,
          required: true,
          error: "",
          example: "Hello World ",
        },
      ],
      example: {
        output: `The error messages and warnings you're seeing can be broken down into two main issues:
        Environment Variables Not Overwritten by dotenv-flow.
        The messages dotenv-flow: 'VARIABLE_NAME' is already defined in process.env and will not be overwritten indicate that the environment variables are already set in the process.env and dotenv-flow will not overwrite them. This usually happens when environment variables are already defined in your system environment or a previous configuration file.`,
        color: "blue",
      },
    },
  ],
};
export default obj;
