import { ViewListIcon } from "@heroicons/react/solid";

const obj = {
  title: "Theoretical Explanation of Algorithm",
  desc: "Gives theory based answers of the Algorithm Asked",
  category: "Explainers",
  Icon: ViewListIcon,
  // tags: [],
  permissions: ["user"],

  fromColor: "blue-600",
  toColor: "yellow-500",

  to: "/ai/algoexplain",
  api: "/ai/algoexplain",

  output: {
    title: "Algorithm Explanation",
    desc: "The following key points detected",
    Icon: false,
    color: "blue",
  },

  prompts: [
    {
      title: "Enter Algorithm Name",
      desc: "An algorithm you wish to understand.",
      // n: 1,
      prompts: [
        {
          title: "Algorithm Input",
          attr: "content",
          value: "",
          placeholder: "Bubble Sort Algorithm...",
          label: "",
          type: "textarea",
          maxLength: 60,
          // max: 100,
          min: 3,
          required: true,
          error: "",
          example: "Insertion Sort",
        },
      ],
      example: {
        output: `HelloWorld`,
        color: "blue",
      },
    },
  ],
};

export default obj;
