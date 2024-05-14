import { ViewListIcon } from "@heroicons/react/solid";

const obj = {
  title: "Concept Explainer",
  desc: "Detect errors easily with the help of this Error Detection Platform, be it any form of error.",
  category: "Programming",
  Icon: ViewListIcon,
  // tags: [],
  permissions: ["user"],

  fromColor: "gray-500",
  toColor: "gray-500",

  to: "/ai/conceptexplainer",
  api: "/ai/conceptexplainer",

  output: {
    title: "Example",
    desc: "The following key points detected",
    Icon: false,
    color: "blue",
  },

  prompts: [
    {
      title: "Entry Text",
      desc: "A sentence or paragraph you wish to understand in bullet point form.",
      // n: 1,
      prompts: [
        {
          title: "Content",
          attr: "content",
          value: "",
          placeholder: "When doing an your taxes, it's important to...",
          label: "",
          type: "textarea",
          maxLength: 600,
          // max: 100,
          min: 3,
          required: true,
          error: "",
          example: "Hello World ",
        },
      ],
      example: {
        output:
          "Hello World Hello World Hello World Hello World Hello World Hello World Hello World ",
        // outputs: [
        // 	"The sun is very old, over 4.5 billion years",
        // 	"At 10,000 degrees, sun is also very hot",
        // 	"Gasses called coronal mass ejections erupt from the sun",
        // ],
        // Icon: RefreshIcon,
        color: "blue",
      },
    },
  ],
};

export default obj;
