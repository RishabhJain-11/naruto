import { ViewListIcon } from "@heroicons/react/solid";

const obj = {
  title: "Optimization of Code",
  desc: "This is the optimization of the code given.",
  category: "Programming",
  Icon: ViewListIcon,
  // tags: [],
  permissions: ["user"],

  fromColor: "gray-500",
  toColor: "gray-500",

  to: "/ai/codeoptimizer",
  api: "/ai/codeoptimizer",

  output: {
    title: "Answer",
    desc: "Optimized version of the code you asked.",
    Icon: false,
    color: "blue",
  },

  prompts: [
    {
      title: "Input",
      desc: "Enter the code block you want to optimize",
      // n: 1,
      prompts: [
        {
          title: "Code Block",
          attr: "content",
          value: "",
          placeholder: "Enter the code here...",
          label: "",
          type: "textarea",
          maxLength: 10000,
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
