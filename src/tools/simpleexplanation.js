import { ViewListIcon } from "@heroicons/react/solid";

const obj = {
  title: "Simple Explanation of Terms",
  desc: "This is the simple explanation of coding based terms.",
  category: "Explainers",
  Icon: ViewListIcon,
  // tags: [],
  permissions: ["user"],

  fromColor: "gray-500",
  toColor: "gray-500",

  to: "/ai/simpleexplanation",
  api: "/ai/simpleexplanation",

  output: {
    title: "Answer",
    desc: "Accurate answer for the term you asked.",
    Icon: false,
    color: "blue",
  },

  prompts: [
    {
      title: "Input",
      desc: "Enter the term you want to look for",
      // n: 1,
      prompts: [
        {
          title: "Coding Term",
          attr: "content",
          value: "",
          placeholder: "Enter the term here... for e.g. Decentralized Finance",
          label: "",
          type: "textarea",
          maxLength: 100,
          // max: 100,
          min: 3,
          required: true,
          error: "",
          example: "Distributed Systems",
        },
      ],
      example: {
        output: `Hello World`,
        color: "blue",
      },
    },
  ],
};

export default obj;
