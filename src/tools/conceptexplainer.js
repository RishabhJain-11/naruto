import { ViewListIcon } from "@heroicons/react/solid";

const obj = {
  title: "Concept Explainer",
  desc: "Explanation your Computer Science Fundamentals with ease.",
  category: "Explainers",
  Icon: ViewListIcon,
  // tags: [],
  permissions: ["user"],

  fromColor: "gray-500",
  toColor: "gray-500",

  to: "/ai/conceptexplainer",
  api: "/ai/conceptexplainer",

  output: {
    title: "Explained Output",
    desc: "The following key points detected",
    Icon: false,
    color: "blue",
  },

  prompts: [
    {
      title: "Concept Description",
      desc: "A sentence or description you wish to understand in bullet point form.",
      // n: 1,
      prompts: [
        {
          title: "Content",
          attr: "content",
          value: "",
          placeholder: "Concept of Mining in Blockchain...",
          label: "",
          type: "textarea",
          maxLength: 60,
          // max: 100,
          min: 3,
          required: true,
          error: "",
          example: "Hello World",
        },
      ],
      example: {
        output: `Hello World`,
        // Icon: RefreshIcon,
        color: "blue",
      },
    },
  ],
};

export default obj;
