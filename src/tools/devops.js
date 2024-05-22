import { ViewListIcon } from "@heroicons/react/solid";

const obj = {
  title: "Simple Explanation of Dev-Ops Terms",
  desc: "Gives Explanation and Step-by-Step process for a Dev-Ops tool.",
  category: "Programming",
  Icon: ViewListIcon,
  // tags: [],
  permissions: ["user"],

  fromColor: "gray-500",
  toColor: "gray-500",

  to: "/ai/devops",
  api: "/ai/devops",

  output: {
    title: "Answer",
    desc: "Step wise answer for the tool",
    Icon: false,
    color: "blue",
  },

  prompts: [
    {
      title: "Input",
      desc: "Enter the what you want to look for a tool",
      // n: 1,
      prompts: [
        {
          title: "Description",
          attr: "content",
          value: "",
          placeholder: "Enter your query... for e.g. .Give me Detailed explanation for ...",
          label: "",
          type: "textarea",
          maxLength: 10000,
          // max: 100,
          min: 3,
          required: true,
          error: "",
          example: "Distributed Systems",
        },{
            title: "Tool Name",
            attr: "tool",
            value: "",
            placeholder: "Enter your tool name... for e.g. Kubernetes",
            label: "",
            // type: "textarea",
            maxLength: 1000,
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
