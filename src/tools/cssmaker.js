import { ViewListIcon } from "@heroicons/react/solid";

const obj = {
  title: "CSS Helper",
  desc: "This helps you in the Designing and Frontend Part",
  category: "Programming",
  Icon: ViewListIcon,
  // tags: [],
  permissions: ["user"],

  fromColor: "gray-500",
  toColor: "gray-500",

  to: "/ai/cssmaker",
  api: "/ai/cssmaker",

  output: {
    title: "Answer",
    desc: "CSS Classes you asked for.",
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
          title: "Code Input",
          attr: "content",
          value: "",
          placeholder: "Enter the Code you want to add CSS For...",
          label: "",
          type: "code",
          maxLength: 10000,
          // max: 100,
          min: 3,
          required: true,
          error: "",
          example: "Distributed Systems",
        },
        {
          title: "Description",
          attr: "desc",
          value: "",
          placeholder: "Enter the description of where to add the classes in the code",
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
